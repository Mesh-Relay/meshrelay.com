import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-link-container">
        <a className="footer-link status-link" href="https://status.meshrelay.com">
          Status
        </a>
        <a className="footer-link" href="https://developers.meshrelay.com">
          API
        </a>
      </div>
      <div className="social-icons">
        <a
          aria-label="GitHub Logo linking to Mesh Relay GitHub repository"
          className="github-link"
          href="https://github.com/Mesh-Relay/meshrelay.com"
        >
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
