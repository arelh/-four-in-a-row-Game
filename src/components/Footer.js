import React from "react";

const Footer=({onClickEvent})=> {

  return (
    <div className="panel footer">
      <button 
      onClick={onClickEvent}
       className="footer_btn"  >new game</button>
    </div>
  );
}

export default Footer;
