
import './App.css'
import Nav from './components/nav/Nav'
import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './components/home/Home'
import SignUp from './components/signup/Signup'
import SignIn from './components/signin/Signin'
import AirportComponent from './components/airport/AirportComponent'
import UpdateComponent from './components/airport/UpdateComponent'

function App() {

  const [loggedIn, setLoggedIn] = useState (false);

  const router = createBrowserRouter ([
    {
      path: "/", 
      element: <Home />
    },
    {
      path: "signup",
      element: <SignUp />
    },
    {
      path: "signin",
      element: <SignIn loggedIn={loggedIn} setLoggedIn={() => setLoggedIn(true)}/>
    },
    {
      path: "airport",
      element: <AirportComponent/>
    },
    {
      path: "airport/:airportId",
      element: <UpdateComponent/>
    }
  ]);

  return (
    <>
      <div>
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Nav>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
