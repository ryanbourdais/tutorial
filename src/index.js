import React from "react";
import ReactDOM from "react-dom";
import { BookList } from "./bookList";
import "./index.css";

const Footer = () => {
  return (
    <div>
      <p>This project created by Ryan Bourdais</p>
    </div>
  );
};

function Index() {
  return (
    <>
      <div>
        <h1 style={{ marginLeft: 20 }}>Howdy!</h1>
        <ol>
          <li>My Name is Ryan</li>
          <li>I am a react developer</li>
          <li>I am working on a tutorial to get certified</li>
        </ol>
      </div>
      <div style={{ marginLeft: 20 }}>
        <h1>Hello Marie!</h1>
        <a href="https://www.youtube.com/watch?v=iik25wqIuFo">Get Ricked</a>
      </div>
      <div style={{ marginLeft: 20 }}>
        <BookList />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </>
  );
}

// const Index2 = () => {
//     return React.createElement('h1', {}, 'Hello Marie');
// };

ReactDOM.render(
  <div>
    <Index />
  </div>,
  document.getElementById("root")
);
