var str = prompt('Enter a string: ');

StringChecker(str);

function StringChecker(str){

    var vowels = 'aeiouAEIOU';
    var count = 0;

    for(var i = 0; i < str.length; i++){
        
        if(vowels.indexOf(str[i]) !== -1){
        count += 1;    
        }
    }
    alert('Number of vowels: '+count);
}