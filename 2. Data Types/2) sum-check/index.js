function sumCheck(a, b) {
    if ((typeof a !== "number") || (typeof b !== "number")){
        throw new TypeError("Wrong arguments type!");

    }
    return a + b;
}

window.sumCheck = sumCheck;

export default sumCheck;
