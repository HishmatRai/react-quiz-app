import React from 'react';
// import Button from './button'
import { facebookLogin } from '../config/fuction'
import ButtonAppBar from "./Appbar"



class Nevbar extends React.Component {
  constructor(props) {
    super(props)

  }

  login = async () => {
    try {
      let user = await facebookLogin()
      console.log('working==>', user)
      this.props.getRes(true)
    }

    catch (err) {
      console.log(err)

    }

  }

  render() {

    return (

      <div>
        <nav>
          <div style={{
            backgroundColor:"grey"
          }} className="nav-wrapper">
            {/* <a href="#!" className="logo" >Welcome to Quiz App </a> */}
            <ul style={{
              listStyle:"none"
            }} className="right">

              <li > {this.props.name}   
              <img src={this.props.img}  />

              </li>
              <li>

              {this.props.loginbtn}
              </li>
             
             
            </ul>
          </div>
        </nav>

{/* <ButtonAppBar  /> */}
     
               
      </div>




    )
  }
}
export default Nevbar;