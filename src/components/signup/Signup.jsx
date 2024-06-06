import { useState } from "react";
import cl from "./Signup.module.css";
import ButtonSubmit from "../button/buttonSubmit/ButtonSubmit";
const SignUp = () => {

  const [state, setState] = useState({
    firstName: "",
    lastName:"",
    email:"",
    password:""
  })

  const handle = async() => {
    const res = await fetch(`http://localhost:8080/api/v1/auth/register`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {"Content-Type": "application/json"}
    })
    if (res.ok) {
      alert("Ok");
    }
  }

  const extract = (e) => {
    const copy = {...state};
    copy[e.target.name] = e.target.value;
    setState(copy);
  }

  return (
    <div className={cl.form}>
      <form onSubmit={handle} className={cl.SignUpForm}>
        <div className={cl.form_item}>
          <h1>Sign up</h1>
        </div>
        <div className={cl.form_item}>
          <div className={cl.form_input}>
            <input type="text" name="firstName" placeholder="firstname" value={state.firstName} onChange={extract} autoComplete="off" />
          </div>
          <div className={cl.form_input}>
            <input type="text" name="lastName" placeholder="lastname" value={state.lastName} onChange={extract} autoComplete="off" />
          </div>
          <div className={cl.form_input}>
            <input type="text" name="email" placeholder="email" value={state.email} onChange={extract} autoComplete="off" />
          </div>
          <div className={cl.form_input}>
            <input type="password" name="password" placeholder="password" value={state.password} onChange={extract} />
          </div>
        </div>
        <div className={cl.form_item}>
          <ButtonSubmit>Sing up</ButtonSubmit>
        </div>
      </form>
    </div>
  )
}
export default SignUp;