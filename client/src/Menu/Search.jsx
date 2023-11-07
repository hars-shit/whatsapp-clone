import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'


const Component = styled(Box)`
    background: #fff;
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
`;

const Wrapper = styled(Box)`
    position: relative;
    border-radius: 10px;
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;
`;

const Icon = styled(Box)`
    color: #919191;
    padding: 6px 10px;
    height: 100%;
    position: absolute;
`;
      
const InputField = styled(InputBase) `
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 14px;
    height: 15px;
    width: 100%;
`;

const Search = () => {
  return (
   <Component>
    <Wrapper>
        <Icon>
        <SearchIcon fontSize='small'/>  
        </Icon>
        <InputField placeholder='Search or start a new chat'/>
    </Wrapper>
   </Component>
  )
}

export default Search