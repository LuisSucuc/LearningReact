import React from "react";
import ReactDom from "react-dom";

/*
function Greeting() {
  return (
    <React.Fragment>
      <div className="my-class">
        <h3>Hello world</h3>
        <ul>
          <li>
            <a href="#">Hi</a>
          </li>
          <img src="" alt="" />
          <input type="text" />
        </ul>
      </div>
    </React.Fragment>
  );
}*/

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Luis Sucuc</h2>;
const Message = () => {
  return <p>Message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
