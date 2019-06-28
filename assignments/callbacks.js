// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', "Gum"];

 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });


// getLength passes the length of the array into the callback.
// higher order function

function getLength(arr, cb) {
  return cb(arr.length);
}

function logger(val){
  console.log(`The value you returned is ${val}`);
}

// function invocation
getLength(arr, logger);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const lastItem = arr.pop();
  return cb(lastItem);
}

last(arr, logger);

  // sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x+y);
}

sumNums(9, 3, logger);


  // multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x*y);
}

multiplyNums(3, 5, logger);

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  return cb(list.includes(item));
}

contains("Gum", items, logger);

/* STRETCH PROBLEM */

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

function removeDuplicates(array, cb) {
  let noDupes = [];
  array.map((e,i) => !noDupes.includes(e) && noDupes.push(e));
  return cb(noDupes)
}

removeDuplicates(items, logger);