import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
/*Options
<h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>
        Matthew Sucuc
      </h4>
*/

const books = [
  {
    title: "Eloquent JavaScript",
    author: "Martin Haverbeck",
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
  {
    title: "JavaScript for Impatient Programmer",
    author: "Dr. axel Rauschmayer",
    img:
      "https://wsvincent.com/assets/images/bestjavascriptbooks/js_for_impatient_programmers.jpg",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map(({ img, title, author }) => {
        return <Book img={img} author={author} title={title} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book" width="100%" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
