import React, { useState } from "react";
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner } from "./helper";
import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
} from "../Constants";
// import audio from "../audio.mp3"

// const sound = new Audio(audio);

// function handleClick() {
//   sound.play();
// }


function GameBoard() {
  const [GameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState();
  
  console.log(GameBoard);

  const circleClicked = (id) => {
    console.log("circle clicked" + id);
    if (GameBoard[id] !== NO_PLAYER) return;
    if (isWinner(GameBoard, id, currentPlayer)) {
      setWinPlayer(currentPlayer);
      setGameState(GAME_STATE_WIN)
      console.log("winner");
    }
    GameBoard[id] = currentPlayer;
    setGameBoard(GameBoard);
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    // console.log(GameBoard);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
      
        id={id}
        className={`player_${GameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };
  return (
    <>
      <Header currentPlayer={currentPlayer} gameState={gameState} winPlayer={winPlayer} />
      {/* <button onClick={handleClick}>Play Sound</button> */}

      <div className="GameBoard">
        {renderCircle(0)}
        {renderCircle(1)}
        {renderCircle(2)}
        {renderCircle(3)}
        {renderCircle(4)}
        {renderCircle(5)}
        {renderCircle(6)}
        {renderCircle(7)}
        {renderCircle(8)}
        {renderCircle(9)}
        {renderCircle(10)}
        {renderCircle(11)}
        {renderCircle(12)}
        {renderCircle(13)}
        {renderCircle(14)}
        {renderCircle(15)}
      </div>
      <Footer />
    </>
  );
}

export default GameBoard;
