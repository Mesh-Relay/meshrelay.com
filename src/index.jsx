import React from 'react'
import ReactDOM from 'react-dom'
import Honeybadger from 'honeybadger-js'
import ErrorBoundary from '@honeybadger-io/react'

// import Instant from '0x-instant-component'

import { ButtonTypes, ButtonSizes } from './components/Button/buttonTypes'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
// import Footer from "./components/Footer/Footer";

import './styles.css'

function App() {
  console.log(
    'Welcome to Mesh Relay! Please get in touch if you would like to provide feedback: info@meshrelay.com.',
  )
  return (
    <>
      <div className="App">
        <Header />

        {/* <Instant
          fee="0.04"
          feeAddress="0x23f9b9985bc838c5ad196b91e202794308a9fb40"
          source="bamboo"
        /> */}
        <div className="landing-page-container">
          <h1 className="coming-soon-header">Be the First to Know When Mesh Relay Launches</h1>
          <span className="call-to-action">
            Like trading ERC-20 tokens with minimal slippage and high liquidity?
            <div>
              Make sure you click Get Started now to learn more.
              {/* <span className="get-started">Get Started</span> */}
            </div>
          </span>
          <Button size={ButtonSizes.MEDIUM} label="Get Started" type={ButtonTypes.PRIMARY} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

const config = {
  api_key: process.env.REACT_APP_HONEYBADGER_API_KEY,
  environment: process.env.NODE_ENV,
  // TODO: On deploy, generate this revision while also running curl script revision: 'git SHA/project version'
  // https://docs.honeybadger.io/lib/javascript/integration/react.html#tracking-deploys
}

const honeybadger = Honeybadger.configure(config)

const rootElement = document.getElementById('root')

ReactDOM.render(
  <ErrorBoundary honeybadger={honeybadger}>
    <App />
  </ErrorBoundary>,
  rootElement,
)