function isEqual(a, b) {

    if(a === b) {
        return true
    }

    if (a == null && b != null) {
        return false;
    }

    if (b == null && a != null) {
        return false;
    }

    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if(!b.hasOwnProperty(key)) {
            return false;
        }
        if (a[key] !== b[key]) {
            return false;
        }

    }
    return true;
}


window.isEqual = isEqual;

export default isEqual;
