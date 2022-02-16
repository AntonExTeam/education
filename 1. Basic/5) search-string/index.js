function searchString(obj) {

    let keysFromObject = Object.keys(obj);

    if (keysFromObject.length === 0) {
        return "";
    }

    let strFromArray = keysFromObject.reduce(function(arr, item){
        if (obj[item] == null || obj[item] === '') {
            return arr;
        }
        arr.push(item + '=' + (obj[item]));
        return arr;
    }, []);

    return '?' + strFromArray.join('&');
}

window.searchString = searchString;

export default searchString;
