let n = 10; 


console.log("Barcha sonlar:");
let allNumbers = "";
for (let i = 1; i <= n; i++) {
    allNumbers += i + " ";
}
console.log(allNumbers);


console.log("Juft sonlar:");
let evenNumbers = "";
let i = 1;
while (i <= n) {
    if (i % 2 === 0) {
        evenNumbers += i + " ";
    }
    i++;
}
console.log(evenNumbers);




