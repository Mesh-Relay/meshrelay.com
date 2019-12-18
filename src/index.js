import React from "react";
import ReactDOM from "react-dom";

import { ButtonTypes, ButtonSizes } from "./components/Button/buttonTypes";

import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

import "./styles.css";

function App() {
  console.log('Welcome to Mesh Relay! Please get in touch if you have any feedback for the site. \n Thanks to LogoMakr (https://logomakr.com/) for the logo images.');
  return (
    <React.Fragment>
      <div className="App">
      <Header />
        <div className="landing-page-container">
            <h1 className="coming-soon-header">
          Be the First to Know When Mesh Relay Launches
        </h1>
        <span className="call-to-action">
          Like trading ERC-20 tokens with minimal slippage and high liquidity?
          <div>Make sure you click <span className="get-started">Get Started</span> now to learn more.</div>
        </span>
        <Button
          size={ButtonSizes.MEDIUM}
          label="Get Started"
          type={ButtonTypes.PRIMARY}
        />  
        </div>
        </div>
        {/* <Footer /> */}
        </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
