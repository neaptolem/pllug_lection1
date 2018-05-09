console.log('hello world');
var a = 2;
console.log(typeof a);



(() => {
    var a = [1, 2, 3, 5, 6, 7, 8];
    const reverse = (arr, start, end) => {
        let c = arr[start];
        arr[start] = arr[end];
        arr[end] = c;
        console.log(arr, start, end);
        if (start < end) {
            return reverse(arr, ++start, --end);
        } else {
            return arr;
        }
    };
    console.log(reverse(a, 0, a.length - 1));
})();