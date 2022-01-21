
let testObject = {
  onez: 1,
  twoz: 2,
  threez: 3
}

let testArray = [1, 2, 3, 4]


// function myEach (collection,functionZ){
//  let newObject = arrayToObject(collection)
// for( let number in newObject){
//   console.log(number)
//   functionZ(newObject[number])
// }

// return collection

// }

// function alert(something){
//   console.log(`this is ${something}`)
// }

function objectToArray(objectZ){
  let newArray = Object.entries(objectZ)
  return newArray
}

function myEach (collection,functionZ){
  let newArray = collection

  if(Array.isArray(collection) === true){
    for( let number of newArray){
      functionZ(number)}
  }else{
    newArray = objectToArray(collection)
    for( let number in newArray){
    functionZ(newArray[number][1])}
  }
  return collection

}


function myMap (collection,functionZ){

  let newArray = collection
  let ArrayZZ = []

  if(Array.isArray(collection) === true){
    for( let number of newArray){
      ArrayZZ.push(functionZ(number))}
  }else{
    newArray = objectToArray(collection)
    for( let number in newArray){
      ArrayZZ.push(functionZ(newArray[number][1]))}
  }
  return ArrayZZ

}




function alert(number){
  console.log(`Yo ${number}`)
}

function myReduce(collection,callback,acc){}


function myFind(arrayZZ, callback){
  let firstArray = []
  for(let numberZ of arrayZZ){
    if((isEven(numberZ))){
      firstArray.push(numberZ)
    }
  }
  return firstArray[0]
}

function isEven(number){
  if(number % 2 === 0){
    return number
  }else{
    console.log('hello')
  }
}

console.log(myFind(testArray,isEven))