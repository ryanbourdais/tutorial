import React from "react";
import { books } from "./books";
import Book from "./Book";

export function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
