import React from 'react';

import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UserDetails from "./components/UserDetails";

const router = createBrowserRouter([
  {path : "/users/1" ,element: <UserDetails />}
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
