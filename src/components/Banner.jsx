import React, { Component } from 'react'
import logo from '../components/public/image/maxresdefault.jpg';
import { connect } from "react-redux";
import { useState } from 'react';
import ProfileModal from './ProfileModal';


// class Banner extends Component {
    function Banner(props){
        const [showModal, setShowModal] = useState("close");
  
    const handleClick = (e) => {
      e.preventDefault();
      if (e.target !== e.currentTarget) {
        return;
      }
      switch (showModal) {
        case "open":
          setShowModal("close");
          break;
        case "close":
          setShowModal("open");
          break;
        default:
          setShowModal("close");
          break;
      }
    };
    // render() {
    
        return (
            // <>
            <section className="container-banner">
                {/* <ProfileModal showModal={showModal} handleClick={handleClick} /> */}
                    <button className="edit_profile" onClick={handleClick}>Edit profile</button>
                    <a href="#home"><img id="profilepic" src={logo}  width="120" height="120" alt="profilepic"/></a>
                    <br />
                    <button className="profile_button" onClick="PostModal">+Add Profile Picture</button>
                    <h1 className="container-h1"> Hi! I'm {props.user.displayName} </h1>
                    <h2 className="container-h1"> Email: {props.user.email} </h2>
                    <hr />
            </section>
            // </>
        )
    // }
}

const mapStateToProps = (state) => {
    return {
      user: state.userState.user,
    };
  };
  
  export default connect(mapStateToProps)(Banner);
  



