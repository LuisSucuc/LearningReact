import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
/*Options
<h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>
        Matthew Sucuc
      </h4>
*/

import { books } from "./books.js"; //Importar variable
import Book from "./Book.js"; //Importar componente

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
