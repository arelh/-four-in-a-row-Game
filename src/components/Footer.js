import React from "react";

const Footer = () => {
  return (
    <div className="panel footer">
      <button onClick={() => window.location.reload(true)} className="footer_btn">
        new game
      </button>
    </div>
  );
};

export default Footer;
