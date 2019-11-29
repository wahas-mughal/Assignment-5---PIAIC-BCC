

var radiusForCircumference = prompt("Enter the radius for circumference:");
var radiusForArea = prompt("Enter the radius for area:");
var getCircumference = calculateCircumference(radiusForCircumference);
var getArea = calculateArea(radiusForArea);

alert("Circumference of circle = " +getCircumference + '\n' + "Area of circle = " +getArea);


function calculateCircumference(radius){
var circumference = 2 * 3.142 * radius;
return circumference;
}

function calculateArea(radius){
var area = 3.142 * (radius * radius);
return area;
 }