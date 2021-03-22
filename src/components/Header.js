import React from "react";
import StarHalfIcon from "@material-ui/icons/StarHalf";

export default function Header() {
  return (
    <header className="App-header">
      {
        //<img src={logo} className="App-logo" alt="logo" />
      }
      <StarHalfIcon
        fontSize="large"
        className="App-logo"
        alt="logo"
      ></StarHalfIcon>
      <p>Find your desired Job</p>
      <StarHalfIcon
        fontSize="large"
        className="App-logo"
        alt="logo"
      ></StarHalfIcon>
      {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
    </header>
  );
}
