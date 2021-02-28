import React, { useState }  from 'react';

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Note from "./../components/Note";
import CreateArea from "./../components/CreateArea";

export default function(){
    const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes,newNote];
    });

  }

  function deleteNote(id){
 
    setNotes(prevNotes =>{
    return prevNotes.filter( (noteItem,index) =>{
    return index !==id;
    });

    });


  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      <div style={{display:'flex',width:'100%', textAlign:'center', margin:'0 auto'}}>
        {notes.map((noteItem,index) => {
            //console.log(note);
            return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>;
        })}
      </div>

      <Footer />
    </div>
  );
}