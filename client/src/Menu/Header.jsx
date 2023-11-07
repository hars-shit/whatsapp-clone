import React, { useContext, useState } from 'react'
import { AccountContext } from '../context/AccountProvider'
import MessageIcon from '@mui/icons-material/Message';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Box, styled } from "@mui/material"
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../Components/Drawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
const Header = () => {

    const {account}=useContext(AccountContext)

    const [openDrawer,setOpenDrawer]=useState(false);

  return (
   <>
   <Component>
    <Image src={account.picture} alt="profile-image"  onClick={()=> setOpenDrawer(true)}/>
    <Wrapper>
        <DonutLargeIcon />
        <MessageIcon />
        <HeaderMenu setOpenDrawer={setOpenDrawer}/>
    </Wrapper>
   </Component>
   <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
   </>
  )
}

export default Header