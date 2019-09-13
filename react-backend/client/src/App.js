import React from 'react';
import Header from './Header.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: {
        page: 'home'
      },
      foodtrucks: []
    }
  }
  handleView = (view) => {
      // update the state
      this.setState({
          view: {
            page: view
          }
      })
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
      <div className="App">
        <Header handleView={this.handleView} />
      </div>
    )
  }
}

export default App;
