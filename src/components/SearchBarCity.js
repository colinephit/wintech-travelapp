import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://places.googleapis.com/v1/places:searchText")
      .then((response) => response.json())
      .then(json => {
        console.log(json);
      })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70ch' }, 
      }}
      noValidate
      autoComplete="on"
    >
      <TextField id="outlined-basic" label="Enter your destination city and favourite activities. eg. 'Bowling alleys in Sydney'" variant="outlined" value={input} onChange={(e) => handleChange(e.target.value)}/>
    </Box>
  );
}