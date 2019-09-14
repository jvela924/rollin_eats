import React from 'react'
import './App.css';

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      foodtruck: '',
      foodtrucks: [],
      pics: [],
      randTruck: '',
      randPic: '',
      image: ''
    }
  }
  fetchFoodtrucks = () => {
    fetch('/foodtrucks')
    .then(data => data.json())
    .then(jData => {
      this.setState({ foodtrucks: jData.data })
      console.log(this.state.foodtrucks);
      const randTruck = Math.floor(Math.random() * this.state.foodtrucks.length);
      this.setState({ randTruck: randTruck})
      console.log(this.state.randTruck);
      let randNum = Math.ceil(Math.random() * 6)
      randNum = randNum.toString()
      const randPic = 'pic' + randNum
      console.log(typeof randPic);

      this.setState({ randPic: randPic })
      console.log(this.state.foodtrucks[randTruck]);
      const image = this.state.foodtrucks[randTruck][randPic]
      this.setState({ image: image})
      console.log(this.state.image);
    })
    .catch(err => console.log(err))
  }
  fetchFoodtruck = () => {
    fetch('/foodtrucks')
    .then(data => data.json())
    .then(jData => {
      this.setState({ foodtruck: jData.data[1] })
    })
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchFoodtruck()
    this.fetchFoodtrucks()
  }
  render () {
    return (
      <div className="main-div">
        <h1 className="main-h1">What do you want to eat?</h1>
        <div className="food-container">
          <img onClick={this.fetchFoodtrucks} className="like-dislike" src="https://www.nicepng.com/png/detail/170-1703148_red-sign-icon-mark-symbol-cross-marks-orange.png" alt="dislike" />
          <img className="main-image" src={this.state.image} alt={this.state.foodtruck.name} />
          <img className="like-dislike" src="https://www.pinclipart.com/picdir/big/200-2004257_heart-icon-red-heart-vector-free-clipart.png" alt="like" />
        </div>
      </div>
    )
  }
}

export default Main
