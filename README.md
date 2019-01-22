## triggered-promise
A promise that could be triggered externally.

## Installation

npm i @odd-tools/triggered-promise

## Usage:

```typescript
let triggeredPromise: TriggeredPromise<number> = new TriggeredPromise();
triggeredPromise.resolve(42);
//will be resolved with 42
const val = await triggeredPromise;
```
## Documentation

### resolve(value?: T | PromiseLike<T>): void
Resolves the promise with a given value. 

### reject(reason?: any): void 
Rejects the promise with a given reason
