import React from 'react'
import './App.css';

class Foodtrucks extends React.Component {
  constructor(props){
    super(props)
      this.state={
        search: ''
      }
  }
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)})
  }
  render () {
    let filteredFoodtrucks = this.props.foodtrucks.filter(
      (foodtruck) => {
        return foodtruck.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    return (
      <div>
        <h3 className="h3-search">Search for a Foodtruck</h3>
        <input className="search" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        {filteredFoodtrucks.map ((foodtruck) => (
        <div className="all-food">
          <h1>{foodtruck.name}</h1>
          <h3>{foodtruck.description}</h3>
          <h3>City: {foodtruck.city}</h3>
          <div className="social-media">
            <a className="fa fa-instagram" target="_blank" rel="noopener noreferrer" href={foodtruck.instagram}></a>
            <a className="fa fa-twitter" rel="noopener noreferrer" target="_blank" href={foodtruck.twitter}></a>
            <a className="fa fa-facebook" rel="noopener noreferrer" target="_blank" href={foodtruck.facebook}></a>
          </div>
          <div className="social-media">
            <div className="truck-pics">
              <img className="main-image" src={foodtruck.pic1} alt={foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={foodtruck.pic2} alt={foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={foodtruck.pic3} alt={foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={foodtruck.pic4} alt={foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={foodtruck.pic5} alt={foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={foodtruck.pic6} alt={foodtruck.name} />
            </div>
          </div>
        </div>
      ))}
      </div>
    )
  }
}

export default Foodtrucks
