navigator.serviceWorker.register('service-worker.js', { scope: '/' });
navigator.serviceWorker.oncontrollerchange = () => {
    console.log('service worker took control');
}
async function makeRequest() {
    const result = await fetch('/data.json');
    const payload = await result.json();
    console.log(payload);
}