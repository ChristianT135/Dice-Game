function rollDice(){

    let goldCoins = 0;
    for (let i = 0; i <10; i++) {
        const roll = Math.floor(Math.random() * 6) +1;
        alert(" you roll a " + roll + ".");
        if (roll === 1){
            alert("Game over, no more rolls! ");
            break;
        }
        if (roll<5){
            continue;
        }
        alert(" Congratulations! You Win " + roll + " gold coins.");
        goldCoins += roll;
        
    }
    alert("You have won a total " + goldCoins + " gold coins");
}