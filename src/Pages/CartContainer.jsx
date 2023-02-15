import React from "react";
import CartPage from "./CartPage";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CartContainer = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const navigate = useNavigate();
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });
  function checkout(){
    navigate('/checkout')
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
     
      <h2 className="text-center">Your Cart</h2>
      {cartItems.map((item) => (
        <Card border="primary" style={{ width: '80vw' }}>
        <Row>
        <Col>
          {''}
          <CartPage key={item.id}
          quantity={item.quantity}
          id={item.id} 
          price={item.price} 
          total={item.totalPrice} 
          name={item.name}/>
          {''}
          </Col>
          </Row>
          </Card>
          
        ))}
        <h3>Total: ${total}</h3>
        <Button onClick={checkout} variant="warning">Proceed To Buy</Button>
    </div>
  );
};

export default CartContainer;
