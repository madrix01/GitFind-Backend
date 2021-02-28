import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import constants from './../constants.json';

async function getLoggedUser(){
    let re = await fetch(constants.user);
    let da = await re.json();
    return da;
}
let loadDefault = async (fun,handleUser)=>{

    let re = await fetch(constants.user);
    let LoggedUserDta = await re.json();
    
        await handleUser(LoggedUserDta);
        
    
        localStorage.setItem("loggedUserData",JSON.stringify(LoggedUserDta));
        // console.log(LoggeUserDta)
        let data = LoggedUserDta.login;
        await fun(data);



        localStorage.setItem("username",data);
        
}
export default function(props){
    

    
    console.log("LOGINCOMPONENT",props)
    
    let [user,setUser]=useState(localStorage.getItem("username"));

    console.log(user);


    
    loadDefault(setUser,props.handleUser);


    async function LoginNow(){
    
    // let re = await fetch(constants.login);
        var win = await window.open(constants.login, "MyDialog", 720, 600, "menubar=0,toolbar=0");
        let data;

        let LoggedUserDta = await getLoggedUser();
        await props.handleUser(LoggedUserDta);
        
    
        localStorage.setItem("loggedUserData",JSON.stringify(LoggedUserDta));
        // console.log(LoggeUserDta)
        data = LoggedUserDta.login;
        await setUser(data);



        localStorage.setItem("username",data);
       
    }

    if(!!user){
        return <Link  className="nav-links" style={{margin:0,padding:'10px',background:'transparent',outline:0,border:0,color:'rgba(255, 255, 255, 0.7)',fontSize:'24px'}} onClick={LoginNow}> {user} </Link>
    }else{
        return <Link  className="nav-links" style={{margin:0,padding:'10px',background:'transparent',outline:0,border:0,color:'rgba(255, 255, 255, 0.7)',fontSize:'24px'}} onClick={LoginNow}>Login </Link>
    }
}
