const runMyFunction = function(fn) {
  console.log('running the function');
  fn(false);
  console.log();
};

const myFunc = function() {
  console.log('myFunc fired');
};

const greeting = function(name) {
  console.log(`good day to you ${name}`);
};

const name = 'Amy';
greeting(name);
greeting('Amy');

const addToTwo = function(num) {
  console.log(num + 2);
};

const myVal = runMyFunction(myFunc);
runMyFunction(greeting);
runMyFunction(addToTwo);

const arr = [1, 2, 3];

const callback = function(num) {
  console.log(num);
};
arr.forEach(callback);

arr.forEach(function(num) {
  console.log(num);
});





// 
