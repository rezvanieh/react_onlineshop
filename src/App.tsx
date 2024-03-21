import React from 'react';

import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UserDetails from "./components/UserDetails";
import RootLayout from "./Root";

const router = createBrowserRouter([
  {
      path : "/" ,
      element : <RootLayout />,
      children :[
      {path : "/users/1" ,element: <UserDetails />}
    ]}

])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
