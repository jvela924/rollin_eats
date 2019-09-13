import React from 'react'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      foodtruck: '',
      pics: []
    }
  }
  fetchPics = () => {
    fetch('http://localhost:3001/foodtrucks')
    .then(data => data.json())
    .then(jData => {
      console.log(jData);
      this.setState({ foodtruck: jData.data[0] })
      console.log(this.state.foodtruck);
    })
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchPics()
  }
  render () {
    return (
      <div className="main-div">
        <h1 className="main-h1">What do you want to eat?</h1>
        <img className="main-image" src={this.state.foodtruck.pic5} alt={this.state.foodtruck.name} />
      </div>
    )
  }
}

export default Main
