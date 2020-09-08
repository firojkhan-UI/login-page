import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isActive: 0,
  });

  const _handleData = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
  };

  const _handleClickTab = tab => {
    setState({
      ...state,
      isActive: tab
    })
  }

  return (
    <div className="container">
      <div className="sub-container">
        <div className="App">
          <div className="tabs">
            <div onClick={() => _handleClickTab(0)} className={state.isActive === 0 ? 'active' : ''}>Sign Up</div>
            <div onClick={() => _handleClickTab(1)} className={state.isActive === 1 ? 'active' : ''}>Log In </div>
          </div>
          <h1 className="signinup-text">Sign Up for free</h1>
          <form onSubmit={_handleSubmit}>
            <div className="name-field">
              <input
                type="text"
                id="firstName"
                required
                placeholder="First Name *"
                value={state.firstName}
                onChange={(event) => _handleData(event)}
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={state.lastName}
                onChange={(event) => _handleData(event)}
              />
            </div>
            <input
              type="text"
              id="email"
              required
              placeholder="Email Address *"
              value={state.email}
              onChange={(event) => _handleData(event)}
            />
            <input
              type="text"
              id="password"
              required
              placeholder="Set A Passwaord"
              value={state.password}
              onChange={(event) => _handleData(event)}
            />
            <button type="submit">
              GET STARTED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
