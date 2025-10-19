let connectedPorts = new Set();
const tempPorts = new Set();

setInterval(async () => {
  tempPorts.clear();
  for (const p of connectedPorts) {
    p.postMessage(`ping`);
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  connectedPorts = new Set(tempPorts);
  console.log(`Active ports count: ${connectedPorts.size}`);
}, 5000);

self.onconnect = (event) => {
  const port = event.ports[0];
  connectedPorts.add(port);
  console.log(`New port connected. Total ports: ${connectedPorts.size}`);
  port.onmessage = (event) => {
    if (Array.isArray(event.data) && event.data[0] === "ping") {
      tempPorts.add(port);
      return;
    }
    // continue functionality here
  };
};
