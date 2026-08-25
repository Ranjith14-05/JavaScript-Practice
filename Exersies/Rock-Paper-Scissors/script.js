let score = JSON.parse(localStorage.getItem("score")) || {
                wins: 0,
                lose: 0,
                tie: 0,
            };
            updateScore();
            function rs() {
                localStorage.removeItem("score");
                score.wins = 0;
                score.lose = 0;
                score.tie = 0;
                updateScore();
            }

            function pM(move) {
                let result = "";
                let computerMove = cM();
                if (move === "scissors") {
                    if (computerMove === "rock") {
                        result = "You Lose";
                    } else if (computerMove === "paper") {
                        result = "You Won";
                    } else if (computerMove === "scissors") {
                        result = "Tie";
                    }
                } else if (move === "paper") {
                    if (computerMove === "rock") {
                        result = "You Won";
                    } else if (computerMove === "paper") {
                        result = "Tie";
                    } else if (computerMove === "scissors") {
                        result = "You Lose";
                    }
                } else if (move === "rock") {
                    if (computerMove === "rock") {
                        result = "Tie";
                    } else if (computerMove === "paper") {
                        result = "You Lose";
                    } else if (computerMove === "scissors") {
                        result = "You Won";
                    }
                }

                if (result === "You Won") {
                    score.wins += 1;
                } else if (result === "You Lose") {
                    score.lose += 1;
                } else if (result === "Tie") {
                    score.tie += 1;
                }

                updateScore();

                // Object → JSON String
                let sc = JSON.stringify(score);

                // Save JSON String in Local Storage
                localStorage.setItem("score", sc);

                //Code For Display The Result
                document.querySelector(".result").innerHTML = result;

                //Code For Display The Moves
                document.querySelector(".moves").innerHTML = `You 
            <img class="move-img" src="../images/${move}-emoji.png" alt="">
            computer
            <img class="move-img" src="../images/${computerMove}-emoji.png" alt="">`;
            }

            updateScore();
            //Code For Display The Score
            function updateScore() {
                document.querySelector(".score").innerHTML =
                    `Wins: ${score.wins}, Losess: ${score.lose}, Ties: ${score.tie}`;
            }

            function cM() {
                const num = Math.random();
                if (num >= 0 && num < 1 / 3) {
                    computerMove = "rock";
                } else if (num >= 1 / 3 && num < 2 / 3) {
                    computerMove = "paper";
                } else if (num >= 2 / 3 && num < 1) {
                    computerMove = "scissors";
                }
                return computerMove;
            }