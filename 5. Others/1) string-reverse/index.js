function reverse(str) {

    if (!str) {
        str = this;
    }

    let strArray = str.split("");
    let strReverse = "";

    for (let i = strArray.length - 1; i >= 0; i--) {
        strReverse += strArray[i];
    }
    return strReverse;
}

String.prototype.reverse = reverse;


