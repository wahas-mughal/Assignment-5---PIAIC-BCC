


var width = prompt("Enter the width of the triangle:");
var getResult = calculateArea(width, 40);
alert(getResult);

function calculateArea(width, height){
var Area = width * height;
return Area;
}