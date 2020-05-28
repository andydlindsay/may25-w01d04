const myFunc = function() {};
const myArrow = () => {};

const runMyFunction = function(fn) {
  console.log('running the function');
  fn(false);
  console.log();
};

runMyFunction(num => num + 2);

runMyFunction((num) => {
  return num + 2
});
