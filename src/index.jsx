import React from 'react'
import ReactDOM from 'react-dom'
import Honeybadger from 'honeybadger-js'
import ErrorBoundary from '@honeybadger-io/react'

import { ButtonTypes, ButtonSizes } from './components/Button/buttonTypes'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './styles.css'

function App() {
  console.log(
    'Welcome to Mesh Relay! Please get in touch if you would like to provide feedback: info@meshrelay.com.',
  )
  const FRONTEND_ONLY = process.env.REACT_APP_FRONTEND_ONLY
  return (
    <>
      <div className="App">
        <Header />

        <div className="landing-page-container">
          <span className="call-to-action">
            Want to exchange your ETH for ERC-20 tokens?
            <div>Click Exchange to get started now.</div>
          </span>
          <Button
            onClick={() => {
              window.zeroExInstant.render(
                {
                  orderSource: FRONTEND_ONLY
                    ? 'https://api.radarrelay.com/0x/v3'
                    : 'https://api.meshrelay.com/v3',
                  networkId: 1,
                },
                'body',
              )
            }}
            size={ButtonSizes.MEDIUM}
            label="Exchange"
            type={ButtonTypes.PRIMARY}
          />
        </div>
      </div>
      {FRONTEND_ONLY ? null : <Footer />}
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
