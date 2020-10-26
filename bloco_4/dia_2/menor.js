let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0]; 
for (let pos = 0; pos<numbers.length; pos+=1){
if (numbers[pos] < menor){
    menor = numbers[pos];
}
}
console.log(menor);