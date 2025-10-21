let counter = 0;

self.oninstall = (event) => {
    console.log('Service worker install');
}

self.onactivate = (event) => {
    console.log('Service worker activate');
    event.waitUntil(self.clients.claim());
}

self.onfetch = (event) => {
    console.log('Service worker fetch', event.request.url);
    if (event.request.url.endsWith('/data.json')) {
        counter++;
        const jsonResponse = JSON.stringify({ counter });
        event.respondWith(new Response(jsonResponse, {
            headers: { 'Content-Type': 'application/json' }
        }));
        return;
    }
    event.respondWith(fetch(event.request));
}