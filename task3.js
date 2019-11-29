
var takeInput = prompt('Enter a word');

palindrome(takeInput);

function palindrome(takeInput){
    var modifyInput = takeInput.toLowerCase();
    var reverseString = modifyInput.split('').reverse().join('');
    
    if(takeInput === reverseString){
        alert('The given word is palindrome!');
    }
    else
    alert('The given word is not a palindrome!');
}


