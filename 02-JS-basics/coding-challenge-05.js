/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. T
he bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create
1) a new array containing all tips, and
2) an array containing final paid amounts (bill + tip).
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100,
10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules

6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var johnHolidays = {
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    var percentage;
    this.tips = [];
    this.amount = [];

    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.amount[i] = bill + this.tips[i];
    }
  },
};

var markHolidays = {
  bills: [77, 375, 110, 45],
  calcTips: function() {
    var percentage;
    this.tips = [];
    this.amount = [];

    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      this.tips[i] = bill * percentage;
      this.amount[i] = bill + this.tips[i];
    }
  },
};

function calculateAverageTips(tips) {
  var tipsSum = 0;

  for (var i = 0; i < tips.length; i++) {
    tipsSum += tips[i];
  }

  return tipsSum / tips.length;
}

johnHolidays.calcTips();
markHolidays.calcTips();

johnHolidays.averageTips = calculateAverageTips(johnHolidays.tips);
markHolidays.averageTips = calculateAverageTips(markHolidays.tips);

var highestFamilyTips = johnHolidays.averageTips > markHolidays.averageTips ? 'John' : "Mark's";

console.log('johnHolidays', johnHolidays);
console.log('markHolidays', markHolidays);

console.log(highestFamilyTips + ' paid highest tips!');
