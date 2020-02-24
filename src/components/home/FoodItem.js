import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const FoodItem = ({item, setCart}) => {
    const onAddChart = (e) => {
        e.preventDefault();
        setCart(item);
    }

    return(
        <Col xs={6} md={4} style={{ marginBottom: "20px", border: "1px solid rgba(0,0,0,.1)", paddingTop: "10px", paddingBottom: "10px" }}>
            <img src={item.image} width={200} height={150}/>
            <p style={{ marginTop: "10px" }}>{item.name}</p>
            <Row style={{ marginTop: "8px" }}>
                <Col sm={6}>Rp. {item.price}</Col>
                <Col sm={6}>
                    <Button variant="info" size="sm" onClick={onAddChart} >Add Chart</Button>
                </Col>
            </Row>
        </Col>
    )
}

export default FoodItem;