import * as React from 'react';
import {Autocomplete, FormControl} from '@mui/joy';
import { useEffect, useState } from "preact/hooks";
import { data } from "../assets/data";


  // what is an idea:
  // this component should generate a string and insert it in function setSearchParam()
  // setSearchParam - is a reference to filter rerender. Once you call it, menu wil rerendered in accordance with your string



export default function SearchMenu({ setMenu, setSearchParam }) {

  const [autocompleteVal, setAutocompleteVal] = useState("");

  function filterByTitle(value) {
    const copyMenu = [...data];
    if (value) {
      const filteredMenu = copyMenu.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setMenu(filteredMenu);
    }else{
      setMenu(data)
    }
  }

  useEffect(() => {
    filterByTitle(autocompleteVal);
  }, [autocompleteVal]);

  

  return (
    <FormControl>
      <Autocomplete
        onChange = {(event, value)=> {
          if(value){
            setAutocompleteVal(value.title)
          }else{
            setAutocompleteVal("")
          }
        }}
        placeholder="search..."
        options={data}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
      />
      
    </FormControl>
  );
}

