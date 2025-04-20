const removeFromArray = function(array, ...args) {
       let newArray = array.filter(item => !args.includes(item))
       return newArray;
}


console.log(removeFromArray([1, 2, 3, 4], null, 1));


// Do not edit below this line
module.exports = removeFromArray;
