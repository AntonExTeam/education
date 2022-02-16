function arraysSort(arr) {

    const newArr = [...arr]

    return newArr.sort(function(a, b) {
        if (Math.max(...a) > Math.max(...b)) return 1;
        if (Math.max(...a) === Math.max(...b)) return 0;
        if (Math.max(...a) < Math.max(...b)) return -1;
    });
}

window.arraysSort = arraysSort;

export default arraysSort;
