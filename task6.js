var array = [];
for( var i = 0; i <= 4; i++){ 
var input = prompt('Enter an array:' );
array.push(input);
}

Mirror(array);

function Mirror(array){
    var newArray = array.slice();
    var reverseArray = newArray.reverse();
    var mergeArrays = array.concat(reverseArray);
    alert('Mirror of an array: ' +mergeArrays); 
}