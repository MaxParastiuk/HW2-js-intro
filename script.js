console.log('------------- #1')

let a = 4;
let b = 4;
let c = a + b;
console.log(c);
c = a - b;
console.log(c);
c = a / b;
console.log(c)
c = a * b;
console.log(c)

console.log('------------- #2')
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 5; i > 0 ; i--) {
    console.log(i)
}

console.log('------------- #3')
    function getMarkInfo(condition) {
                if (condition === 10) {
                    console.log( condition + " " + "У вас максимальный балл");
                }else {
                    console.log( condition + " " + "У вас средний балл");
                }
        }
        (getMarkInfo(1));
        (getMarkInfo(10));

console.log('------------- #4')
function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Wrong data")
    }
}
    getDayInfo(0);
    getDayInfo(1);
    getDayInfo(2);
    getDayInfo(3);
    getDayInfo(4);
    getDayInfo(5);
    getDayInfo(6);
    getDayInfo(7);

console.log('------------- #5')
let arr = ['a','b','c'];
arr.push(1,2,3);
console.log(arr)

console.log('------------- #6')
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3)

console.log('------------- #7')
function countNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return(sum) ;
}
let num = Number(prompt("Введите число, задание #7"));
console.log(countNumber(num))


