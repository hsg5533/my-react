import React from "react";

import kimchi from "../images/kimchi.jpg";
import miso from "../images/miso.jpg";
import sundobo from "../images/sundobo.jpg";

function Body() {
  return (
    <div className="w3-content">
      <div className="w3-row w3-padding-64" id="about">
        <div className="w3-col m6 w3-padding-large w3-hide-small">
          <img
            src={kimchi}
            className="w3-round w3-image w3-opacity-min"
            alt="Table Setting"
            width="600"
            height="750"
          />
        </div>
        <div className="w3-col m6 w3-padding-large">
          <h1 className="w3-center">김치찌개</h1>
          <br />
          <h5 className="w3-center">매콤 새콤 김치찌개</h5>
          <p className="w3-large">
            매콤하고 맛있는 한국인의 맛 김치찌개! 스팸이나 소세지같은 추가적인
            재료를 넣어서 부대찌개로 만들어도 맛있습니다.
          </p>
          <p className="w3-large w3-text-grey w3-hide-medium">
            김치찌개를 끓일 때 김칫국물을 부으면 김치찌개의 국물맛이 진해집니다.
            만약 김치의 맛이 짜다면 별도의 간을 안하셔도 국물의 간이 적당하게
            됩니다.
          </p>
        </div>
      </div>
      <hr />
      <div className="w3-row w3-padding-64" id="menu">
        <div className="w3-col l6 w3-padding-large">
          <h1 className="w3-center">된장찌개</h1>
          <br />
          <h5 className="w3-center">구수한 국물 맛의 된장찌개</h5>
          <p className="w3-large">
            구수한 국물 맛이 매력인 된장찌개! 고춧가루나 꽃개가 들어가는
            된장찌개보다는 일반적으로 호박, 감자, 두부로 오리지널의 된장찌개가
            더 맛있습니다.
          </p>
          <p className="w3-large w3-text-grey w3-hide-medium">
            소고기를 넣어서 국물 맛이 더 진해지거나 바지락 등 해물로 국물 맛을
            시원하게 변신도 가능합니다.
          </p>
        </div>
        <div className="w3-col l6 w3-padding-large w3-hide-small">
          <img
            src={miso}
            className="w3-round w3-image w3-opacity-min"
            alt="Menu"
            width="600"
            height="750"
          />
        </div>
      </div>
      <hr />
      <div className="w3-row w3-padding-64" id="about">
        <div className="w3-col m6 w3-padding-large w3-hide-small">
          <img
            src={sundobo}
            className="w3-round w3-image w3-opacity-min"
            alt="Table Setting"
            width="600"
            height="750"
          />
        </div>
        <div className="w3-col m6 w3-padding-large">
          <h1 className="w3-center">순두부찌개</h1>
          <br />
          <h5 className="w3-center">순두부의 부드러움인 담긴 순두부찌개</h5>
          <p className="w3-large">
            순두부의 부드러움과 얼큰한 국물의 조합인 순두부찌개! 국물을 진하게
            끓여서 그 위에 계란을 넣고 풀어서 먹는 것도 맛있습니다.
          </p>
          <p className="w3-large w3-text-grey w3-hide-medium">
            김가루와 콩나물 등과 함께 순두부찌개의 국물과 건더기를 넣어서 약간의
            참기름을 밥에 넣어 비벼서 드시면 더욱 맛있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
