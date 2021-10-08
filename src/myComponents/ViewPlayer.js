import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {Link} from "react-router-dom";
import Ami from './constants/cricketlogo.jpg'
import './viewPlayer.css'

export default function ViewPlayer() {
    const[search, setSearch]=useState('')
  
 
    const submit=()=>{
      Axios.get(`http://localhost:5000/players/${search}`)
      .then(resp => resp.json()) 
      .then( (response) => {
        console.log(response);
        this.setState({
          fetchUser: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      }); 
      window.location.href=`http://localhost:3000/players/${search}`;

    }
    return (
        <html>
        <head>
          <meta charset="utf-8" />
          <title></title>
          <link href="style.css" rel="stylesheet" type="text/css" />
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </head>
        <body class="bd">
          <nav class="navbar navbar-expand-sm navbar-dark ">
            <div class="container-fluid">
              <a href="# " class="logo">
                <img
                  src="https://i.ibb.co/j8LcB67/CRICAGE-1.png"
                  alt="The logo of Project"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="mynavbar">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/players">
                      All Players
                    </Link>
                  </li>
                  <li class="nav-item-centre"></li>
                  <div class="ami"><a href="#">
                  <img src={Ami}
                  alt="The logo of Project" 
                />
              </a></div>
                </ul>
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="text" name="search"
                    placeholder="Search" onChange={(e)=>{
                      setSearch(e.target.value)
                    }
                    }
                  />
                  <button class="btn btn-primary" type="button" onClick={submit} >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <div>
            {/* {playerslist.map((val)=>{
             return(
                 
             <div class="player">
                <img src={val.image} alt="no image"/>          
                <h1>Player name : {val.name}</h1>
                <h1> Age : {val.age}</h1>
                <h1> Runs:{val.Runs}</h1>
                <h1> Role : {val.type}</h1>
                <h1> Country : {val.country}</h1>
                <h1> Innings : {val.innings}</h1>
                <h1> Bataverge: {val.batavg}</h1>
                <h1> Wickets : {val.wickets}</h1>
                <h1> Debut : {val.debut}</h1>
                
             </div>
            )})} */}
        </div>
    
        </body>
            </html>    
    )
}
