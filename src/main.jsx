import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AddProducts from './components/add_products/AddProducts.jsx';
import UpdateProducts from './components/update_products/UpdateProducts.jsx';
import Root from './Layout/root/Root';
import Home from './Layout/home/Home';
import Errorpage from './Layout/Errorpage/Errorpage';
import ViewServices from './Layout/viewServices/ViewServices';
import AuthProvider from './Layout/auth/AuthProvider';
import Login from './Layout/login/Login';
import Register from './Layout/register/Register';
import PrivateRoute from './Layout/auth/PrivateRoute';
import Blogs from './Layout/blogs/Blogs';
import About from './Layout/about/About';
import FAQ from './Layout/faq/FAQ';
import AllServices from './Layout/allServices/AllServices';
import ProductInfo from './components/ProductInfo';
import AddToCart from './components/AddToCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,


      },
      {
        path: '/service/:brandName',
        element: (
          <PrivateRoute>
            <ViewServices></ViewServices>,
            {/* <AddProducts></AddProducts> */}

          </PrivateRoute>


        ),
        loader: () => fetch('../Brand.json'),
        loader: () =>  fetch('https://gadgetshub-hp4ccu54a-bijoys-projects.vercel.app/products')

      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,
      },
      {
        path: 'addProducts',
        element:(
        <PrivateRoute>
<AddProducts></AddProducts>
        </PrivateRoute> 
        )
      },
      {
       path: 'productinfo/:id',

        element:
        <PrivateRoute>
        <ProductInfo></ProductInfo>
        </PrivateRoute>,
                // loader:({params})=>fetch(`https://gadgetshub-hp4ccu54a-bijoys-projects.vercel.app/products/${services._id}`)
                loader: () => fetch('https://gadgetshub-hp4ccu54a-bijoys-projects.vercel.app/products')


      },
      {
        path: 'updateproducts/:id',
        element:
        <PrivateRoute>
        <UpdateProducts></UpdateProducts>
        </PrivateRoute>,
         loader: () => fetch('https://gadgetshub-hp4ccu54a-bijoys-projects.vercel.app/products')
        // loader:({params})=> fetch(`https://gadgetshub-hp4ccu54a-bijoys-projects.vercel.app/products/${params.id}`)
      },
      // {
      //   path: '/updateProducts/:id', // Added a missing slash before 'updateProducts'
      //   element: <UpdateProducts></UpdateProducts>,
      //   loader: ({ params }) => fetch(`https://gadgetshub-hp4ccu54a-bijoys-projects.vercel.app/products/${params.id}`)
      // },

      // }, {
      //   path: 'allservices',
      //   element: <AllServices></AllServices>,
      //   loader: () =>  fetch('https://gadgetshub-hp4ccu54a-bijoys-projects.vercel.app/products')

{
  path:'addtocart/:id',
  element:
  <PrivateRoute>
    <AddToCart></AddToCart>
  </PrivateRoute>,
           loader: () => fetch('https://gadgetshub-hp4ccu54a-bijoys-projects.vercel.app/products')

}

      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
    document.getElementById('root')

);