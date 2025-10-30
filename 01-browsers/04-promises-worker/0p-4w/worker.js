console.log("hello from dedicated worker");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

self.onmessage = async (event) => {
    // await sleep(4000);
    for (let i = 0; i < 5000000000; i++) {
        // ~4sec
    }
    console.log("Message from main thread:", event.data);
    postMessage("msg sent from worker.js");
}