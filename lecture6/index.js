const arr = [1, 2, 3, 4, 5, 6, 7];
const [first, second, third] = arr;
console.log(arr, first, second, third);
const newArr = [...arr, ...arr, first, second];
console.log(newArr);
[{
    name: 'A',
    salary: '100'
}]