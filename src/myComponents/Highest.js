import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import './header.css'
import Axios from 'axios'
import Ami from './constants/cricketlogo.jpg'



export default function Header() {
  const[name, setSearch]=useState('')
  const[batsman,setBatsman]=useState([])
  const[RunRate,setRunRate]=useState([])
  const[bowler,setBowler]=useState([])
  useEffect(()=>{
    Axios.get("http://localhost:9000/details1").then((response)=>
    { 
      setBatsman(response.data);
    
    })
    Axios.get("http://localhost:9000/details2").then((response)=>
    {
      setRunRate(response.data);
    })
    Axios.get("http://localhost:9000/details3").then((response)=>{
      setBowler(response.data);
    })
  },[])
 
  const submit=()=>{
    Axios.get(`http://localhost:3000`)
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
      window.location.href=`http://localhost:3000`;
  };
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
                  <a class="nav-link" href="javascript:void(0)">
                    Home
                  </a>
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
                
                <div class="ami" >
                <img src={Ami}
                alt="The logo of Project" 
              /></div>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="text" name="search"
                  placeholder="Type any Player Name" onChange={(e)=>{
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
        </body>
    </html>
  );
}

