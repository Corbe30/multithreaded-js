console.log("hello from main.js");

const worker1 = new Worker("worker.js");
worker1.onmessage = (event) => {
  console.log("Message from worker:", event.data);
};
worker1.postMessage("ping from main.js - 1");
worker1.postMessage("ping from main.js - 2");

console.log("main.js ends here");
