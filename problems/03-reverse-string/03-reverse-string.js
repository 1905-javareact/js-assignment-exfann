/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let split = someStr.split('')
    let arr = []
    for(key of split){
        arr.unshift(key)
    }
    let reverse = arr.join('')
    console.log(reverse)
}

reverseStr('hello')