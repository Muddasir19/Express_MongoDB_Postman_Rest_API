import { useState, } from "react";
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
    
  });

  const { email, password, } = formData;

  const onChange = (e) => {
    setFormData((prevState) => (
      {
        ...prevState,
        [e.target.name] : e.target.value,
      }
    ))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section>
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Please enter email & password below!!!</p>
      </section>

      <section>

        <form onSubmit={onSubmit}>

          
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="eamil"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div  className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>

        </form>
      </section>
    </>
  );
}

export default Login;
