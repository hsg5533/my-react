import React from "react";

function Top() {
  return (
    <div>
      <div className="w3-top">
        <div className="w3-bar w3-white w3-padding w3-card">
          <a href="/" className="w3-bar-item w3-button">
            Gourmet au Catering
          </a>
          <div className="w3-right w3-hide-small">
            <a href="/" className="w3-bar-item w3-button">
              home
            </a>
            <a href="#about" className="w3-bar-item w3-button">
              About
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
