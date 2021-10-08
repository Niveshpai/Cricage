import React,{useEffect,useState} from 'react'
import './players.css'
import {Link} from "react-router-dom";
import './header.css'
import Axios from 'axios'
import Ami from './constants/cricketlogo.jpg'
export default function Players() {

    const[name, setSearch]=useState('')
  
 
  const submit=()=>{
    // window.location.href=`http://localhost:3000/players/?name=${name}`;
    // Axios.get(`http://localhost:3000/players/?name=${name}`);



    Axios.get(`http://localhost:5000/players/${name}`)
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
      window.location.href=`http://localhost:3000/players/${name}`;
  };
    return (
        <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Players</title>
        <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"/>
      </head>
      <body className="bd2">
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300,400,700" />
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
                  <Link class="nav-link" to="/hba">
                    Highest Batting Average
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
                  type="text"
                  placeholder="Type any Player Name" onChange={(e)=>{
                    setSearch(e.target.value)
                  }}/>
                <button class="btn btn-primary" type="button" onClick={submit}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </body>
      </html>
    )
}
