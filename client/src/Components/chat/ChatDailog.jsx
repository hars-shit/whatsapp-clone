import { Box, Dialog, Toolbar, styled } from '@mui/material'
import React from 'react'
import Menu from '../../Menu/Menu'
import EmptyChat from './EmptyChat'


const Components=styled(Box)`
display:flex;
`
const LeftComponent = styled(Box)`
    min-width: 450px;
`;
    
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;


const DailogStyle={
    height:'96%',
    width:'100%',
    margin:'20px',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
    borderRadius:0,
    
    }

const ChatDailog = () => {
  return (
   <Dialog
   open={true}
   PaperProps={{sx:DailogStyle}}
   hideBackdrop={true}
   maxWidth={'md'}
   >
   <Components>
    <LeftComponent>
        <Menu />
    </LeftComponent>

    <RightComponent>
    <EmptyChat />
    </RightComponent>
   </Components>
   </Dialog>
  )
}

export default ChatDailog