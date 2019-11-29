var str = prompt('Enter a character: ');

var vowel = isVowel(str.toLowerCase());
if(vowel == 1){
    alert('Vowel: true');
}
else
alert('Vowel: false');

function isVowel(str){

    switch(str){
    case 'a':
    return true;
    case 'e':
    return true;
    case 'i':
    return true;
    case 'o':
    return true;
    case 'u':
    return true;
    default:
        return false;

    }
}