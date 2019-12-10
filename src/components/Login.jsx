import React from 'react';

function Validate() {
  this.state = {email: " ", password: " "};

  value = {this.state.email},
  value = {this.state.password}
}

function Login() {
    return (
      <div>
        <input type = "email" value= {email}> Email </input>
        <input type = "password" value = {password}> Password </input>
        <button> Enviar </button>
      </div>
    );
  }

export default Login;
