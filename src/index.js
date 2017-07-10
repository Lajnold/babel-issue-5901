const singleFunction = (...args) => {
    // Works
    const copy = [...args];
};

const outerFunctionAndSlice = outer => (...args) => {
    // Works
    const copy = args.slice();
};

const outerFunction = outer => (...args) => {
    // Doesn't work
    const copy = [...args];
};

const outerFunctionAndSliceAndCallingOtherFunction = outer => (...args) => {
    // Doesn't work
    const copy = args.slice();
    singleFunction(...args);
};

const outerFunctionAndSliceAndCallingOtherFunctionWithCopy = outer => (...args) => {
    // Passing ...copy instead of ...args doesn't work either
    const copy = args.slice();
    singleFunction(...copy);
};