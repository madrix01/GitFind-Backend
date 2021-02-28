import React from "react";


function Note(props) {

console.log(props.onDelete);
  function handleClick(){
    props.onDelete(props.id);
    
    }
  return (
    <div className="note" style={{margin:' 0px auto',textAlign:'center'}}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
