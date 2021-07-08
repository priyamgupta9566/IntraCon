import React from "react"; 
import style from "../style/welcome.module.css";
import {Link} from "react-router-dom";
import { auth } from "../firebase";
import { connect } from "react-redux";
import Header from "../components/Header";


function Welcome(props)
{
    return (
    <div className={style.WelcomeConatiner}>
        <h1><b>Welcome!! </b><br />{props.user.displayName}.</h1>
        <div className={style.WelcomeInfo}>
            <p>
                Welcome to <b>IntaCon rooms</b>.<br></br>
                You can directly interact with your peers here.<br></br>
                Connect with your batchmates and grow together😊.
            </p>
            

        </div>
        <div className={style.actionBtn}>
            <Link exact to='/home2' className='primaryBtn d-flex align-items-center mb-3'>
                Enter your Enrollment Number{" "}
                </Link>
                <Link>Have an invite text? Sign in</Link>
        </div>
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
      user: state.userState.user,
    };
  };
  
  export default connect(mapStateToProps)(Welcome);
  