console.log("[RED] hello from red.js");

const worker = new SharedWorker("shared-worker.js", "red");
worker.port.onmessage = (event) => {
  if (event.data === "ping") {
    worker.port.postMessage(["ping", true]);
    return;
  }
  // continue functionality here
};
