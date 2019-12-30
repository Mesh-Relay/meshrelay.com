import React from "react";
import ReactDOM from "react-dom";

import { ButtonTypes, ButtonSizes } from "./components/Button/buttonTypes";

import Honeybadger from 'honeybadger-js'
import ErrorBoundary from '@honeybadger-io/react'
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

import "./styles.css";

function App() {
  console.log('Welcome to Mesh Relay! Please get in touch if you would like to provide feedback. \n Thanks to LogoMakr (https://logomakr.com/) for the logo images.');
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


const config = {
  api_key: process.env.REACT_APP_HONEYBADGER_API_KEY,
  environment: process.env.NODE_ENV
  // TODO: On deploy, generate this revision while also running curl script revision: 'git SHA/project version'
  // https://docs.honeybadger.io/lib/javascript/integration/react.html#tracking-deploys
}

const honeybadger = Honeybadger.configure(config)

const rootElement = document.getElementById("root");

ReactDOM.render(<ErrorBoundary honeybadger={honeybadger}><App /></ErrorBoundary>, rootElement)
