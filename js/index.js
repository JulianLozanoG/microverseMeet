import { gameboard, player } from './objects';

$(document).ready(function() {
    var nombre1 = prompt("Nombre jugador 1");
    document.write(nombre1);
    var nombre2 = prompt("Nombre jugador 2");
    document.write(nombre2);
    var player1 = new player(nombre1, "X");
    var player2 = new player(nombre2, "0'");
    var gameboard1 = new gameboard(0, ["#", "#", "#", "#", "#", "#", "+", "#"], player1, player2);
    var turns = ["#", "#", "#", "#", "#", "#", "+", "#"];
    var rivalTurn = "0";
    var turn = "x";
    var gameOn = false;
    var count = 0;

    function player2Turn(id) {
        var spotTaken = $("#" + id).text();
        if (spotTaken === "#") {
            count++;
            turns[id] = rivalTurn;
            $("#" + id).text(rivalTurn);
            winCondition(turns, rivalTurn);
            if (gameOn === false) {
                //computersTurn();
                $("#message").html("It's " + turn + "'s turn.");
                winCondition(turns, rivalTurn);
            }
        }
    }

    function playerTurn(id) {
        var spotTaken = $("#" + id).text();
        if (spotTaken === "#") {
            count++;
            turns[id] = turn;
            $("#" + id).text(turn);
            winCondition(turns, turn);
            if (gameOn === false) {
                $("#message").html("It's " + rivalTurn + "'s turn.");
                winCondition(turns, rivalTurn);
            }
        }
    }

    function winCondition(trackMoves, currentMove) {
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

    $(".tic").click(function() {
        var slot = $(this).attr('id');
        if (count % 2 == 0) {
            playerTurn(slot);
        } else {
            player2Turn(slot)
        }
    });

    function reset() {
        turns = ["#", "#", "#", "#", "#", "#", "+", "#"];
        count = 0;
        $(".tic").text("#");
        gameOn = true;
    }

    $("#reset").click(function() {
        reset();
    });

});