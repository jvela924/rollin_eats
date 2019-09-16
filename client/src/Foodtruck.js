import React from 'react'
import './App.css';

class Foodtruck extends React.Component {
  render () {
    return (
      <div>
        <div className="all-food">
          <h1>{this.props.foodtruck.name}</h1>
          <h3>{this.props.foodtruck.description}</h3>
          <h3>City: {this.props.foodtruck.city}</h3>
          <div className="social-media">
            <a class="fa fa-instagram" target="_blank" rel="noopener noreferrer" href={this.props.foodtruck.instagram}></a>
            <a class="fa fa-twitter" rel="noopener noreferrer" target="_blank" href={this.props.foodtruck.twitter}></a>
            <a class="fa fa-facebook" rel="noopener noreferrer" target="_blank" href={this.props.foodtruck.facebook}></a>
          </div>
          <div className="social-media">
            <div className="truck-pics">
              <img className="main-image" src={this.props.foodtruck.pic1} alt={this.props.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.props.foodtruck.pic2} alt={this.props.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.props.foodtruck.pic3} alt={this.props.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.props.foodtruck.pic4} alt={this.props.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.props.foodtruck.pic5} alt={this.props.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.props.foodtruck.pic6} alt={this.props.foodtruck.name} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Foodtruck
