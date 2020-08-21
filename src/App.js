import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { requestFirebaseNotificationPermission, onMessageListener } from "./firebaseInit";

function App() {
  const [token, setToken] = useState("");

  onMessageListener()
    .then((payload) => {
      console.log(payload);
      const { title, body } = payload.data;
      console.log(`${title}; ${body}`);
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });

  useEffect(() => {
    requestFirebaseNotificationPermission()
      .then((firebaseToken) => {
        // eslint-disable-next-line no-console
        console.log(firebaseToken);
        setToken(firebaseToken);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{token}</p>
      </header>
    </div>
  );
}

export default App;
