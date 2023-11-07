import React, { useContext } from "react";
import Login from "./accounts/Login";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import ChatDailog from "./chat/ChatDailog";
import { AccountContext } from "../context/AccountProvider";

const Component = styled("div")`
  height: 100vh;
  background-color: #dcdcdc;
`;
const LoginHeader = styled(AppBar)`
  height: 250px;

  background-color: #00bfa5;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar>
              <ChatDailog />
            </Toolbar>
          </Header>
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar>

            </Toolbar>
          <Login />
          </LoginHeader>

         
        </>
      )}
    </Component>
  );
};

export default Messenger;
