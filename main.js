
//Caption and Image Function
function imageAndName(name, imageUrl) {
    document.getElementById('computer').innerHTML = `Computer has selected ${name}`;
    document.getElementById('computerImg').src = imageUrl;
}
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function() {
        let userPick = this.id;
        document.getElementById('userMove').innerHTML = `User has selected ${userPick}`;
        document.getElementById('userImage').src = `images/${userPick}.jpg`;
        let computerRPS = (Math.floor(Math.random() *3) +1);

        switch (computerRPS) {
            case 1:
                imageAndName("Rock", "images/Rock.jpg");        
                break;
            case 2: 
                imageAndName("Paper", "images/Paper.jpg")
                break;
            case 3:
                imageAndName("Scissors", "images/Scissors.jpg");
                break;
        };
        
        let result = document.getElementById('result');
        let gameWinner = "";

        if (userPick === "Rock" && computerRPS === 1) {
            gameWinner = "Tie";
        } else if (userPick === "Rock" && computerRPS === 2) {
            gameWinner = "CPU";
        } else if (userPick === "Rock" && computerRPS === 3) {
            gameWinner = "User";
        } else if (userPick === "Paper" && computerRPS === 1) {
            gameWinner = "User";
        } else if (userPick === "Paper" && computerRPS === 2) {
            gameWinner = "Tie";          
        } else if (userPick === "Paper" && computerRPS === 3) {
            gameWinner = "CPU";
        } else if (userPick === "Scissors" && computerRPS === 1) {
            gameWinner = "CPU";
        } else if (userPick === "Scissors" && computerRPS === 2) {
            gameWinner = "User";
        } else if (userPick === "Scissors" && computerRPS === 3) {
            gameWinner = "Tie"; 
        } else {
            gameWinner = "Tie"
        };

        switch(gameWinner) {
            case "User":
                result.innerHTML = "User wins!";
                result.style.color = "#7FFF00";
                break;
            case "CPU":
                result.innerHTML = "CPU wins";
                result.style.color = "red";
                break;
            case "Tie":
                result.innerHTML = "It's a tie...";
                result.style.color = "#000000";
                break;
            }
    }
}


//Score

//Replay