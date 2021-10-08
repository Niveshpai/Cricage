import React,{useState,useEffect} from 'react'
import './header.css'
import {Link} from "react-router-dom";
import'./about.css'
import Axios from 'axios'
import Ami from './constants/cricketlogo.jpg'

export default function About() {
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
  };
    return (
        <html>
        <head>
          <meta charset="utf-8"/>
          <title>Our Team</title>
          <link href="style.css" rel="stylesheet" type="text/css" />
          <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"/>
        </head>
        <body className="bd3">
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
                  type="Text"
                  placeholder="Type any Player Name"onChange={(e)=>{
                    setSearch(e.target.value)
                  }
                  }
                />
                <button class="btn btn-primary" type="button" onClick={submit}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      
          <section class="content">
            <div class ="image">
              <img src="https://cdn.publish0x.com/prod/fs/images/a306fe806adce281ce2c1185f4b3248e061a74d9728e1d243c06b5e3c614dce7.jpeg"/>
            </div>
            <div class="main-text">
              <h1>ABOUT</h1>
              <p>The ICC Cricket World Cup 2019 was held in England and Wales, from 30 May to 14 July 2019.
The ICC Cricket World Cup (CWC) takes place every four years. The 2019 event featured 10 teams and was the culmination of a global qualification process that ran over a 5-6 year period.
The top eight teams in the ICC one-day rankings at the given date (approximately 18 months prior to the CWC) qualified automatically. 
The final two teams came from the ICC Cricket World Cup Qualifier which took place in the year prior to the Cricket World Cup. 
This event is the culmination of the ICC World Cricket League series and regional qualification events which provide the opportunity for every ICC Member to progress through the qualification process and participate in the CWC.
All teams played each other in a full round robin format with the top four teams progressing to the semi-finals and the winners contesting the CWC final.
</p>
              
            </div>
          </section>
        </body>
      </html>
    )
}
