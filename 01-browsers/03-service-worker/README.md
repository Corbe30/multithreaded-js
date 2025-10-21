## Service Worker

This is a boilerplate for service-worker implementation. A service worker is like a proxy layer that can intercept every *outbound* requests from client. All of the following use cases can be implemented without much additional changes to current files.

### Use cases
1. Offline functionality support
2. Boosting speed by caching static assets / API calls
3. Heavy operations before forwarding request. e.g. encryption / decryption
4. Combine atomic patches in queue to reduce calls + offline support
5. Push notifications (even when web app is not actively open)

### Development:
1. Start server with `npx serve .`
2. Open console and run:
    ```
    makeRequest()
    ```
3. Along with the response being printed in console, another interesting thing to observe is the requests appearing in the networks tab.