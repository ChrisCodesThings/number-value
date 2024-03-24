
const { default: testFunc } = await import("../");

describe("check for bad input", () => {
    test("nothing", async () => {
        expect(testFunc()).toBeUndefined();
    });

    test("boolean", async () => {
        expect(testFunc(true)).toBeUndefined();
    });

    test("an invalid string", async () => {
        expect(testFunc("foo")).toBeUndefined();
    });

    test("a symbol", async () => {
        expect(testFunc(Symbol("bar"))).toBeUndefined();
    });
});

describe("check number values", () => {
    test("a number", async () => {
        expect(testFunc(123)).toEqual(123);
    });

    test("a negative number", async () => {
        expect(testFunc(-123)).toEqual(-123);
    });

    test("a number string", async () => {
        expect(testFunc("123")).toEqual(123);
    });

    test("a negative number string", async () => {
        expect(testFunc("-123")).toEqual(-123);
    });

    test("NaN", async () => {
        expect(testFunc(Number("not a number"))).toBeUndefined();
    });

    test("infinity", async () => {
        expect(testFunc(Infinity)).toBeUndefined();
    });
});
