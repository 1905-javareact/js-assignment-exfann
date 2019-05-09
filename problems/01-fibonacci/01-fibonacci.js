/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if(isNaN(n)){
        throw 'n has to be a number'
    }
    if(n < 0){
        throw 'n has to be greater than 0'
    }
    if (n == 0){
        return 0
    }
    if (n == 1){
        return 1
    }
    else{
        return fib(n-1) + fib(n-2)
    }
}

console.log(fib(50))