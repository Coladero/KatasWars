// Given a string, you have to return a string in which each 
// character (case-sensitive) is repeated once.


// Solution:


function doubleChar(str) {
    // create empty string var
      
    let newString = '';
      
    // then loop over str parameter
    for (let i = 0; i < str.length; i++) {
      // then assign the str to empty variable
      newString = newString + str[i].repeat(2)
    }
    
    // return the assigned variable
    return newString;
    }


