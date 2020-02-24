import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container style={{ marginBottom: "20px" }}>
        <Home />
      </Container>
    </div>
  );
}

export default App;
