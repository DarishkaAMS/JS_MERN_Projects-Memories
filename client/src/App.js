import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRoute, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


const App = () => (
    <Container maxWidth="lg">
      <Navbar />
      <Home />
    </Container>
);

export default App;