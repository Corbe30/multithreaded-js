console.log("[BLUE] hello from blue.js");

const worker = new SharedWorker("shared-worker.js" , "blue");
worker.port.onmessage = (event) => {
  if (event.data === "ping") {
    worker.port.postMessage(["ping", true]);
    return;
  }
  // continue functionality here
};
