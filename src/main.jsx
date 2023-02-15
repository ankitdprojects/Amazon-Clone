import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Error from './Pages/Error';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Provider } from 'react-redux';
import store from './Store/StoreIndex';
import CartContainer from './Pages/CartContainer';
import Checkout from './Pages/Checkout';
import OrderSuccess from './Pages/OrderSuccess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element:<Home />,
        errorElement:<Error />,
      },
      {
        path:'/cart',
        element: <CartContainer />,
       },
       {
        path:'/checkout',
        element: <Checkout />,
       },
       {
        path:'/success',
        element: <OrderSuccess />
       }
      
    ]},
    {
      path:'/login',
      element: <Login />,
     },
     {
      path:'/signup',
      element: <SignUp />,
     },
     
     
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
  </Provider>
)


