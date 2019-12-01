/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

var MarksHeight = 1.85;
var MarksMass = 77;
var MarksBMI = MarksMass / (MarksHeight * MarksHeight);
console.log('MarksBMI', MarksBMI);

var JohnHeight = 1.6;
var JohnMass = 85;
var JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log('JohnBMI', JohnBMI);

var isMarkHigher = MarksBMI > JohnBMI;

console.log("Is Mark's BMI higher than John's? " + isMarkHigher);
