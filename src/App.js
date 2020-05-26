import React from "react";
import Header from "./components/Header"
import "./App.css";
import Nav from "./components/Site-bar";
import Content from "./components/Content";

const App = () => {
  return (
  <div className="app-wrapper">
      <Header />
      <div className="conent-box">
      <Nav />
      <Content />
      </div>
    </div>
  );
};


export default App;
