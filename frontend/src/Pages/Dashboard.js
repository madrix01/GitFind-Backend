import React, { Component, useState } from 'react';
import Navbar from './../components/Navbar';
import './../styles/searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHistory, faRecycle } from '@fortawesome/free-solid-svg-icons'
import Login from './Login';
import constants from './../constants.json';
import { Chip,Button, Fab } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input'
import Switch from '@material-ui/core/Switch';
import { Link, Redirect } from 'react-router-dom';


function EachResult(props){
  return <li key={props.data.repoName}>
    <FontAwesomeIcon icon={faHistory} />
  <span class="text">  <a href={props.data.link}>{props.data.repoName}</a></span>
  <a href="#" class="link"></a>
  </li>;


}


function SearchBar(props){

  let [state,setState] = useState([]);
  let [results,setResults] = useState([]);
  let links =[constants.search,constants.collab]
  let tlink = localStorage.getItem("link");
  let URLLINK = links[0];


  if(!!tlink){
    URLLINK = tlink;
  }
  
  console.log("RERENDER")

    async function searchNow(e,ourstate){

    console.log(URLLINK)
    let str = ourstate.join(' ')
    console.log(str)
      let tags = (e.target.parentElement.parentElement.querySelector('input').value);
      let re = await fetch(URLLINK,{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          tagSearch:str
        })
      });
      let da = await re.json();
      setResults(da)
      console.log(da)
      localStorage.removeItem("link");
      return da;
      
    }




    function handleAddChip(s){
      state.push(s);
    }
    function handleDeleteChip(s){
      state.pop(s);
    }
    function switchHandle(e){
      if(!(e.target.checked)){
        URLLINK = links[0];
        localStorage.setItem("link",links[0]);
      }else{
        URLLINK = links[1];
        localStorage.setItem("link",links[1]);

      }
    }
    if(URLLINK == links[0]){
      return <div class="wrapper">
    <div class="container-search">
      <h1> {props.brand} Search Tool</h1>
      <div class="container-input">
        {console.log(state)}
      <ChipInput
        placeholder="Seach Tags, Repositories etc."
        style={{background:"#fff",width:'100%'}}
        variant={"outlined"}
        value={state}
        onAdd={(chip) => handleAddChip(chip)}
        onDelete={(chip, index) => handleDeleteChip(chip, index)}
      />
      <Button onClick={(e)=>searchNow(e,state)} variant="contained"> Search </Button>
        {/* <input onKeyDown={searchNow}  type="text" list="psychology_theories_list" id="psychology_theories_search" class="search-term" placeholder="Search on name, category, tags etc." /> */}
        {/* <button onSubmit={searchNow} type="submit" class="search-button" id="selectTheory">
          <i class="fa fa-search"></i>
       </button> */}
        <datalist id="psychology_theories_list">
           <option value="home" />
           <option value="section_1" />
           <option value="section_2" />
        </datalist>
      </div>
      <div style={{display:"flex",marginTop:'20px'}}>Repositories <Switch onChange={switchHandle}  color="primary" /> Contributors</div>
        
      <ul class="search-history">
        
              {results.map(each=>{
                  return <EachResult data={each} />;
                })
            }

      </ul>
    </div>
  </div>
    ;
    }else{
      return <div class="wrapper">
    <div class="container-search">
      <h1> {props.brand} Search Tool</h1>
      <div class="container-input">
        {console.log(state)}
      <ChipInput
        placeholder="Seach Tags, Repositories etc."
        style={{background:"#fff",width:'100%'}}
        variant={"outlined"}
        value={state}
        onAdd={(chip) => handleAddChip(chip)}
        onDelete={(chip, index) => handleDeleteChip(chip, index)}
      />
      <Button onClick={(e)=>searchNow(e,state)} variant="contained"> Search </Button>
        {/* <input onKeyDown={searchNow}  type="text" list="psychology_theories_list" id="psychology_theories_search" class="search-term" placeholder="Search on name, category, tags etc." /> */}
        {/* <button onSubmit={searchNow} type="submit" class="search-button" id="selectTheory">
          <i class="fa fa-search"></i>
       </button> */}
        <datalist id="psychology_theories_list">
           <option value="home" />
           <option value="section_1" />
           <option value="section_2" />
        </datalist>
      </div>
      <div style={{display:"flex",marginTop:'20px'}}>Repositories <Switch onChange={switchHandle}  color="primary" /> Contributors</div>
        
      <ul class="search-history">
        
              {results.map(each=>{
                  return <li key={each.username}>
                      <FontAwesomeIcon icon={faHistory} />
                    <span class="text">  <a href="#">{each.username}</a></span>
                    <a href="#" class="link"></a>
                  </li>;
                })
            }

      </ul>
    </div>
  </div>
    ;
    }
}

export default class Dashboard extends Component{

  constructor(props){
    super(props);



    

    this.state = {
      isLoggedIn:true
    }
    let data = localStorage.getItem("isLogged");
    
  }
   
    render(){  
      
      return (<div>
        {this.state.isLoggedIn === true ?
            <SearchBar brand={"GitFind"}  />
            :
                <Login />
            }

            <div style={{position:"absolute",bottom:"0px",right:"0px",zIndex:1,marginBottom:'20px',marginRight:'20px'}}>
            
              <Link to="/add">
              <Fab  variant="extended" color="primary" aria-label="add">
                <span style={{fontSize:'28px',margin:'5px'}}>+</span> Add
              </Fab>
              </Link>
            </div>
    </div>);
    }
}