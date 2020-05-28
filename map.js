const map = (arr, cb) => {
  // declare the return array
  const returnArr = [];

  // iterate through the array
  for (const elem of arr) {
    // call the callback for every element
    const returnValue = cb(elem);

    // push the return value into the return array
    returnArr.push(returnValue);
  }

  // return the array
  return returnArr;
};

const arr = [1, 2, 3, 4];
const newArr = map(arr, (elem) => {
  return elem * 2;
});
console.log(arr);
console.log(newArr);

const marks = ['Wahlburg', 'Zuckerberg', 'Twain'];
const sayHello = (mark) => {
  return `hello Markie ${mark}`;
};
const mappedMarks = map(marks, sayHello);
console.log(mappedMarks);
