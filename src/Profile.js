import React,{Component} from 'react';
// import logo from './logo.svg';
import  './style/profile.css';
// import Header from './components/header1'
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
export default function Profile() {
    
  return (
    <div className="profile">
      <Header />
      <hr />
      <Navbar />
      <br />
      <Banner /> 
      <br />
      <About />
      <br />
      <hr />
      <Project />
      <hr />
      <Portfolio />
      <hr />
      
    </div>
  );
}

