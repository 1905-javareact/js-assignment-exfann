/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let split = someStr.split('')
    let arr = []
    for(key of split){
        arr.unshift(key)
    }
    let reverse = arr.join('')
    if(someStr === reverse){
        console.log(`${someStr} is a palindrome`)
    }
    else{
        console.log(`${someStr} is not a palindrome`)
    }
}

isPalindrome('racecbar')