import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Root/Roots';
import ErrorPage from './Components/Root/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Applied from './Components/Applied/Applied';
import ViewDetails from './Components/VeiwDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<Applied></Applied>,
        loader:()=> fetch('jobs.json')
      },
      {
        path:"/job/:id",
        element:<ViewDetails></ViewDetails>,
        loader:()=>fetch('jobs.json')
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
