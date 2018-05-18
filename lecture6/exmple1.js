const arr = [{
    "id": 1,
    "first_name": "Derril",
    "last_name": "Schwant",
    "email": "dschwant0@exblog.jp",
    "gender": "Male",
    "salary": "1620.19",
    "marks": [{
            "mark": 3,
            "lesson": 1
        },
        {
            "mark": 7,
            "lesson": 2
        }
    ]
}, {
    "id": 2,
    "first_name": "Bobbee",
    "last_name": "O'Cridigan",
    "email": "bocridigan1@barnesandnoble.com",
    "gender": "Female",
    "salary": "1495.10",
    "marks": [{
            "mark": 2,
            "lesson": 1
        },
        {
            "mark": 6,
            "lesson": 2
        }
    ]
}, {
    "id": 3,
    "first_name": "Hector",
    "last_name": "Dawes",
    "email": "hdawes2@myspace.com",
    "gender": "Male",
    "salary": "1076.75",
    "marks": [{
            "mark": 4,
            "lesson": 1
        },
        {
            "mark": 8,
            "lesson": 2
        },
        {
            "mark": 7,
            "lesson": 3
        },
        {
            "mark": 3,
            "lesson": 4
        }
    ]
}, {
    "id": 4,
    "first_name": "Vernon",
    "last_name": "Nary",
    "email": "vnary3@stanford.edu",
    "gender": "Male",
    "salary": "4045.63",
    "marks": [{
            "mark": 2,
            "lesson": 1
        },
        {
            "mark": 8,
            "lesson": 2
        }
    ]
}, {
    "id": 5,
    "first_name": "Sterne",
    "last_name": "Beames",
    "email": "sbeames4@ucoz.com",
    "gender": "Male",
    "salary": "4565.60"
}, {
    "id": 6,
    "first_name": "Esmeralda",
    "last_name": "McCard",
    "email": "emccard5@topsy.com",
    "gender": "Female",
    "salary": "3017.49",
    "marks": [{
            "mark": 8,
            "lesson": 1
        },
        {
            "mark": 7,
            "lesson": 2
        },
        {
            "mark": 1,
            "lesson": 3
        },
        {
            "mark": 6,
            "lesson": 4
        }
    ]
}];

// console.log(
//     'element with id 6',
//     arr.find(elem => elem.id === 6)
// );
// arr.forEach(elem => elem.salary *= 2);
// console.log(
//     arr
// );

const countGender = (gender, value) =>
    (accum, item) => item.gender === value ?
    accum[gender] + 1 : accum[gender];

const countMale = countGender('male', 'Male');
const countFemale = countGender('female', 'Female');

const count = arr.reduce((accum, item) => {
    accum.female = countFemale(accum, item);
    accum.male = countMale(accum, item);
    return accum;
}, {
    male: 0,
    female: 0
})
// console.log(count);
// const mul = (a) => (b) => (c) => a * b * c;
// console.log(mul(2)(2)(2));
// const sumSalary = arr.reduce((accum, elem) => accum += parseFloat(elem.salary), 0);
// console.log(sumSalary);
// const male = arr.reduce((acc, item) =>
//     item.gender === 'Male' ? [item, ...acc] : acc, []);
// const findByKey = (arr, key) =>
//     (value) => arr.filter(item =>
//         item[key] === value);
// const findByFirstName = findByKey(arr, 'first_name');
// console.log(findByFirstName('Vernon'));
// console.log(arr.map((item) => item.salary));
// console.log(arr.map(({
//     salary,
//     gender
// }) => ({
//     salary,
//     gender
// })));

const increment = (start) => (num = 1) => start += num;

const inc = increment(1);
console.log(inc());
console.log(inc());
if (inc() === 4 && inc(2) === 6) {
    console.log(true);
}
const argumentsExample = (...args) => {
    return Math.max(...args);
}
console.log(argumentsExample(1, 2, 3, 5, 6));
console.log(Math.max(...arr.map(({
    salary
}) => salary)));