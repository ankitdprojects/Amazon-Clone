import React,{useState, useEffect} from 'react'
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from '../assets/Logo.png';
import Card from 'react-bootstrap/Card';
import { SignupSchema } from '../Schema';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { createUserWithEmailAndPassword,updateProfile,updatePhoneNumber } from 'firebase/auth';
import { auth } from '../Config/Config';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [submitDisabledButton,setSubmitDisabledButton] = useState(false)
    const [errMsg,setErrMsg] = useState('');
    const navigate = useNavigate();
    const initialValues ={
        name: '',
        mobileNumber: '',
        email: '',
        password: '',
    }
    
   
    const { values, errors, touched,handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:initialValues,
        validationSchema: SignupSchema,
        onSubmit:(values,action ) => {
            console.log(values);
            action.resetForm();
        }
    }) 
    useEffect(() => {
        handleAuth();
    }, []);
    const handleAuth =() => {
        setSubmitDisabledButton(true)
        createUserWithEmailAndPassword(auth, values.email,values.password)
        .then(async (res) => {
            setSubmitDisabledButton(false);
            const user = res.user;
           await updateProfile(user,{
                displayName: values.name,
            });

            console.log(user)
        }).catch((err) => {
            setSubmitDisabledButton(false);
            setErrMsg(err.message)
        })
    }
  return (
    <div className='d-flex justify-content-center align-items-center'>
    <Form className='w-25 text-center ' onSubmit={handleSubmit}>
    <span className='d-flex justify-content-center'><img className='w-100' src={Logo} alt="" srcset="" /></span>
    <h1>SignUp</h1>
    <Card className='m-1' style={{ width: '25vw' }}>
    <Form.Group className="mb-3" >
    <Form.Label>Enter your Name</Form.Label>
    <Form.Control type="name" name='name' id='name' value = {values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name"/>
    {errors.name && touched.name ?(<p style={{color:'red', fontSize:'12px'}}>{errors.name}</p>): null}
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name='email' id='email' value = {values.email} onChange={handleChange} onBlur={handleBlur} />
    {errors.email && touched.email ?(<p style={{color:'red', fontSize:'12px'}}>{errors.email}</p>): null}
  </Form.Group>

  <Form.Group className="mb-3 " >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' id='password' placeholder="At least 6 characters " value = {values.password} onChange={handleChange} onBlur={handleBlur}/>
    {errors.password && touched.password ?(<p style={{color:'red', fontSize:'12px'}}>{errors.password}</p>): null}
  </Form.Group>
  <p style={{color:'red'}}>{errMsg}</p>
  <Button disabled={submitDisabledButton} onClick={handleAuth} variant="warning" type="submit">
    Signup
  </Button>
  <p>Already have an account? <Link to='/login'>SignIn </Link> </p>
  </Card>
</Form>
</div>
  )
}

export default SignUp