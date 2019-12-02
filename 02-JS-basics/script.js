/*
 * Variables and data types
 * */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var $years = 4;
// var if = 23;
*/

/*
 * Variable mutation and type coercion
 * */

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name');
console.log(firstName + ' ' + lastName);
*/

/*
 * Basic operators
 * */

/*
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof ageMark);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*
 * Operator precedence
 * */

/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log('isFullAge', isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log('average', average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log('x', x);
x += 10;
console.log('x', x);
x++;
console.log('x', x);
x--;
console.log('x', x);*/

/*
 * If / else statements
 * */

/*var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon:)');
}

var isMerried = false;
if (isMerried) {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon:)');
}

var MarksHeight = 1.85;
var MarksMass = 77;
var MarksBMI = MarksMass / (MarksHeight * MarksHeight);

var JohnHeight = 1.6;
var JohnMass = 85;
var JohnBMI = JohnMass / (JohnHeight * JohnHeight);

if (MarksBMI > JohnBMI) {
  console.log('Mark > John');
} else {
  console.log('Mark < John');
}*/

/*
 * Boolean logic
 * */

/*var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager');
} else if (age > 20 && age < 30) {
  console.log(firstName + ' is a young man');
} else {
  console.log(firstName + ' is a man');
}*/

/*
 * The Ternary Operator and Switch Statements
 * */

/*var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/!*if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}*!/

// Switch statement
var job = 'cop';
switch (job) {
  case 'cop':
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designes beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;
  case age > 20 && age < 30:
    console.log(firstName + ' is a young man');
    break;
  default:
    console.log(firstName + ' is a man');
}*/

/*
 * Truthy and Falsy values and equality operators
 * */

// falsy values: undefined, null, 0, '', NaN
// truthy values: Not false values

/*
var height;

height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable is NOT been defined');
}

// Equality operators

if (height === '23') {
  console.log('The == operator does type coercion!');
}
*/

/*
 * Functions
 * */

/*function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log({ ageJohn, ageMike, ageJane });

function yearsUntilRetirement(birthYear, firstName) {
  var age = calculateAge(birthYear);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');*/

/*
 * Function Statements and Expressions
 * */

/*// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'cop':
    case 'teacher':
      return firstName + ' teaches kids how to code.';
    case 'driver':
      return firstName + ' drives an uber in Lisbon.';
    case 'designer':
      return firstName + ' designed beautiful websites.';
    default:
      return firstName + ' does something else.';
  }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));*/

/*
 * Arrays
 * */

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log({ isDesigner });
