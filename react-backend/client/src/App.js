import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: {
        page: 'home'
      }
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
        <div>
          <Header handleView={this.handleView} />
        </div>
        <div className="main-container">
          <Main />
        </div>
      </div>
    )
  }
}

export default App;
