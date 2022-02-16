function fullSum(args) {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new TypeError("Wrong Argument Type");
        }
        else {
            sum += arguments[i];
        }
    }
    return sum;
}

window.fullSum = fullSum;

export default fullSum;
