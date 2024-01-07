import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import SearchBar from './SearchBarCity';
//import SearchBarActivity from './SearchBarActivity';
import SearchIcon from '@mui/icons-material/Search';

function SearchBarCombined() {
    return <Container id='search-bar'>
            <Left>
            <SearchBar />
        </Left>
        <Right>
        <Button variant="contained" color="success" endIcon={<SearchIcon />} href='/'>Search</Button>
        </Right>
    </Container>
}
export default SearchBarCombined



const Container = styled.div`
    display: flex;
    font-size: 16px;
    margin: 2.5vh;
    height: 30vh;
`

const Left = styled.div`
    width: 80vh;
    margin-right: 2vw;
    height: 30vh;
    padding: 15vh 40vh;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    padding: 17vh 40vh;
    height: 30vh;
`