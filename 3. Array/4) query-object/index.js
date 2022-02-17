import {stringToType} from "../../2. Data Types/1) string-to-type/index.js"

function queryToObject(query) {

    let searchParams = new URLSearchParams(query);
    let arrParams = searchParams.entries();

    function paramsToObject(entries) {
        let result = {}
        for (let [key, value] of entries) {
            result[key] = stringToType(value);
        }
        return result;
    }

    return paramsToObject(arrParams);
};

window.queryToObject = queryToObject;

export default queryToObject;
