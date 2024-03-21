import React from 'react';

import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UserDetails from "./components/UserDetails";
import RootLayout from "./Root";
import ProductsList from "./components/Products/ProductsList";

const router = createBrowserRouter([
  {
      path : "/" ,
      element : <RootLayout />,
      children :[
          {path : "/" ,element : <ProductsList />},
          {path : "/users/1" ,element: <UserDetails />}
    ]}

])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
