const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  let longestString = ['']
  if (arrayOfString == null || arrayOfString == undefined){
    return undefined
  }else {
    for(let arr1 of arrayOfString){
      if(arr1.length > longestString[0].length){
        longestString[0] = arr1
      } else if (arr1.length === longestString[0].length){
        longestString[1] = arr1
      }
  }
  return longestString
}
}
 /* let result = ['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']
  for(let i = 0; i < arrayOfString.length ; i++){
  let currenelement = arrayOfString[i]
   return (currenelement.length > result.length ? arrayOfString[i]) 
}
  return result
}*/
console.log(getMaxLengthString(undefined))
module.exports = getMaxLengthString
