import React from "react";


function Repo(props) {

console.log(props.onDelete);
//   function handleClick(){
//     props.onDelete(props.id);
    
//     }
  return (
    <div className="note" style={{margin:' 0px auto',textAlign:'center'}}>
      <h1>{props.name}</h1>
      <p>{props.language}</p>
      </div>
  );
}

export default Repo;