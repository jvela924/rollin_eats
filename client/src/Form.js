// import React from 'react'
//
// class Form extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       id: null,
//       username: '',
//       password: '',
//       foodtruck_id: null
//     }
//   }
//   handleChange = (e) => {
//     this.setState({[e.target.id] : e.target.value})
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.handleCreate(this.state)
//   }
//   componentDidMount() {
//     this.setState({
//       id: this.props.formInputs.id,
//       username: this.props.formInputs.username,
//       password: this.props.formInputs.password,
//       foodtruck_id: this.props.formInputs.foodtruck_id
//     })
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//         <label>
//             Your Name:
//             <input type="text" id="username" value={this.state.username} onChange={this.handleChange} />
//             </label>
//             <label>
//                 Your Name:
//                 <input type="text" id="password" value={this.state.password} onChange={this.handleChange} />
//                 </label>
//           </div>
//       </form>
//     )
//   }
// }
// export default Form
