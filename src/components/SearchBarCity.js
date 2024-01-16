/*
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function SearchBar() {
  const [input, setInput] = useState("");

  const apiKey = 'AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg'

  const fetchData = (value) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(value)}&key=${apiKey}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });  
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
      <TextField id="outlined-basic" label="Enter your destination city and favourite activities. eg. 'Bowling alleys in Sydney'" variant="outlined" value={input} onChange={(e) => handleChange(e.target.value)} />
    </Box>
  );
} */

/*
    <div>
      <Container id='search-bar'>
            <Left>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '70ch' },
                }}
                noValidate
                autoComplete="on"
              >
                <TextField id="outlined-basic" label="Enter your destination city and favourite activities. eg. 'Bowling alleys in Sydney'" variant="outlined" value={query} onChange={handleInputChange} />
            </Box>
        </Left>
        <Right>
        <Button variant="contained" color="success" endIcon={<SearchIcon />} onClick={handleSearch} >Search</Button>
        </Right>
    </Container>

      <ul>
        {results.map((place) => (
          <li key={place.place_id}>{place.name} {place.rating} 
          </li>
        ))}
      </ul>
    </div>
*/


import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const GooglePlacesSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual Google Places API key
      const apiKey = 'AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg';
      const apiUrl = 'http://localhost:3000/places?query=' + encodeURIComponent(query) + '&key=' + apiKey;


      const response = await axios.get(apiUrl);

      // Assuming response.data.results contains the array of places
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data from Google Places API:', error);
    }
  };

  return <Container id='search-bar'>
    
          <Title>One search away from your dream destination...</Title>

            <Left>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '70ch' },
                }}
                noValidate
                autoComplete="on"
              >
                <TextField id="outlined-basic" label="Enter your destination city and favourite activities. eg. 'Bowling alleys in Sydney'" variant="outlined" value={query} onChange={handleInputChange} />
            </Box>
        </Left>
        <Right>
        <Button variant="contained" color="success" endIcon={<SearchIcon />} onClick={handleSearch} >Search</Button>
        </Right>
        <Bottom>
        {results.map((place) => (
          <li key={place.place_id}>{place.name}, Rating: {place.rating}</li>
        ))}
      </Bottom>

    </Container>
}; 

export default GooglePlacesSearch; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  height: 100vh;
  background: #D0F0C0;

`;

const Left = styled.div`
  margin-right: 2vw;
  padding: 6vh 0vh 5vh 50vh;
`;

const Right = styled.div`
  position: absolute;
  display: flex;
  padding: 18vh 0vh 0vh 139vh;  
`;

const Bottom = styled.div`
  width: 100%;  
  flex-grow: 1;  
  background: #D0F0C0;
  padding: 0vh 0vh 0vh 50vh;

  @media (min-width: 769px) {
    width: 70%;  
  }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 5vh;
    width: 100%;
    text-align: center;
    margin-top: 3vh;
`
