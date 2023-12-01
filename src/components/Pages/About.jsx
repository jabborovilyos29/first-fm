import React from "react";
import "./css/About.scss";
// import { IconButton } from "@material-ui/core";
// import { Brightness3 } from "@material-ui/icons";
import Container from "../fragment/Container";
import Developer from "../fragment/Developer";
import Attribution from "../fragment/Attribution";
// import { ThemeContext } from "../api/Theme";

const About = () => {
  return (
    <Container>
      <div className={"About"}>
        {/* <div className="Dark-mode">
          <h5>Choose theme</h5>
          <IconButton>
            <Brightness3 />
          </IconButton>
        </div> */}
        <Developer />
        <Attribution />
      </div>
    </Container>
  );
};

export default About;
