/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let front = someArr.slice(0, index)
    let elem = someArr[index]
    let back = someArr.slice(index+1, someArr.length)
    let spliced = front.concat(back)
    let ret = [[elem], spliced]
    return ret
}

let arr = [1,2,3,4,5,6,7,8,9]
let c = spliceElement(arr, 5)
let elem2 = c[0]
arr = c[1]
console.log(elem2)
console.log(arr)