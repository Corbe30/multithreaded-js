class RpcWorker {
    constructor() {
        this.nextRequestId = 0;
        this.pendingRequests = new Map();
    }

    onMessageHandler(event) {
        const { requestId, result, error } = event.data;
        const { resolve, reject } = this.pendingRequests.get(requestId);
        this.pendingRequests.delete(requestId);
        if (error) reject(error);
        else resolve(result);
    }

    exec(method, ...params) {
        const worker = new Worker("worker.js");
        worker.onmessage = this.onMessageHandler.bind(this);
        const requestId = this.nextRequestId++;
        let resolve, reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        this.pendingRequests.set(requestId, { resolve, reject });
        worker.postMessage({ requestId, method, params });
        return promise;
    }
}