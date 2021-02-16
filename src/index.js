import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://eloquentjavascript.net/img/cover.jpg"
    alt="Book"
    width="100%"
  />
);

const Title = () => <h1>Title</h1>;

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>
    Matthew Sucuc
  </h4>
);

ReactDom.render(<BookList />, document.getElementById("root"));
