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
        <div className="food-container">
          <img className="like-dislike" src="https://www.nicepng.com/png/detail/170-1703148_red-sign-icon-mark-symbol-cross-marks-orange.png" alt="dislike" />
          <img className="main-image" src={this.state.foodtruck.pic5} alt={this.state.foodtruck.name} />
          <img className="like-dislike" src="https://www.pinclipart.com/picdir/big/200-2004257_heart-icon-red-heart-vector-free-clipart.png" alt="like" />
        </div>
      </div>
    )
  }
}

export default Main
