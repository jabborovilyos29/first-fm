import React, { useContext } from "react";
import "../assets/scss/DropDownProfile.scss";
import { ThemeContext } from "../../api/Theme";
import HoverButton from "./HoverButton";
import { AccountBox, Explore, ExitToApp } from "@material-ui/icons";

const DropDownProfile = () => {
  const useStyle = useContext(ThemeContext);
  return (
    <div style={useStyle.component} className="dropdown-profile">
      <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"} />
      <HoverButton Icon={Explore} variant={"text"} text={"About"} />
      <HoverButton Icon={ExitToApp} variant={"text"} text={"Exit"} />
    </div>
  );
};
export default DropDownProfile;
