/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let switched
    do{
        switched = false
        for (let i = 0; i < numArray.length-1; i++){
            if (numArray[i] > numArray[i+1]){
                let x = numArray[i]
                numArray[i] = numArray[i+1]
                numArray[i+1] = x
                switched = true
            }
        }
    }
    while(switched)
    return nums
}

nums = [2, 5, 3, 44, 22, 92, 11, 21]
console.log(bubbleSort(nums))
