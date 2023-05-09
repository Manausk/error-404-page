import React from "react";
import "./App.css";
import Logogo from "./Logogo.png";
import side from "./side.png";
import ill404 from "./ill404.png";

function App() {
  return (
    <div className="Container">
      <nav>
        <img src={Logogo} alt="logogo" className="logo" />
        <ul>
          <li>
            <a href="https://www.merriam-webster.com/dictionary/home">Home</a>
          </li>
          <li>
            <a href="https://www.merriam-webster.com/dictionary/about">About</a>
          </li>
          <li>
            <a href="https://economictimes.indiatimes.com/definition/product">
              Products
            </a>
          </li>
          <li>
            <a href="https://blog.hubspot.com/service/best-contact-us-pages">
              Contacts
            </a>
          </li>
        </ul>
        <img src={side} alt="side" className="side" />
      </nav>
      <div className="bodySection">
        <div className="left">
          <div className="leftleft">
            <h1>Ooops..</h1>
            <h2>Page Not Found</h2>
            <p>
              The page you are looking for doesn't exist or an <br /> other
              error occurred, go back to home page
            </p>
            <button>Go Back</button>
          </div>
        </div>
        <div className="right">
          <img src={ill404} alt="ill404" className="pic" />
        </div>
      </div>
    </div>
  );
}

export default App;
