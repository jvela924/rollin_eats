import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <div>
          <h2>Built By: Jeremy Vela</h2>
        </div>
        <div>
          <a href="https://github.com/jvela924" className="fa fa-github" target="_blank"></a>
          <a className="fa fa-linkedin-square" href="https://www.linkedin.com/in/jeremy-vela/" target="_blank"></a>
          <a className="portfolio" target="_blank" href="https://jvela924.github.io">jeremyvela.com</a>
        </div>
      </div>
    )
  }
}

export default Footer
