/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let split = someStr.split('')
    if(startIndex < split.length && endIndex < split.length){
        split = split.slice(startIndex, endIndex)
        let sub = split.join('')
        return sub
    }
    else{
        throw 'invalid input'
    }
    
}
try{
console.log(substring('hello', 0, 3))
}
catch(e){
    console.log(e)
}