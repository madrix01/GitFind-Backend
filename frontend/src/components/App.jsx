import React, { useState } from "react";
import Blogs from './../Pages/Blogs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import PageNotFound from './../Pages/PageNotFound';
import Navbar from "./Navbar";
import Add from "../Pages/Add";
// import note from "./Note.jsx";
import {UserProvider} from './userContext.js'
function App() {
  let [loggedUser,setLoggedUser] = useState({
    "login": "madrix01",
    "id": 51414879,
    "node_id": "MDQ6VXNlcjUxNDE0ODc5",
    "avatar_url": "https://avatars.githubusercontent.com/u/51414879?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/madrix01",
    "html_url": "https://github.com/madrix01",
    "followers_url": "https://api.github.com/users/madrix01/followers",
    "following_url": "https://api.github.com/users/madrix01/following{/other_user}",
    "gists_url": "https://api.github.com/users/madrix01/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/madrix01/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/madrix01/subscriptions",
    "organizations_url": "https://api.github.com/users/madrix01/orgs",
    "repos_url": "https://api.github.com/users/madrix01/repos",
    "events_url": "https://api.github.com/users/madrix01/events{/privacy}",
    "received_events_url": "https://api.github.com/users/madrix01/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shlok Patel",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 28,
    "following": 27,
    "created_at": "2019-06-05T16:05:17Z",
    "updated_at": "2021-02-27T20:00:45Z"
  });



  console.log(loggedUser)

  return <BrowserRouter>
      
        <Switch>
        
        <Navbar loggedUser={loggedUser} handleUser={setLoggedUser}  brand={"GitFind"}/>


        <UserProvider value={loggedUser}>
          <Route exact={true} path="/" render={()=>{
            return <div>
              <Dashboard />
            </div>
          }} />
          <Route exact={true} path="/add" render={()=>{
            return <div>
              <Add />
            </div>
          }} />

          <Route path="/blogs" component={Blogs} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="**" component={PageNotFound} />

        </UserProvider>
        
      </Switch>
  </BrowserRouter>
}

export default App;
