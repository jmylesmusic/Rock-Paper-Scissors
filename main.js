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
        if (userPick === "Rock" && computerRPS === 1) {
            document.getElementById('result').innerHTML = "It's a tie...";
            document.getElementById('result').style.color = "#000000";   
        } else if (userPick === "Rock" && computerRPS === 2) {
            document.getElementById('result').innerHTML = "CPU wins";
            document.getElementById('result').style.color = "red"; 
        } else if (userPick === "Rock" && computerRPS === 3) {
            document.getElementById('result').innerHTML = "User wins!";
            document.getElementById('result').style.color = "#7FFF00";
        } else if (userPick === "Paper" && computerRPS === 1) {
            document.getElementById('result').innerHTML = "User wins!";
            document.getElementById('result').style.color = "#7FFF00";
        } else if (userPick === "Paper" && computerRPS === 2) {
            document.getElementById('result').innerHTML = "It's a tie..."; 
            document.getElementById('result').style.color = "#000000";           
        } else if (userPick === "Paper" && computerRPS === 3) {
            document.getElementById('result').innerHTML = "CPU wins";
            document.getElementById('result').style.color = "red";
        } else if (userPick === "Scissors" && computerRPS === 1) {
            document.getElementById('result').innerHTML = "CPU wins";
            document.getElementById('result').style.color = "red";
        } else if (userPick === "Scissors" && computerRPS === 2) {
            document.getElementById('result').innerHTML = "User wins!";
            document.getElementById('result').style.color = "#7FFF00"; 
        } else if (userPick === "Scissors" && computerRPS === 3) {
            document.getElementById('result').innerHTML = "It's a tie...";
            document.getElementById('result').style.color = "#000000";   
        } else {
            document.getElementById('result').innerHTML = "You probably cheated...";
        };
    }
}


//Score

//Replay