import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70ch' }, 
      }}
      noValidate
      autoComplete="on"
    >
      <TextField id="outlined-basic" label="Enter your destination city and favourite activities here." variant="outlined" />
    </Box>
  );
}