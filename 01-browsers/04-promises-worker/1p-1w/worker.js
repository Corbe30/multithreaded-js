const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function asyncOnMessageWrapper(fn) {
    return async (msg) => {
        postMessage(await fn(msg.data));
    }
}

const commands = {
    async square_sum(max) {
        await sleep(Math.random() * 100);
        let sum = 0;
        for (let i = 0; i < max; i++) {
            sum += Math.sqrt(i);
        }
        return sum;
    },
    async fibonacci(n) {
        await sleep(Math.random() * 100);
        if (n <= 1) return n;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    },
    async bad() {
        await sleep(Math.random() * 100);
        throw new Error('Something went wrong in bad()');
    }
};



self.onmessage = asyncOnMessageWrapper(async (rpc) => {
    const { requestId, method, params } = rpc;
    if (commands.hasOwnProperty(method)) {
        try {
            const result = await commands[method](...params);
            return { requestId, result };
        } catch (error) {
            return { requestId, message: error.message };
        }
    } else {
        return {
            requestId,
            error: {
                code: -32601,
                message: `Method not found: ${method}`
            }
        }
    }
});