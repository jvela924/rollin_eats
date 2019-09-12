import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      foodtrucks: []
    }
  }
  fetchFoodTrucks = () => {
    fetch('http://localhost:3001/')
    .then(data => data.json())
    .then(jData => {
      console.log(jData);
      this.setState({ foodtrucks: jData.data })
    })
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchFoodTrucks()
  }
  render () {
    return (
      <div>
        <h1>Food Trucks</h1>
        <ul>
          {this.state.foodtrucks.map(foodtruck =>
            <li key={foodtruck.id}>{foodtruck.name}</li>
      )}
        </ul>
      </div>
    )
  }
}

export default App;
