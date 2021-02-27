# Backend GitFind

### DEMO link

http://3.18.109.33/

### Login
```
http://3.18.109.33/api/login
```
### UserInfo 
```
http://3.18.109.33/api/home/user
```

### Get List of Repositories
``` https://api.github.com/users/<username>/repos ```

### Post a repo to feed
```
http://3.18.109.33/api/home/postRepo
# Request body 
{
    repoName:string
    level: string
    tags: All the tags in one string with space between them for eg. "react html css"
}
```
### Seach a repo
```
http://3.18.109.33/api/search/repo
# Request Body
{
    tags : All the search tags in one string with space between them for eg. "react html css"
}
```
