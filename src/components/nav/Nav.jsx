import { useEffect, useState } from 'react';
import './Nav.css'

const Nav = ({loggedIn, setLoggedIn}) => {

  const [item, setItem] = useState("");

  useEffect(() => {
    setItem(localStorage.getItem("token"));
    if (item)
      setLoggedIn(true);
    else
      setLoggedIn(false);
  }, [item, setLoggedIn])

  function logout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  return (
      <nav className="nav-links">
        {
          loggedIn == true ?
          <a href="/user">User</a>
          : null
        }
        {
          loggedIn == true ?
          <a href="/airport">airport</a>
          : null
        }
                {
          loggedIn == true ?
          <a href="/flight">flight</a>
          : null
        }
        {
          loggedIn == true ?
          <a onClick={logout} href="/" className='split'>Logout</a>
          : null
        }
        {
          loggedIn !== true ?
          <a href="/signin" className='split'>Signin</a>
          : null
        }
        {
          loggedIn !== true ?
          <a href="/signup" className='split'>Signup</a>
          : null
        }
        <a href="/">Home</a>
    </nav>
  );
};

export default Nav;