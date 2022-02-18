async function asyncSum(a, b) {

    return await new Promise((resolve, reject) => {
        if ((typeof a !== 'number') || (typeof b !== 'number')) {
            reject(new Error());

        }
        return setTimeout(() => resolve(a + b), 1000);
    })
}

window.asyncSum = asyncSum;

export default asyncSum;
