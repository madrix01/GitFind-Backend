import React,{ useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Repo from "./../components/repo";
import CreateRepo from "./../components/CreateRepo";

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);
  const [userData,setUserData]=useState([]);
  useEffect( async() =>{
   const response= await fetch('https://api.github.com/users/Harshit2929/repos');
   const data= await response.json();
   //console.log(data);
   setUserData(data);
  },[]);
  

  function addRepo(newNote) {
    setUsersData(prevNotes => {
      return [...prevNotes,newNote];
    });

  }

  return (
    <div>
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}

     


      onClick={(event,newValue) =>{

        function addRepo(newValue) {
    setUser(prevNotes => {
      return [...prevNotes,newValue];
    });

  }

             if (typeof newValue === 'string') {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}      

      

      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            name: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={userData}

      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}

      renderOption={(option) => option.name}
      style={{ margin: 'auto',
  width: '50%',
   padding: '10px'}}
      freeSolo
      renderInput={(params) => (
        <div>
        <TextField {...params} label="Select repos you want to add" variant="outlined" />
    
</div>
  
  )}
    />
  {/* <CreateRepo onAdd={addRepo} /> */}

{/* <div style={{display:'flex',width:'100%', textAlign:'center', margin:'0 auto'}}>
  {userData.length != 0 ? userData.map((noteItem,index) => {
      //console.log(note);
      return <Repo key={index} id={index} title={noteItem.name} content={noteItem.language}/>;
  }) 

: 

''}
</div> */}
</div>


  );
}



