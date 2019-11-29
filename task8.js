var testDate = prompt("Enter a birth date: ");

BirthDate(testDate);

function BirthDate(testDate){
var testDate = new Date(testDate);
var testYear = testDate.getFullYear();
var testMonth = testDate.getMonth();
console.log(testMonth);
var testDay = testDate.getDate();

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
console.log(currentMonth);
var currentDay = currentDate.getDate();

var yearDiff = currentYear - testYear;
var monthDiff = currentMonth - testMonth;
console.log(monthDiff);
var dayDiff = currentDay - testDay;

alert('You are ' +yearDiff+ ' years, ' +monthDiff+ ' month and ' +dayDiff+ ' days old');

}