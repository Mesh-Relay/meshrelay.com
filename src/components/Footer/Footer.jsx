import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a className="status-link" href="https://status.meshrelay.com">
        Status
      </a>
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
