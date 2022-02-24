function rowZero(str) {

    let numOfZero = str.match(/0+/g);
    let zeroCount = [];

    if ((str === "") || (str.indexOf("0") === -1)) {
        return 0;
    }

    for (let i = 0; i < numOfZero.length; i++) {
        zeroCount.push(numOfZero[i].length);
    }

    return Math.max(...zeroCount);
}

window.rowZero = rowZero;

export default rowZero;
