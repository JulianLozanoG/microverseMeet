class gameboard  {
    constructor(count, turns, player1, player2, gameOn) {
        this.count = count;
        this.turns = turns;
        this.players = [player1, player2];
        this.gameOn = gameOn;
    }
    reset = function() {
        this.turns = ["#", "#", "#", "#", "#", "#", "+", "#"];
        this.count = 0;
        $(".tic").text("#");
        this.gameOn = true;
    }
    playerTurn = function(id) {
        var spotTaken = $("#" + id).text();
        if (spotTaken === "#") {
            this.turns[id] = players[this.count].symbol;
            $("#" + id).text(players[this.count].symbol);
            count = 0 ? 1 : 0;
            winCondition(turns, players[this.count].symbol);
            if (gameOn === false) {
                $("#message").html("It's " + this.players[this.count == 0 ? 1 : 0].symbol + "'s turn.");
                //winCondition(turns, rivalTurn);
            }
        }
    }
    winCondition = function(trackMoves, currentMove) {
        if (trackMoves[0] === currentMove && trackMoves[1] === currentMove && trackMoves[2] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[4] === currentMove && trackMoves[6] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[0] === currentMove && trackMoves[3] === currentMove && trackMoves[6] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[0] === currentMove && trackMoves[4] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[1] === currentMove && trackMoves[4] === currentMove && trackMoves[7] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[3] === currentMove && trackMoves[4] === currentMove && trackMoves[5] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[6] === currentMove && trackMoves[7] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (!(trackMoves.includes("#"))) {
            gameOn = true;
            reset();
            alert("It is a Draw!");
        }﻿
        else {
            gameOn = false;
        }
    }
}

class player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
}