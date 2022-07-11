import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            codingGosia
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/codingGosia"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
          {""} on Github and hosted on{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
