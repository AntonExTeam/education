const {isEqual} = require("../../2. Data Types/3) is-equal-simple/index")

function isEqualAdvances(a, b) {

    if (a === b) {
        return true
    }

    if (a === null || b === null) {
        return false;
    }

    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if ((typeof a[key] === 'object') && (typeof b[key] === 'object')) {
            return isEqual(a[key], b[key])
        }
        if (!b.hasOwnProperty(key)) {
            return false;
        }
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
