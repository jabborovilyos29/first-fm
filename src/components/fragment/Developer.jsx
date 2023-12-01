import React from "react";
import "../assets/scss/Developer.scss";
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/gold.jpg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Portrait,
  Twitter,
} from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <h3 className={"Developer-head"}>About</h3>
      <div className="Developer-profile">
        <div className="Developer-profileCard">
          <img src={AvatarImage} alt="Profile" />
          <div className={"Card-details"}>
            <p>Without music, life would be a mistake :) </p>
          </div>
        </div>
        <div className="Developer-profileDetails">
          <p>FIRST-FM — SITE DEDICATED TO MUSIC.</p>
          <p>WITH THE HELP OF PLUGINS TO MEDIA PLAYERS, COLLECTS INFORMATION</p>
          <p>
            ABOUT THE MUSIC THAT USERS LISTEN TO, AND ON THE BASIS OF THE DATA
            RECEIVED,
          </p>
          <p>IT AUTOMATICALLY COMPOSES INDIVIDUAL AND GENERAL HIT PARADES.</p>
          <p>
            CONTAINS A COMPLETE DATABASE OF MUSIC ARTISTS, ALBUMS AND
            COMPOSITIONS
          </p>
          <p>Start of work: 24 Feb 2023</p>
          <div className="Card-btn">
            <IconButton
              target={"_blank"}
              href={"https://www.facebook.com/"}
              title={"Link to facebook"}
            >
              <Facebook />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://twitter.com/"}
              title={"Link to twitter"}
            >
              <Twitter />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.linkedin.com/"}
              title={"Link to linkedin"}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.instagram.com/"}
              title={"Link to instagram"}
            >
              <Instagram />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://support.first-fm.in/"}
              title={"Contacts"}
            >
              <Portrait />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
