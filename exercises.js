// ---------------------
// 1. Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------
// myFunction('string', i) => ['string', 'string', 'string'];

function myFunction(str, int) {
  const newArray = [];
  for (let i = 0; i < int; i++) {
    newArray.push(str); //pushing in value of sunshine (str) 3 times
  }
  return newArray;
}


myFunction('sunshine', 3);//call the function with actual arguments in parentheses
//myFunction('sunshine', 3); // ['sunshine', 'sunshine', 'sunshine'];











// -----------------------------------------------

// ---------------------
// 2. Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverse(arr) {
    // const newArray = [1, 2, 3];
    const reverted = [...arr].reverse();// [...]spread operator creates a shallow copy, so reverse() does not mutate the original
    // reverted[0] = 3;
    // console.log(newArray[0]);
    return reverted;
}

reverse([1,2,3,4]);//calling the function








// -----------------------------------------------

// ---------------------
// 3. Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function removes (arr) {
    const array = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];
 
const filtered = array.filter(Boolean);//pass boolean constructor to filter method to filter out all falsy values.This works since boolean constructor returns false on any falsy values. 
return filtered;
}

removes([1, 2, 3]);//calling the function


/*other solution with for loop
function removeFalsyValues(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]); { 
            result.push(arr[i]);
        }
    }
    return result; 
}
*/



// -----------------------------------------------

// ---------------------
// 4. Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function nested (arr) {
    const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
    const obj = Object.fromEntries(myArray);//Object.fromEntries() static method transforms a list of key-value pairs into an object
    return obj;
}
nested();//calling the function

/*other solution with for loop
function createObj(arr) {
   const result = {};

   for (let i = 0; i < arr.length; i++) {
        result[arr[i][0]] = arr[i][1];
    }
    return result;
} */








// -----------------------------------------------

// ---------------------
// 5. Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

function removeDuplicates () {
    const values = [1,2,3,4,5,4,3];
    const uniqueValues = [...new Set(values)]; //[...] creates a shallow copy, so it does not mutate the original
    return uniqueValues;

}

removeDuplicates();//calling the function

//A Set is a collection of unique values. To remove duplicates from an array:

//First, convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.
//Then, convert the set back to an array.

/*other solution
function removeDuplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if(result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}*/





// -----------------------------------------------

// ---------------------
// 6. Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------
function identicalValues (arr1, arr2) {
if (arr1.length !== arr2.length) { //use strict inequality
    return false;
    }
    else {
        for (let i=0; i < arr1.length; i++) {

        if (!arr2.includes(arr1[i])) //calling includes on this array, but using a logical NOT operator or BANG operator says-"if arr.2 does NOT include"
        return false; }
    }
    return true;

}

identicalValues([1, 2, 3, 4], [1, 2, 3, 4]);










// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
