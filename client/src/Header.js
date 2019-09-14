import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className = "header">
        <nav>
          <div className="header-title">
            <h1 className="title">Rollin' Eats</h1>
          </div>
          <div className="buttons">
            <button className="header-button" onClick={() => {this.props.handleView('home')}}>Home</button>
            <button className="header-button" onClick={() =>
            {this.props.handleView('all')}}>Find a Food Truck</button>
            <button className="header-button" onClick={() =>
            {this.props.handleView('profile')}}>Profile</button>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
