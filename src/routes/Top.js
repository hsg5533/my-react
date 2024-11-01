import React from "react";

function Top() {
  return (
    <div>
      <div class="w3-top">
        <div class="w3-bar w3-white w3-padding w3-card">
          <a href="/" class="w3-bar-item w3-button">
            Gourmet au Catering
          </a>
          {/* Right-sided navbar links. Hide them on small screens */}
          <div class="w3-right w3-hide-small">
            <a href="/" class="w3-bar-item w3-button">
              home
            </a>
            <a href="#about" class="w3-bar-item w3-button">
              About
            </a>
            <a href="#contact" class="w3-bar-item w3-button">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
