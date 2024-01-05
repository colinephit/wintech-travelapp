import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import SearchBarCity from './SearchBar';
import SearchBarActivity from './SearchBarActivity';
import SearchIcon from '@mui/icons-material/Search';

function SearchBarCombined() {
    return <Container id='search-bar'>
            <Left>
            <SearchBarCity />
        </Left>
        <Mid>
            <SearchBarActivity />
        </Mid>
        <Right>
        <Button variant="outlined" endIcon={<SearchIcon />} href='/'>Search</Button>
        </Right>
    </Container>
}
export default SearchBarCombined



const Container = styled.div`
    display: flex;
    font-size: 16px;
    margin: 2.5vh;
    height: 15vh;
`

const Left = styled.div`
    width: 60vh;
    margin-right: 2vw;
    height: 50vh;
    padding: 5vh;
`
const Mid = styled.div`
    width: 60vh;
    height: 50vh;
    padding: 5vh;
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    padding: 7vh;
    height: 50vh;
`
const Title = styled.div`
    font-weight: 700;
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 1vh;
    color: #000000;
    `
