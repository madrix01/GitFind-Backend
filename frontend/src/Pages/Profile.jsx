import React, { Component } from 'react';
import default_profile from './../assets/some_icon1.svg';
import './profile.css';

export default class Profile extends Component{
    
    constructor(props){
        super()


        this.state = {
            username:props.match.params.id,
            name:'',
            avatar_url:'',
            obj:{}
        }
    }
    makeApiRequest(data){

    }


    componentDidMount(){
        fetch('https://api.github.com/users/'+this.state.username)
        .then(response=>{
            response.json().then(data=>{
                this.setState(init=>{
                    console.log(data)
                    return {...init, name:data.name,obj:data,avatar_url:data.avatar_url}
                })
            })
        }).catch(e=>{
            console.log('Failed Request')
        })    
    }




    render(){
        return <div className="profileBody">
            <div class="side_wrapper">
  <section class="about-dev">
    <header class="profile-card_header">
      <div class="profile-card_header-container">
        <div class="profile-card_header-imgbox">
          <img src={this.state.avatar_url} alt="Mewy Pawpins" />
        </div>
        <h1> {this.state.name} <span> Username : {this.state.username} </span></h1>
      </div>
    </header>
    <div class="profile-card_about">
      <h2>All About Mewy</h2>
      <p> { this.state.obj.bio } </p>
      <footer class="profile-card_footer">
        <div class="social-row">
          <div class="heart-icon" title="No Health Issues">
            <img src={default_profile} />
          </div>

        </div>
        <p><a class="back-to-profile" href="#">Full Adoption Profile</a></p>
      </footer>
    </div>
  </section>
</div>
        </div>
    }
}