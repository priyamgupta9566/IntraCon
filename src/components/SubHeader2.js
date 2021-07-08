import React from "react";
import style from "../style/explore.module.css";
import {Link} from "react-router-dom"; 

export default function SubHeader2(props){
    return(
        <div className={style.head}>
            <Link to="/rooms">
                <img src="/images/arrow.png" alt="" /> 
            </Link>
            <h4 className={style.headLine}>{props.pageTitle}</h4>
        </div>
    );
}