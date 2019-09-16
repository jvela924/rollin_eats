import React from 'react'
import Foodtruck from './Foodtruck.js'
import Form from './Form.js'
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
      image: '',
      view: 'home',
      formInputs: {
                id: null,
                username: '',
                password: '',
                foodtruck_id: null
        }
    }
  }
  handleCreate = (createData) => {
    fetch('/users', {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdUser => {
      return createdUser.json()
    })
    .then(jsonedUser => {
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.users.unshift(jsonedUser)
        return { users: prevState.users }
      })
    })
    .catch(err => alert("Must fill out all form fields"))
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
      this.setState({ foodtruck: this.state.foodtrucks[randTruck] })
      console.log(this.state.foodtrucks[randTruck]);
      const image = this.state.foodtrucks[randTruck][randPic]
      this.setState({ image: image})
      console.log(this.state.image);
    })
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchFoodtrucks()
  }
  render () {
    return (
      <div className="main-div">
        {this.props.view.page === 'home'
        ?
        <div>
          <h1 className="main-h1">What do you want to eat?</h1>
          <div className="food-container">
            <img onClick={this.fetchFoodtrucks} className="like-dislike" src="https://www.nicepng.com/png/detail/170-1703148_red-sign-icon-mark-symbol-cross-marks-orange.png" alt="dislike" />
            <div className="food-div">
              <img className="main-image" src={this.state.image} alt={this.state.foodtruck.name} />
            </div>
            <img onClick={() => {this.props.handleView('liked')}} className="like-dislike" src="https://www.pinclipart.com/picdir/big/200-2004257_heart-icon-red-heart-vector-free-clipart.png" alt="like" />
          </div>
        </div> : ''}

        {this.props.view.page ==='liked' ?
        <div>
          <h1>{this.state.foodtruck.name}</h1>
          <h3>{this.state.foodtruck.description}</h3>
          <h3>City: {this.state.foodtruck.city}</h3>
          <div className="social-media">
            <a class="fa fa-instagram" target="_blank" rel="noopener noreferrer" href={this.state.foodtruck.instagram}></a>
            <a class="fa fa-twitter" rel="noopener noreferrer" target="_blank" href={this.state.foodtruck.twitter}></a>
            <a class="fa fa-facebook" rel="noopener noreferrer" target="_blank" href={this.state.foodtruck.facebook}></a>
          </div>
          <div className="social-media">
            <div className="truck-pics">
              <img className="main-image" src={this.state.foodtruck.pic1} alt={this.state.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.state.foodtruck.pic2} alt={this.state.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.state.foodtruck.pic3} alt={this.state.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.state.foodtruck.pic4} alt={this.state.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.state.foodtruck.pic5} alt={this.state.foodtruck.name} />
            </div>
            <div className="truck-pics">
              <img className="main-image" src={this.state.foodtruck.pic6} alt={this.state.foodtruck.name} />
            </div>
          </div>
          <div className="back-home">
            <button className="more-button" onClick={() => {this.props.handleView('home')}}>Find More Food</button>
          </div>
        </div>
        : ''}

        {this.props.view.page === 'all' ? <div>
        <div className="back-home">
          <button className="more-button" onClick={() => {this.props.handleView('home')}}>Find More Food</button>
        </div>
       <div>
        {this.state.foodtrucks.map ((foodtruck) => (
            <Foodtruck
              key={foodtruck.id}
              foodtruck={foodtruck}
              handleView={this.props.handleView}
            />
        ))} </div>
        <div className="back-home">
          <button className="more-button" onClick={() => {this.props.handleView('home')}}>Find More Food</button>
        </div></div>
         : ''}
      </div>
    )
  }
}

export default Main
