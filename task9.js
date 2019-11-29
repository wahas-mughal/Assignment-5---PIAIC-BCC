
var inputWeek = prompt('Enter the number of weeks to be added:');
week(inputWeek);

function week(inputWeek){
    var date = new Date();    
    date.setDate(date.getDate() + inputWeek * 7);
    alert(date);
}
