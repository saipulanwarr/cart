import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

const itemCart = ({cart, addQty, reduceQty, deleteItem}) => {
    const onAddQty = (e) => {
        e.preventDefault();
        addQty(cart);
    }

    const onReduceQty = (e) => {
        e.preventDefault();
        reduceQty(cart);
    }

    const onDelete = (e) => {
        e.preventDefault();
        deleteItem(cart);
    }
    return(
        <Row style={{ marginBottom: "10px", border: "1px solid rgba(0,0,0,.1)", paddingTop: "10px", marginLeft: "10px", paddingBottom: "10px" }}>
            <Col xs={6} md={4}><img src={cart.image} width={80} height={80} /></Col>
            <Col xs={6} md={4}>
                <p>{cart.name}</p>
                <Row style={{ marginTop: "10px" }}>
                    <Col sm={4}>
                        <Button size="sm" variant="outline-info" onClick={onReduceQty}>-</Button>
                    </Col>
                    <Col sm={2}>{cart.qty}</Col>
                    <Col sm={4}>
                        <Button size="sm" variant="outline-info" onClick={onAddQty}>+</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={6} md={4}>
                <p> Rp. {cart.price}</p>
                <Button onClick={onDelete} size="sm" variant="danger">Remove</Button>
            </Col>
        </Row>
    )
}

export default itemCart;