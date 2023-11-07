import React from 'react'
import Messenger from './Components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google'
import AccountProvider from './context/AccountProvider'

const App = () => {
  const clientId="926258793972-6o5nqqk495gk1od2lcqg0sg6us9oggji.apps.googleusercontent.com"
  return (
   <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider >
    <Messenger />
    </AccountProvider>
   </GoogleOAuthProvider>
  )
}

export default App