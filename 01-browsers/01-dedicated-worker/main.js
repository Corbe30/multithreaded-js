console.log("hello from main.js");

const worker = new Worker("worker.js");
worker.onmessage = (event) => {
  console.log("Message from worker:", event.data);
};
worker.postMessage("ping from main.js");

console.log("main.js ends here");
