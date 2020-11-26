
import React from 'react';
import SettingsProvider from './setteing';
import ToDo from './todo-connected';
import LoginProvider from './auth.js';
import Signup from './signup';
import Login from './login';
import {  Navbar, Row,Col,Container } from 'react-bootstrap';

import Auth from './authcontext.js';



function App() {
  return (
    <>
     <LoginProvider>
     <Navbar bg="primary" variant="dark">
      <Container fluid>
      <Row>
     <Col>HOME</Col>
     <Row>
     <Signup />
      <Login />
     </Row>
    
    
      </Row>
     </Container>
   </Navbar>
    
     <Auth capability="read"> 
     <SettingsProvider>
    <ToDo />
    </SettingsProvider>
    </Auth >
    </LoginProvider>
    
  </>
  );
}

export default App;
