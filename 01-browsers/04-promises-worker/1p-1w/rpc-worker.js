class RpcWorker {
    constructor(scriptUrl) {
        this.nextRequestId = 0;
        this.pendingRequests = new Map();
        this.worker = new Worker(scriptUrl);
        this.worker.onmessage = this.onMessageHandler.bind(this);
    }

    onMessageHandler(event) {
        const { requestId, result, error } = event.data;
        const { resolve, reject } = this.pendingRequests.get(requestId);
        this.pendingRequests.delete(requestId);
        if (error) reject(error);
        else resolve(result);
    }

    exec(method, ...params) {
        const requestId = this.nextRequestId++;
        let resolve, reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        this.pendingRequests.set(requestId, { resolve, reject });
        this.worker.postMessage({ requestId, method, params });
        return promise;
    }
}