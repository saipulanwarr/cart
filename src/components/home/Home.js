import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Food from './Food';

class Home extends Component{
    render(){
        return(
            <Container>
                <Food />
            </Container>
        )
    }
}

export default Home;