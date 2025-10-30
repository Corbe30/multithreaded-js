const worker = new RpcWorker('worker.js');

Promise.allSettled([
  worker.exec('square_sum', 10),
  worker.exec('fibonacci', 10),
  worker.exec('fake_method'),
  worker.exec('bad'),
]).then(([square_sum, fibonacci, fake_method, bad]) => {
  console.log('square_sum result:', square_sum);
  console.log('fibonacci result:', fibonacci);
  console.log('fake_method result:', fake_method);
  console.log('bad result:', bad);
});