import React, { useState } from 'react';
import './Signin.module.css';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Signin = () => {


  return (
    <div>
      test
        <div>
          <label>Login ID</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password"  />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <button type="submit">Login</button>
    </div>
  );
};

export default Signin;
