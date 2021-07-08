import React from "react";
import {Link} from "react-router-dom";
import style from "../style/header.module.css";
import { useHistory } from "react-router-dom";
import Profile from "../Profile";
import SubHeader2 from "./SubHeader2";


export default function Header2(){
    const history = useHistory();
    const navigationToProfile = () => history.push("/Profile");
    return(
        <div className={style.Header}>
            <SubHeader2 />
            <Link exact to="/explore">
                <img src="/images/explore.png" alt="" />
            </Link>
            
            <div className={style.nav_items}>
                <Link exact to="/friends_invite">
                    <img src="/images/invite.png" />
                </Link>

                <Link exact to="/upcoming">
                    <img src="/images/calendar.png" />
                </Link>

                <Link exact to="/activity">
                    <img src="/images/noti.png" />
                </Link>

                <Link exact to="/Profile">
                    <img src="/images/User-Image.png" /><span onClick={navigationToProfile}></span>
                </Link>

            </div>
        </div>
    )
}
