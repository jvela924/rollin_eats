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
  render () {
    return (
      <div className="App">
        <div>
          <Header handleView={this.handleView} />
        </div>
        <div className="main-container">
          <Main view={this.state.view}
          handleView = {this.handleView} />
        </div>
      </div>
    )
  }
}

export default App;
