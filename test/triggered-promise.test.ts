import {TriggeredPromise} from "../dist/triggered-promise";

describe("Promise resolved tests", () => {
    let triggeredPromise: TriggeredPromise<any>;
    beforeEach(() => {
        triggeredPromise = new TriggeredPromise();
    });
    it('simple await', async () => {
        triggeredPromise.resolve();
        await triggeredPromise;
        //if fails this test will exceed the timeout
    });
    it('passing a value', async () => {
        triggeredPromise.resolve(3);
        const value = await triggeredPromise;
        expect(value).toBe(3);
    });
    it('multiple await + value', async () => {
        triggeredPromise.resolve(3);
        const val1 = await triggeredPromise;
        const val2 = await triggeredPromise;
        expect(val1).toBe(3);
        expect(val2).toBe(3);
    });
});

describe('Then syntax check', () => {
    let triggeredPromise: TriggeredPromise<any>;
    beforeEach(() => {
        triggeredPromise = new TriggeredPromise();
    });
    it('simple then check', async () => {
        triggeredPromise.resolve(42);
        await triggeredPromise.then((value: number) => {
            expect(value).toBe(42);
        });
    })
});

describe("Promise rejected tests", () => {
    let triggeredPromise: TriggeredPromise<any>;
    beforeEach(() => {
        triggeredPromise = new TriggeredPromise();
    });
    it('simple await reject', async () => {
        triggeredPromise.reject('did not work');
        await expect(triggeredPromise).rejects.toEqual('did not work');
    });
    it(' then syntax reject', async () => {
        triggeredPromise.reject('did not work');
        await triggeredPromise.then((value: number) => {
            //shouldn't be executed
            expect(false).toBe(true);
        }).catch((e)=>{
            expect(e).toEqual('did not work');
        })

    })
});