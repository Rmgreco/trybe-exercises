let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0; 
for (let pos = 0; pos<numbers.length; pos+=1){
if (numbers[pos] % 2 != 0){
    impar += 1;
}
}
if (impar==0){
    console.log("nenhum valor impar encontardo");
}
else{
console.log(impar);
}