/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let front = someArr.slice(0, index)
    let back = someArr.slice(index+1, someArr.length)
    let spliced = front.concat(back)
    return spliced
}

let arr = [1,2,3,4,5,6,7,8,9]

console.log(spliceElement(arr, 5))