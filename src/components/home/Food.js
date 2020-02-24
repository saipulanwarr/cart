import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import FoodItem from './FoodItem';
import Cart from './Cart';

class Food extends Component{
    state = {
        foods: [
            {
                name: "Espresso",
                image: "https://pbs.twimg.com/profile_images/1000319614960787456/TLJU1nal_400x400.jpg",
                price: 10000
            },
            {
                name: "Cofee Latte",
                image: "https://cf.shopee.co.id/file/a3f9e83eb86c1fc337b4d50227e9462b",
                price: 15000
            },
            {
                name: "Cappucino",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1280px-Cappuccino_at_Sightglass_Coffee.jpg",
                price: 5000
            },
            {
                name: "Red Velvet Latte",
                image: "https://pbs.twimg.com/profile_images/1000319614960787456/TLJU1nal_400x400.jpg",
                price: 33000
            },
            {
                name: "Choco Rhum",
                image: "https://pbs.twimg.com/profile_images/1000319614960787456/TLJU1nal_400x400.jpg",
                price: 28000
            },
            {
                name: "Black Forest",
                image: "https://pbs.twimg.com/profile_images/1000319614960787456/TLJU1nal_400x400.jpg",
                price: 30000
            },
            {
                name: "Chicken Katsu Dabu-dabu",
                image: "https://pbs.twimg.com/profile_images/1000319614960787456/TLJU1nal_400x400.jpg",
                price: 60000
            },
            {
                name: "Salmon Truffle Teriyaki",
                image: "https://pbs.twimg.com/profile_images/1000319614960787456/TLJU1nal_400x400.jpg",
                price: 60000
            },
            {
                name: "Wiener Schnitzel",
                image: "https://pbs.twimg.com/profile_images/1000319614960787456/TLJU1nal_400x400.jpg",
                price: 69000
            }
        ],
        cart: null
    };

    onSetCart = (item) => {
        this.setState({
            cart: item
        })
    }

    render(){
        const { foods, cart } = this.state;
        const listFood = foods.map((food, index) => {
            return(
                <FoodItem key={index} item={food} setCart={this.onSetCart} />
            )
        })
        return(
            <Row style={{ marginTop: "15px" }}>
                <Col sm={8}>
                    <Col md={{ span: 6, offset: 3 }} style={{ marginBottom: "20px" }}>
                        <h4>Food Items</h4>
                    </Col>
                    <hr />
                    <Row>{listFood}</Row>
                </Col>
                <Col sm={4}>
                    <Col md={{ span: 6, offset: 3 }} style={{ marginBottom: "20px" }}>
                        <h4>Cart</h4>
                    </Col>
                    <hr />
                    <Cart cart={cart} />
                </Col>
            </Row>
            
        )
    }
}

export default Food;