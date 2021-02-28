import React from 'react'
const UserContext=React.createContext({
    loggedUser:{
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
      },
      handleUser:()=>{}
});
const UserProvider=UserContext.Provider;
const UserConsumer=UserContext.Consumer;
export {UserProvider,UserConsumer};
