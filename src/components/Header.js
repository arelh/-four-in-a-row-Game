import React from "react";
import { GAME_STATE_PLAYING, GAME_STATE_WIN } from "../Constants";

function Header({ currentPlayer, winPlayer, gameState }) {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div> player {currentPlayer} turn</div>;
      case GAME_STATE_WIN:
        return <div>player {winPlayer} wins</div>;
      default:
    }
  };
  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
}

export default Header;
