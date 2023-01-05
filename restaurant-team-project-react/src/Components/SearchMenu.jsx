import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'preact/hooks';
import { data } from '../assets/data';
import { Paper } from '@mui/material';

function SearchMenu({menu, setMenu}) {
  const [autocompleteVal, setAutocompleteVal] = useState("")
  const [inputVal, setInputVal] = useState("")
  
  function filterByTitle(value){
    const copyMenu = [...data]
    if(value){
      const filteredMenu = copyMenu.filter(item=>item.title.toLowerCase().includes(value.toLowerCase()))
      setMenu(filteredMenu)
    }else{
      setMenu(data)
    }
  }

  useEffect(()=>{
    filterByTitle(autocompleteVal)
  },[autocompleteVal])
  
  useEffect(()=>{
    filterByTitle(inputVal)
  },[inputVal])

  return (
    <Paper 
      >
      <Autocomplete
        onSelect={(event) => {
          console.log(event.target.value)
          setAutocompleteVal(event.target.value);
        }}
        id="combo-box-demo"
        options={data}
        getOptionLabel={option => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField 
          onChange={(event) => {
            setInputVal(event.target.value);
          }}
          {...params} label="Search" />}
      />
    </Paper>
  )
}

export default SearchMenu