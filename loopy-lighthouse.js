/*
// loop from 100 to 200
for (let i = 100; i <= 200; i++) {

  // check for multiples and print
  if (i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}
// next exercise
const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;

for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);


function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle (height) {
  let result = "";
  for (let i = 1; i <= height; i++) {
      result = result + makeLine(i);
  }
  return result; 
}

console.log(buildTriangle(5));
*/

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));