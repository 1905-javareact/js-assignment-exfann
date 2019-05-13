/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let a = []
  if(shape === 'Square'){
    for(let x = 0; x < height; x++){
      a.push(character)
    }
    for(let i = 0; i < height; i++){
      console.log(a.join(''))
    }
  }
  if(shape === 'Triangle'){
    for(let i = 0; i < height; i++){
      a.push(character)
      console.log(a.join(''))
    }
  }
  if(shape === 'Diamond'){
    for(let y = 0; y < height; y++){
      a.push(' ')
    }
    let center = Math.floor(height / 2)
    console.log(center)
    let left = center
    //left = left--
    console.log(left)
    let right = center
    //right = right++
    console.log(right)
    a[center] = character
    //console.log(a.join(' '))
    for(let i = 0; i < height; i++){
      if(i <= center){
        a[left] = character
        a[right] = character
        left--
        right++
        console.log(a.join(' '))
      }
      if(i > center){
        left++
        right--
        a[left] = ' '
        a[right] = ' '
        console.log(a.join(' '))
      }
      

    }
  }
}

printShape('Square', 7, '%')
printShape('Triangle', 7, '*')
printShape('Diamond', 7, '%')