const worker = new RpcWorker('worker.js');

Promise.allSettled([
  worker.exec('waitFor4Seconds', 1),
  worker.exec('waitFor4Seconds', 2),
  worker.exec('waitFor4Seconds', 3),
  worker.exec('waitFor4Seconds', 4),
]).then(([res1, res2, res3, res4]) => {
  console.log('res1: ', res1);
  console.log('res2: ', res2);
  console.log('res3: ', res3);
  console.log('res4: ', res4);
});