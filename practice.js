/*
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // Your code in here ...
  let goodStations = [];

  for (let station of stations) {
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      goodStations.push(station[0]);
    }
  }

  return goodStations;
}

chooseStations(stations);
//-----------------------------------------
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let position = [0, 0];
  for (let move of moves) {
    switch (move) {
      case 'north':
        position[1]++;
        break;
      case 'east':
        position[0]++;
        break;
      case 'south':
        position[1]--;
        break;
      case 'west':
        position[0]--;
        break;
      default:
        console.log('error in position switch/case');
    }
  }
  return position;
}

finalPosition(moves);
//-----------------------------------------
const ageCalculator = function (name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
//-----------------------------------------

const howManyHundreds = function (num) {
  let waste = num % 100;
  return (num - waste) / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
//-----------------------------------------

const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0) {
    return;
  } else {
    return length * width;
  }
}

const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0) {
    return;
  } else {
    return base * height / 2;
  }
}

const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return;
  } else {
    return Math.PI * (radius * radius);
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
//-----------------------------------------
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function(bill) {
  bill *= 1.15;
  //toFixed returns a string, so run this operation first then convert to a number
  return Number(bill.toFixed(2));
});

console.log(totals);
//-----------------------------------------
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let row = 0; row < numbers.length; row ++) {
  for (let col = 0; col < numbers[row].length; col ++) {

    if (numbers[row][col] % 2 === 0) {
      numbers[row][col] = "even";
    } else {
      numbers[row][col] = "odd";
    } 
  }
}
*/