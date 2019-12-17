import React from "react";
import ReactDOM from "react-dom";

import { ButtonTypes, ButtonSizes } from "./components/Button/buttonTypes";

import Button from "./components/Button/Button";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
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
        </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
