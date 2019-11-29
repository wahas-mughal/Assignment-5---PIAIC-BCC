var num = prompt("Enter a number:");
var fact = factorial(num);
alert(fact);

function factorial(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * factorial( num - 1 ); }
}