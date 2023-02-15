import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik'
import { CheckoutSchema } from '../Schema';
import Card from 'react-bootstrap/Card';
import { useNavigate,Link } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const initialValues ={
        fullName: '',
        mobileNumber: '',
        pinCode: '',
        address: '',
        area: '',
        townCity: '',
        landmark: '',
    }
   
    const { values, errors, touched,handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:initialValues,
        validationSchema: CheckoutSchema,
        onSubmit:(values,action ) => {
            console.log(values);
            action.resetForm();
            navigate('/success')
        }
    }) 

  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
        <Form className='w-25 text-center ' onSubmit={handleSubmit}>
        <h1>Checkout</h1>
        <Card className='m-1' style={{ width: '25vw' }}>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" name='fullName' id='fullName' value = {values.fullName} onChange={handleChange} onBlur={handleBlur}/>
        {errors.fullName && touched.fullName ?(<p style={{color:'red', fontSize:'12px'}}>{errors.fullName}</p>): null}
      </Form.Group>

      <Form.Group className="mb-3 ">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" name='mobileNumber' id='mobileNumber' value = {values.mobileNumber} onChange={handleChange} onBlur={handleBlur}/>
        {errors.mobileNumber && touched.mobileNumber ?(<p style={{color:'red', fontSize:'12px'}}>{errors.mobileNumber}</p>): null}
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text" name='pinCode' id='pinCode' value = {values.pinCode} onChange={handleChange} onBlur={handleBlur}/>
        {errors.pinCode && touched.pinCode ?(<p style={{color:'red', fontSize:'12px'}}>{errors.pinCode}</p>): null}
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name='address' id='address' value = {values.address} onChange={handleChange} onBlur={handleBlur}/>
        {errors.address && touched.address ?(<p style={{color:'red', fontSize:'12px'}}>{errors.address}</p>): null}
      </Form.Group>
      
      <Form.Group className="mb-3 ">
        <Form.Label>Area</Form.Label>
        <Form.Control type="text" name='area' id='area' value = {values.area} onChange={handleChange} onBlur={handleBlur}/>
        {errors.area && touched.area ?(<p style={{color:'red', fontSize:'12px'}}>{errors.area}</p>): null}
      </Form.Group>
      
      <Form.Group className="mb-3 ">
        <Form.Label>Town/City</Form.Label>
        <Form.Control type="text" name='townCity' id='townCity' value = {values.townCity} onChange={handleChange} onBlur={handleBlur}/>
        {errors.townCity && touched.townCity ?(<p style={{color:'red', fontSize:'12px'}}>{errors.townCity}</p>): null}
      </Form.Group>
      <Form.Group className="mb-3 ">
        <Form.Label>Landmark</Form.Label>
        <Form.Control type="text" name='landmark' id='landmark' value = {values.landmark} onChange={handleChange} onBlur={handleBlur}/>
        {errors.landmark && touched.landmark ?(<p style={{color:'red', fontSize:'12px'}}>{errors.landmark}</p>): null}
      </Form.Group>
      
      
      <Button  variant="warning" type="submit">
        Submit
      </Button>
      </Card>
    </Form>
    </div>
    <div style={{textAlign:'center'}}>
    <p>New to Amazon? <Link to='/signup'>SignUp </Link> </p></div>
    </>
  )
}

export default Checkout