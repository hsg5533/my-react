import React from "react";

function Contact() {
  return (
    <div className="w3-content">
      <div className="w3-container w3-padding-64" id="contact">
        <h1>고객문의</h1>
        <br />
        <p>이 홈페이지는 항상 개발중입니다.</p>
        <p className="w3-text-blue-grey w3-large">
          <b>홈페이지의 불편한 점이나 개선할 점 등 건의사항을 남겨주세요!</b>
        </p>
        <p>건의사항은 아래의 양식을 작성하여 보내실 수 있습니다.</p>
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="이름"
              required
              name="Name"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="제목"
              required
              name="People"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="내용"
              required
              name="Message"
            />
          </p>
          <p>
            <button
              className="w3-button w3-light-grey w3-section"
              type="submit"
            >
              건의사항 보내기
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
