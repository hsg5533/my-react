import React from "react";
import rice from "../images/rice.jpg";

function Header() {
  return (
    <header className="w3-display-container w3-content w3-wide" id="home">
      <img
        className="w3-image"
        src={rice}
        alt="Hamburger Catering"
        width="1600"
        height="500"
      />
      <div className="w3-display-bottomleft w3-padding-large w3-opacity">
        <h1 className="w3-xxlarge">내가 좋아하는 한식 리뷰</h1>
      </div>
    </header>
  );
}

export default Header;
