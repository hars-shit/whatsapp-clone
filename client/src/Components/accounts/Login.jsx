import { Box, Dialog, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import {GoogleLogin} from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'
const DailogStyle={
height:'96%',
marginTop:'12%',
width:'60%',
maxWidth:'100%',
maxHeight:'100%',
boxShadow:'none',
overflow:'hidden',

}
const Component=styled(Box)`
display:flex;

`
const Container=styled(Box)`
padding:56px 0 56px 56px;
`
const Title=styled(Typography)`
font-size:30px;
color:#525252;
font-wight:500;
margin-bottom:25px;

`
const StyledList=styled(List)`
& > li{
  padding:0;
  margin-top:3px;
  font-size:18px;
  line-height:28px;
  color:#4a4a4a;
  font-family:inherit;
}`
const QrCode=styled('img')({
  height:264,
  width:264,
  margin:'50px 0 0 50px',
})
import { qrCodeImage } from '../../constants/data'
import styled from '@emotion/styled'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../service/api'


const Login = () => {
  const {setAccount}=useContext(AccountContext);
  const onLoginSuccess=async(res)=>{
    
   const decoded= jwtDecode(res.credential)
   console.log("sca ",decoded)
   setAccount(decoded)
  await addUser(decoded);
    
  }
  const onLoginError=()=>{
  console.log("login failed",res)
  }
  return (
    <Dialog
    open={true}
    PaperProps={{sx:DailogStyle}}
    hideBackdrop={true}
    >
    <Component>

    <Container>
      <Title>To use WhatsApp on your computer:</Title>
      <StyledList>
        <ListItem>1. Open WhatsApp on your phone</ListItem>
        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
        <ListItem>3. Point your phone to this screen to capture the code </ListItem>
      </StyledList>
    </Container>

    <Box>
    <QrCode src={qrCodeImage} alt="qr-code" />
    <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
      <GoogleLogin 
      onSuccess={onLoginSuccess}
      
      onError={onLoginError}
      
      />
      
    </Box>
    </Box>
    </Component>

    </Dialog>
  )
}

export default Login 