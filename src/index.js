import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
/*Options
<h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>
        Matthew Sucuc
      </h4>
*/

const books = {
  title: "Hola",
  author: "man",
  img: "https://eloquentjavascript.net/img/cover.jpg",
};

function BookList() {
  return (
    <section className="bookList">
      <Book img={books.img} author={books.author} title={books.title}>
        <p>Lorem ipsum dolor sit amet</p>
      </Book>
      <Book img={books.img} author={books.author} title={books.title}>
        <p>Lorem ipsum dolor sit amet</p>
      </Book>
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  //const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book" width="100%" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
