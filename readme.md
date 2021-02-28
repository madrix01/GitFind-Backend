# Git-Find🔎 #
#### Lets makes open source more open ####

## Description💻 ##
Git-Find helps find contibutors for repos and repos for contributors. 
It is web service saves that your time from scrolling thousands of repos on GitHub so that you can easily find the right repo to contribute to based on the tech stack you want to know and depending on the level i.e beginner, intermediate, and expert. You can also find active contributors in the domain to contribute to your repositories. Thus, you can connect to devs all over the world and promote open source together

### Impacts it makes on our society ###
It is based on the track - **Let's Connect**
Git-Find connects developer to develops. It guides beginners to the world of open source and let's them find repos for their level.
You can find an apt repository for your interests and find many developers with same interests.

### Tech Stack used👨‍💻 ###
- **Express** for backend api's
- **React** as a frontend framework
- **FireStore** as a for database
- **Amazon Aws** for hosting

### Challenges we ran into ###
-Github Authorization was the major issue, in this project, as we were using Redirect in our server, there were some CORS Frame Resource Sharing Issue.

### Steps to Install ⬇️ ###
- Clone the repo
- perform ``` $ npm install```
- Get you client_id and client_secret from 
``` https://github.com/settings/applications/new ```
and set call back route to 
``` http://localhost:6969/api/oauth_callback```
- create ``` .env ``` file and add 
``` CLIENT_SECRET=<client secret here> ```
```CLIENT_ID=<client id here> ```
```PORT=6969 ```
- execute ``` $ npm start ```


In the last 24 hours we designed and integrated and designed ui 
and made most of the important api in backend 

### Team Bitwise_coders ###
- Shlok Patel
- Pushpendra Vishwakarma
- Harshit Chauhan
