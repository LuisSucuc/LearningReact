import React from "react";

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="Book" width="100%" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Example 2
      </button>
    </article>
  );
};

export default Book;
