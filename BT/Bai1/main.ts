import {TennisGame} from "./tennisGame";

let result = new TennisGame();
result.getScore('player1', 'player2', 6, 8);
console.log(result.score)
