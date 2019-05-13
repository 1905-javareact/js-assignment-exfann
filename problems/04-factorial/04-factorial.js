/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    let fact = sumNum
    for(let i = sumNum-1; i > 0; i--){
        fact = fact * i
    }
    return fact
}

console.log(factorial(5))