import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { auth } from '../Config/Config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../Store/CartSlice.jsx";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [authUser,setAuthUser] = useState(null);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
    navigate('/cart')
  }
  useEffect(() => {
      const listen = onAuthStateChanged(auth,(user)=>{
          if(user){
              setAuthUser(user)
          }else{
              setAuthUser(null)
          }
      })
      return() => {
        listen();
      }
  }, []);
  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log('Logout Successfull')
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
    <Navbar className="text-white" sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Container fluid>
    <div className="d-flex align-items-center">
      <Navbar.Brand><Link to='/'><img src={Logo} width='100vh' alt="" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </div>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link to="/" style={{ textDecoration: 'none' }}>
    <Nav.Link href="#home"><span className='text-white'  ><LocationOnIcon /> </span><span className='text-white'> Hello</span><br /><span className='text-white fs-6'>Select Your Address</span>
    </Nav.Link>
    </Link>  
    <Nav.Link href="#home">
    <NavDropdown className='text-white bg-black nav-dropdown' title="All" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
    </Nav.Link>
    <Nav.Link>
    <div className='search'>
      <input type="search"
            placeholder='Search Here'
      />
      <SearchIcon className='search-icon' fontSize='large'/>
      </div>
    </Nav.Link>
    <Nav.Link href="#home"><span className='text-white'> Hello,
    {authUser ?(<><p style={{fontSize:'12px'}}>{`${authUser.email}`
     }</p>
     <p  onClick={userSignOut}>SignOut</p></>
     ) : (
      <>
      <p ><Link style={{color:'white',textDecoration:'none'}} to='/login'>SignIn</Link>/
      <Link to='/signup' style={{color:'white',textDecoration:'none'}}>SignUp</Link>
      </p>
      </>) }</span>
    </Nav.Link>
    <Nav.Link href="#home">
    <div style={{margin:'10px'}} onClick={showCart}>
    {quantity}
    <ShoppingCartIcon className='text-white'/>
    <span className='text-white'>Cart</span>
    </div>
    </Nav.Link>
          </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  );
}

export default Header;