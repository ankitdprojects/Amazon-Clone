import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from '../assets/Logo.png'
import { useFormik } from 'formik'
import { LoginSchema } from '../Schema';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/Config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errMsg,setErrMsg] = useState('');
  const navigate = useNavigate('')
    const initialValues ={
        email: '',
        password: '',
    }
   
    const { values, errors, touched,handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:initialValues,
        validationSchema: LoginSchema,
        onSubmit:(values,action ) => {
            console.log(values);
            action.resetForm();
        }
    }) 

    useEffect(() => {
        handleAuth();
    }, []);
    const handleAuth = () => {
        signInWithEmailAndPassword(auth, values.email,values.password)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/')

        }).catch((err) =>{
            console.log(err)
            setErrMsg(err.message)
        })
    }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
        <Form className='w-25 text-center ' onSubmit={handleSubmit}>
        <span className='d-flex justify-content-center'><img className='w-100' src={Logo} alt="" srcset="" /></span>
        <h1>SignIn</h1>
        <Card className='m-1' style={{ width: '25vw' }}>
      <Form.Group className="mb-3">
        <Form.Label>Enter your Email address</Form.Label>
        <Form.Control type="email" name='email' id='name' value = {values.email} onChange={handleChange} onBlur={handleBlur}/>
        {errors.email && touched.email ?(<p style={{color:'red', fontSize:'12px'}}>{errors.email}</p>): null}
      </Form.Group>

      <Form.Group className="mb-3 ">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' id='password' value = {values.password} onChange={handleChange} onBlur={handleBlur}/>
        {errors.password && touched.password ?(<p style={{color:'red', fontSize:'12px'}}>{errors.password}</p>): null}
      </Form.Group>
      <p style={{color:'red'}}>{errMsg}</p>
      <Button onClick={handleAuth}  variant="warning" type="submit">
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

export default Login