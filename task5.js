var balance = prompt('Enter the amount to be withdrawn:');



withdraw(balance);

function withdraw(balance){

    var N1 = parseInt(balance);
    var hundred = Math.floor(balance / 100);
    N2 = N1 - hundred * 100;
    
    var fifty = Math.floor(N2 / 50);
    N3 = N2 - fifty * 50;
    
    var ten = Math.floor(N3 / 10);
    
    alert('You will have '+hundred + ' hundred notes ' +fifty + ' fifty notes ' +ten + ' ten notes');
}


