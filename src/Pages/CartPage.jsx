import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cartSlice";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const CartPage = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementCartItem = () =>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
    }))
  }

  const decrementCartItem = () =>{
    dispatch(cartActions.removeFromCart(id)); 
  }
  return (
    <Row>
           <Col>{name}</Col>
      <Col>{price}</Col>
      <Col>{quantity}</Col>
      <Col>{total}</Col>
      <Col>
      <Button className="cart-actions" variant="dark" style={{border:'none'}} onClick={decrementCartItem}>
        -
      </Button></Col>
      <Col>
      <Button className="cart-actions" style={{border:'none'}} onClick={incrementCartItem} variant="dark">
        +
      </Button>
      </Col>
      </Row>
  );
};

export default CartPage;
