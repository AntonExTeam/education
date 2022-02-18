function asyncSum(a, b) {

    return new Promise((resolve, reject) => {
        if ((typeof a !== 'number') || (typeof b !== 'number')) {
            reject(new Error());

        }
        setTimeout(() => resolve(a + b), 1000);
    })
}

window.asyncSum = asyncSum;

export default asyncSum;
