export class TriggeredPromise<T> {
    private readonly promise: Promise<T | PromiseLike<T>> = null;
    private res: (value?: T | PromiseLike<T>) => void;
    private rej: (reason: any) => void;

    public constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }

    public then<TResult = T>(onFulfilled?: ((value?: T) => TResult | PromiseLike<TResult>) | undefined | null,
                             onRejected?: (reason: any) => PromiseLike<never>): Promise<any> {
        return this.promise.then(onFulfilled, onRejected)
    };

    public catch(onRejected?: (reason: any) => PromiseLike<never>): Promise<T | PromiseLike<T>> {
        return this.promise.catch(onRejected)
    };

    resolve(value?: T | PromiseLike<T>): void {
        return this.res(value)
    };

    reject(reason?: any): void {
        return this.rej(reason)
    };
}