function xhrGet(url) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.responseType = 'json';

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send();

    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            }
            resolve(xhr.response);
        }
        xhr.onerror = () => {
            reject(xhr.response);
        };
    });
}

window.xhrGet = xhrGet;

export default xhrGet;
