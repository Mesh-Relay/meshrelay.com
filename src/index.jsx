import React from 'react'
import ReactDOM from 'react-dom'
import Honeybadger from 'honeybadger-js'
import ErrorBoundary from '@honeybadger-io/react'

import { ButtonTypes, ButtonSizes } from './components/Button/buttonTypes'
import Button from './components/Button/Button'
import Header from './components/Header/Header'

import './styles.css'

function App() {
  console.log(
    'Welcome to Mesh Relay! Please get in touch if you would like to provide feedback: info@meshrelay.com.',
  )
  return (
    <>
      <div className="App">
        <Header />

        <div className="landing-page-container">
          <span className="call-to-action">
            Want to exchange your ERC-20 tokens?
            <div>Click swap to get started now.</div>
          </span>
          <Button
            onClick={() => console.log('Handle click')}
            size={ButtonSizes.MEDIUM}
            label="Swap"
            type={ButtonTypes.PRIMARY}
          />
        </div>
      </div>
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
