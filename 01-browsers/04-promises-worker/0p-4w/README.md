## Dedicated Worker

A dedicated worker is only accessible by the script that called it

### Order of execution:
`mainWorker.postMessage()` -> `dedicatedWorker.onmessage()` -> `dedicatedWorker.postMessage()` -> `mainWorker.onmessage()`