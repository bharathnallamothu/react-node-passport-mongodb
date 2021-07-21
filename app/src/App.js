import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contacts from './components/Contacts'
import queryString from "query-string";

class App extends Component {

  state = {
    contacts: []
  };
  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
    }
    console.log(">>>>", query)

    fetch('http://localhost:4500/contacts')
      .then(res => res.json())
      .then((data) => {
        // setContacts(data)
        this.setState({ contacts: data })
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="http://localhost:4500/auth/google" className="button">
          <div>
            <span className="svgIcon t-popup-svg">
              <svg
                className="svgIcon-use"
                width="25"
                height="37"
                viewBox="0 0 25 25"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                    fill="#EA4335"
                  />
                </g>
              </svg>
            </span>
            <span className="button-label">Sign in with Google</span>
          </div>
        </a>
        <a href="http://localhost:4500/auth/facebook" className="button">
          <div>
            <span className="svgIcon t-popup-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
            </span>
            <span className="button-label">Sign in with facebook</span>
          </div>
        </a>

        <a href="http://localhost:4500/auth/linkedin" className="button">
          <div>
            <span className="svgIcon t-popup-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></span>
            <span className="button-label">Sign in with linkedIn</span>
          </div>
        </a>
        <div>
          <center><h1>Contact List</h1></center>
          {this.state.contacts && this.state.contacts.length > 0 ?
            <div>
              {this.state.contacts.map((contact) => (
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{contact.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                    <p class="card-text">{contact.token}</p>
                  </div>
                </div>
              ))}
            </div> : <div>no data</div>}
        </div>
      </div>
    );
  }
}

export default App;
