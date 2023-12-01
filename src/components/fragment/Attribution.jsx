import React from "react";
import "../assets/scss/Attribution.scss";
import { useSelector } from "react-redux";

const Attribution = () => {
  const { playing } = useSelector((state) => state.musicReducer);
  return (
    <div className={"Attribution"}>
      <h3>Attribution</h3>
      <div className={"Attribution-div"}>
        <div className="Attribution-text">First-FM</div>
        <div className="Attribution-text">
          CBS Interactive © 2023 first.fm Ltd. All rights reserved
        </div>
      </div>
      {playing && (
        <div className={"Attribution-div"}>
          <div className="Attribution-text">
            <div>
              <p>Song: {playing.attribution.song}</p>
              <p>Music by: {playing.attribution.musicBy}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attribution;
