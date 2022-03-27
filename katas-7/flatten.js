// Write a function that flattens an Array of Array objects 
// into a flat Array. Your function must only do one level of 
// flattening.


// Solution:


var flatten = function (array){
    return [].concat.apply([],array)
  }