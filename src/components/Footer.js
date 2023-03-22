import React from "react";

const Footer = ({onSuggestClick}) => {
  return (
    <div className="panel footer">
      <button
        onClick={() => window.location.reload(true)}
        className="footer_btn"
      >
        new game
      </button>
      <button className="suggest_btn" onClick={onSuggestClick}>Suggest</button>
    </div>
  );
};

export default Footer;
