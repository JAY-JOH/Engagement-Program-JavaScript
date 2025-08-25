function add(a , b){
    return a + b ;
}

function subtract(a , b) {
    return a - b ;
}

function multiply(a , b) {
    return a * b ;
}

function divide(a , b) {
    return a / b ;
}
function average(number) {
    let sum =0;
    for (let i =0 ; i < number.length ; i++){
        sum += number[i];
    }
    return sum / number.length ; 
}
console.log("Add:", add(5, 3));          
console.log("Subtract:", subtract(5, 3)); 
console.log("Multiply:", multiply(5, 3)); 
console.log("Divide:", divide(10, 2));    
console.log("Average:", average([2, 4, 6, 8]));