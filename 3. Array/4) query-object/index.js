const {stringToType} = require("../../2. Data Types/1) string-to-type/index")

function queryToObject(query) {

    let arrParams = query.replace('?', '').split('&');
    let result = {};

    arrParams.forEach(function(item) {
        let [key, value] = item.split('=');
        result[key] = stringToType(value);
    });

    return result;
};

window.queryToObject = queryToObject;

export default queryToObject;
