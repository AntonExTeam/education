function searchString(obj) {

  let keysFromObject = Object.keys(obj);

    if (keysFromObject.length === 0) {
        return "";
    }

    /*let arr = [];
    for (let i = 0; i < keysFromObject.length; i++) {
        if (obj[keysFromObject[i]] != null && obj[keysFromObject[i]] !== '') {
            arr.push(keysFromObject[i] + '=' + obj[keysFromObject[i]]);
        }

    }*/

    let strFromArray = keysFromObject.reduce(function(arr, item){
        if (obj[item] != null && obj[item] !== '') {
            arr.push(item + '=' + (obj[item]));
        }
        return arr;
    }, []);

    return '?' + strFromArray.join('&');
}

window.searchString = searchString;

export default searchString;
