let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];
for (let i = 0; i < numbers.length; i++) {
    let proximo = i + 1
    if (i != numbers.length - 1) {
       array.push(numbers[i] * numbers[proximo])
    }
    else {
        array.push(numbers[i] * 2)

    }
}
console.log(array);