var testDate = prompt("Enter a date: ");

var returnValue = DateChecker(testDate);
alert(returnValue);

function DateChecker(testDate){
    var testDate = new Date(testDate);
    console.log(testDate);
    var day = testDate.getDay();
    
    console.log(day);
    if(day == 6 || day == 0){
        return "Its Weekend";
    }
    else{
    var diff = 6 - day;
        return "Sorry! Wait for " +diff + " more days";
  }

}