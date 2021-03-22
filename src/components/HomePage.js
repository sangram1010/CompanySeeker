import React, { Component } from "react";

//import logo from '../logo.svg';
import Header from "./Header";
import Result from "./Result";
import "../App.css";
import SearchBar from "./SearchBar";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />

        <SearchBar />

        <Result />
      </div>
    );
  }
}
