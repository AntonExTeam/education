function stringToType(str) {
    if (str === "null") {
        return null;
    }
    if (str === "undefined") {
        return undefined;
    }
    if (str === "true") {
        return true;
    }
    if (str === "false") {
        return false
    }
    if (str === "NaN") {
        return NaN;
    }
    if (str === "") {
        return str;
    }
    if (str == Number(str)) {
        return Number(str);
    }
        return str;
}

window.stringToType = stringToType;

export default stringToType;

