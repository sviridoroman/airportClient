import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import cl from "./Signin.module.css";

const SignIn = ({loggedIn, setLoggedIn}) => {

  const emailInput = useId();
  const passwordInput = useId();

  const [state, setState] = useState({
    email:"",
    password:""
  });
  const navigate = useNavigate();

  const handle = async(e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/api/v1/auth/authenticate`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {"Content-Type": "application/json"}
    })
    if (res.ok) {
      const json = await res.text();
      localStorage.setItem("token", json.slice(10,-2));
      navigate("/");
      setLoggedIn(true); 
    } 
  }

  const extract = (e) => {
    const copy = {...state};
    copy[e.target.name] = e.target.value;
    setState(copy);
  }

  return (
      <div className={cl.form}>
          <form className={cl.signin_form} onSubmit={handle}>
            <div className={cl.form_item}>
              <h1>Sign in</h1>
            </div>
            <div className={cl.form_item}>
              <div className={cl.form_input}>
                <label htmlFor={emailInput}>Email </label>
                <input type="text" id={emailInput} name="email" placeholder="email" value={state.email} onChange={extract} autoComplete="off" />
              </div>
              <div className={cl.form_input}>
                <label htmlFor={passwordInput}>Password </label>
                <input type="password" id={passwordInput} name="password" placeholder="password" value={state.password} onChange={extract} />
              </div>
            </div>
            <div className={cl.form_item}>
              <button className={cl.signin_button} type="submit">Sign In</button>
            </div>  
          </form>
      </div>
  )
}

export default SignIn;