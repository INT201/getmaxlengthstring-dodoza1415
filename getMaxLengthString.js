const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  return ( arrayOfString[0].length)
}
getMaxLengthString(['hello', 'hi', 'hey'])
module.exports = getMaxLengthString
