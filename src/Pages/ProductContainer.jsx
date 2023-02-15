import React from 'react'
import { useDispatch } from "react-redux";
import { cartActions } from '../Store/CartSlice.jsx';
import { Button } from 'react-bootstrap';
const ProductContainer = ({ name, id, imgURL, price }) => {
    const dispatch = useDispatch();
  const addToCart = () =>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
    })
    );
    
  }
 
    return (
        <div className="card">
        <img src={imgURL} alt={name} />
        <h2 className='text-center'>{name}</h2>
        <p  className='text-center'>Rs.{price}</p>
        <Button variant="warning" onClick={addToCart}>Add to cart</Button>
      </div>
  )
}

export default ProductContainer