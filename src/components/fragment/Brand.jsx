import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Brand.scss";
import LogoBrand from "../assets/img/headphones.svg";

class Brand extends React.Component {
  render() {
    return (
      <div className={"brand"}>
        <Link to={"/home"}>
          <img src={LogoBrand} alt="" />
        </Link>
      </div>
    );
  }
}

export default Brand;
