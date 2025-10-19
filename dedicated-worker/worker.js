console.log("hello from dedicated worker");
self.onmessage = (event) => {
    console.log("Message from main thread:", event.data);
    postMessage("msg sent from worker.js");
}