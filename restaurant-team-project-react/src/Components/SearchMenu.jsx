import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "preact/hooks";
import { data } from "../assets/data";
import { Paper } from "@mui/material";

  // what is an idea:
  // this component should generate a string and insert it in function setSearchParam()
  // setSearchParam - is a reference to filter rerender. Once you call it, menu wil rerendered in accordance with your string



export default function SearchMenu({ menu, setSearchParam }) {

  const [autocompleteVal, setAutocompleteVal] = useState("");
  const [inputVal, setInputVal] = useState("");

  function filterByTitle(value) {
    const copyMenu = [...data];
    if (value) {
      const filteredMenu = copyMenu.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setMenu(filteredMenu);
    } else {
      // setMenu(data)
    }
  }

  useEffect(() => {
    filterByTitle(autocompleteVal);
  }, [autocompleteVal]);
  // setSearcParam
  useEffect(() => {
    filterByTitle(inputVal);
  }, [inputVal]);

  return (
    <Paper>
      <Autocomplete
        onSelect={(event) => {
          console.log(event.target.value);
        }}
        options={data}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            onChange={(event) => {
              setSearchParam(event.target.value);
            }}
            {...params}
            label="Search"
          />
        )}
      />
    </Paper>
  );
}

// export default SearchMenu

// sx={{ width: 300 }}  // AutoComplete
