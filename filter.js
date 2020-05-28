const filter = (arr, cb) => {
  // declare a return array
  const returnArr = [];

  // iterate through the array
  for (const elem of arr) {
    // call the callback for each element
    const returnVal = cb(elem);

    // if the callback returns truthy, push the element into the new array
    if (returnVal) {
      returnArr.push(elem);
    }
  }
  
  // return the array
  return returnArr;
};

const arr = [1, 4, 6, 8];
const filterFn = (num) => {
  return num < 5;
};
const filtered = filter(arr, filterFn);
console.log(filtered);
