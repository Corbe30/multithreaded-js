## Advanced Shared Worker

This is a boilerplate for shared-worker that handles memory leaks by pinging calling envs at regular intervals to check for lost connection (e.g. closed tabs / page crash / page reloads). 

This also handles the situation where when a page is reloaded, a new connection is formed without pruning the previous connection. You can check this by reloading one of the page - shared-worker's console will show:

```
[0:00] New port connected. Total ports: 3
[0:05] Active ports count: 2
```

### Development:
1. Start the server:
    ```
    npx server .
    ```
2. Open http://localhost:3000/red and http://localhost:3000/blue.
3. Go to `chrome://inspect/#workers`. Under the Shared workers section, you'll see http://localhost:3000/shared-worker.js. Click on inspect.
4. Our service worker pings the calling envs every 5sec, and wait for 1sec for their response.
    ```
    New port connected. Total ports: 1
    New port connected. Total ports: 2
    Active ports count: 2
    ```
5. If no response is received, the calling env port is removed from connected ports' list.
    ```
    Active ports count: 1
    ```