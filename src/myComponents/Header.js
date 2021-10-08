import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import './header.css'
import Axios from 'axios'
import Banner from './Banner'
import Ami from './constants/cricketlogo.jpg'

export default function Header() {
  const[search, setSearch]=useState('')
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
        <div>
          
        <h1 class="gous"> <marquee  direction="left"  height="40px"><b>LATEST NEWS</b></marquee></h1>
        </div>
        <Banner/>


        <div class="col-12 col-md-6 pt-2 pl-md-3 mb-3 mb-lg-4">
        
                    <div class="row">
                      
                        <div class="col-6 pb-1 pl-3 pt-1">
                            <div class="card border-0 rounded-0 text-white overflow zoom">
                                <div class="position-relative">
                                  
                                    <div class="ratio_right-cover-2 image-wrapper">
                                        <a href="https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/kolkata-knight-riders-vs-rajasthan-royals-highlights-kkr-beat-rr-by-86-runs-take-giant-step-towards-playoffs/articleshow/86847016.cms">
                                        
                                            <img class="img-fluid img-thumbnail"
                                                 src="https://static.toiimg.com/thumb/msid-86847996,imgsize-58242,width-400,resizemode-4/86847996.jpg?width=2000&height=1200"
                                                 alt=""/>
                                                
                                        </a>
                                    </div>
                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                        
                                        <a class="p-1 badge badge-primary rounded-0" href="#">IPL-2021</a>

                                       
                                        <a href="https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/kolkata-knight-riders-vs-rajasthan-royals-highlights-kkr-beat-rr-by-86-runs-take-giant-step-towards-playoffs/articleshow/86847016.cms">
                                           <h2 class="h5 text-white my-1">KKR beat RR by 86 runs, take giant step towards playoffs.</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                       
                   
                        
                       
                        <div class="col-6 pb-1 pl-3 pt-1">
                            <div class="card border-0 rounded-0 text-white overflow zoom">
                                <div class="position-relative">
                                    
                                    <div class="ratio_right-cover-2 image-wrapper">
                                        <a href="https://www.icc-cricket.com/news/2271350">
                                            <img class="img-fluid img-thumbnail"
                                                 src="https://resources.pulse.icc-cricket.com/photo-resources/2021/09/26/840290e1-8aeb-41d5-859e-43c76293e7dc/Ireland-U19.png?width=2000&height=1200"
                                                 alt="blog website templates bootstrap"/>
                                        </a>
                                    </div>
                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                        
                                        <a class="p-1 badge badge-primary rounded-0" href="#">U19-World-Cup</a>
                                       
                                        <a href="https://www.icc-cricket.com/news/2271350">
                                            <h2 class="h5 text-white my-1">Qualifier wrap: Ireland seal penultimate U19 World Cup spot with Europe victory</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <br/><br/><br/>

        <div>
          <h2 class="goush2"><b>READ NEWS</b>
          </h2>
          </div>
        <div class="data">
            <table>
            <tr>
            <th><center><b>Format</b></center></th>
            <th ><center><b>Breaking News</b></center></th>
            </tr>
            
            <tr>
              <td>IPL 2021</td>
              <td><a href = "https://www.cricbuzz.com/cricket-news/119322/csk-obtain-permission-for-curran-replacement ">
              CSK obtain permission for Curran replacement</a></td>
            </tr>
            <tr>
              <td>MINOR LEAGUE CRICKET</td>
              <td><a href = "https://www.cricbuzz.com/cricket-news/119317/unmukt-chand-to-new-and-victorious-beginnings">
                Unmukt Chand: To new and victorious beginnings</a></td>
            </tr>
            <tr>
              <td>T20 WORLD CUP, 2021</td>
              <td><a href = "https://www.cricbuzz.com/cricket-news/119316/warner-to-open-in-t20-world-cup-confirms-finch">
              Warner to open in T20 World Cup, confirms Finch </a></td>
            </tr>
            <tr>
              <td>ICC T20 WORLD CUP 2021</td>
              <td><a href = "https://www.cricbuzz.com/cricket-news/119309/bcci-estimated-to-earn-usd-12-million-profit-from-icc-t20-world-cup  "> 
              BCCI estimated to earn USD 12 million profit from T20 World Cup </a>
              </td>
            </tr>
            <tr>
              <td>IPL 2021</td>
              <td><a href = "https://www.cricbuzz.com/cricket-news/119298/cricket-ipl-2021-kkr-srh-eoin-morgan-form-tm-southee" >
              Morgan chuffed with Southee's seamless impact</a></td>
            </tr>
          </table> 
          </div> 
          <br/>
          <a href = "https://www.cricbuzz.com/cricket-news" class ="newsbutton">
            More News 
          </a> 
        </body>
    </html>
  );
}

