/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    let keys = Object.keys(someObj)
    console.log(keys)
    for(let prop of keys){
        console.log(`${prop} : ${someObj[prop]}`)
    }
}

Obj = {
    name: 'Taly',
    class: 'Witch',
    patron: 'Shadow'
}

objectProperties(Obj)