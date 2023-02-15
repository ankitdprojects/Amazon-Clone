import React from 'react';
import ProductContainer from './ProductContainer';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const Products = () => {
    const DUMMY_PRODUCTS = [
        {
          id: 1,
          name: "MacBook",
          imgURL:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 25000,
        },
        {
          id: 2,
          name: "Lenovo Yoga",
          imgURL:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 34000,
        },
        {
          id: 3,
          name: "Dell lattitude",
          imgURL:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 23000,
        },
        {
          id: 4,
          name: "HP Pavillion",
          imgURL:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 45000,
        },
        {
          id: 5,
          name: "Acer Aspire",
          imgURL:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          price: 55000,
        },
      ];
  return (
    <div >
    <Container>
     <Row xs={2} md={4}>
    
   
      {DUMMY_PRODUCTS.map((product, index) => (
        <Row>
        <Col>
            
     <Card>
        <li key={index} style={{listStyleType:'none'}}>
          <ProductContainer
            id={product.id}
            name={product.name}
            imgURL={product.imgURL}
            price={product.price}
          />
        </li>
        </Card>
    </Col>
    </Row>
      ))}
   
    </Row>
    </Container>
  </div>
  )
}

export default Products