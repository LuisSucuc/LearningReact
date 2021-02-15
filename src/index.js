import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <React.Fragment>
      <article>
        <h3>Hello world</h3>
        <ul>
          <li>
            <a href="#">Hi</a>
          </li>
        </ul>
      </article>
    </React.Fragment>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
