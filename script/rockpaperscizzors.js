//Tuan Luong-I Declare this is my original work
//Purpose of this project, to implement a rock paper scizzors game using JS. 
$(function() { //Sets the initial score for player and competition
    localStorage.setItem('compscore', 0);
    localStorage.setItem('playerscore', 0);

});

function logcon(ele) {

    var btnno = $(ele).attr('data-id');
    btnno = parseInt(btnno); //Gets the switch case depending on which button the player pressed
    var playertxt = document.getElementById("player_txt");
    var playerstr = "You Drew: "
    switch (btnno) { //Determines the object the player drew
        case 1:
            playerstr = playerstr + " Rock";
            break;
        case 2:
            playerstr = playerstr + " Paper";
            break;
        default:
            3
            playerstr = playerstr + " Scizzors";
    }
    playertxt.innerHTML = playerstr; //Displays the object player drew in html
    checkwin(btnno);
}

function checkwin(player) { //Method to check if the player won
    var comp = Math.floor(Math.random() * 3) + 1; //Random for the competition to get their object
    var comptxt = document.getElementById("comp_txt");
    var compstr = "Competition Draws: " //Displays the draw of the competition
    switch (comp) {
        case 1:
            compstr = compstr + " Rock";
            break;
        case 2:
            compstr = compstr + " Paper";
            break;
        default:
            3
            compstr = compstr + " Scizzors";
            break;

    }

    comptxt.innerHTML = compstr;
    if (player == comp) { //If statements to determine the win status of player and competition
        winStatus = 3;
    }

    if (player == 1 && comp == 3) {
        winStatus = 1;
    } else if (player == 3 && comp == 1) {
        winStatus = 2;
    } else if (player == 2 && comp == 1) {
        winStatus = 1;
    } else if (player == 1 && comp == 2) {
        winStatus = 2;
    } else if (player == 3 && comp == 2) {
        winStatus = 1;
    } else if (player == 2 && comp == 3) {
        winStatus = 2;
    }

    updatescore(winStatus);

}

function updatescore(winStatus) {
    var compscore = localStorage.getItem('compscore'); //Gets the current score from local storage
    compscore = parseInt(compscore);
    var playerscore = localStorage.getItem('playerscore');
    playerscore = parseInt(playerscore);
    var statext = document.getElementById("stat_txt");
    var compscoretext = document.getElementById("comp_score_text");
    var playerscoretext = document.getElementById("player_score_text");



    switch (winStatus) { //Swtich cases to determine win or loss
        case 1:
            statext.innerHTML = "Player Wins!";
            playerscore = playerscore + 1;
            break;
        case 2:
            statext.innerHTML = "Competition Wins!";
            compscore = compscore + 1;
            break;
        default:
            statext.innerHTML = "Its a Draw!";
            break;
    }

    compscoretext.innerHTML = compscore; //Sets current score in the html
    playerscoretext.innerHTML = playerscore;
    localStorage.setItem('compscore', compscore); //Stores the current score in local storage
    localStorage.setItem('playerscore', playerscore);
}

function resetGame() { //method to reset game
    var statext = document.getElementById("stat_txt");
    var compscoretext = document.getElementById("comp_score_text");
    var playerscoretext = document.getElementById("player_score_text");
    var comptxt = document.getElementById("comp_txt");
    var playertxt = document.getElementById("player_txt");
    statext.innerHTML = "";
    compscoretext.innerHTML = 0;
    playerscoretext.innerHTML = 0;
    comptxt.innerHTML = "";
    playertxt.innerHTML = "";
    playerscore = 0;
    compscore = 0;
    localStorage.setItem('compscore', compscore);
    localStorage.setItem('playerscore', playerscore);
}