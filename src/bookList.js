import React from "react";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL604_SR604,400_.jpg",
  title: "Atlas of the Heart",
  author: "Brene Brown",
};
export function BookList() {
  return (
    <div className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem cupidatat amet aliquip labore reprehenderit duis id.</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </div>
  );
}

const Book = ({ img, title, author, children }) => {
  // alt method to destructure props: const { img, title, author } = props;
  return (
    <article className="book">
      <img style={{ height: 200, width: 300 }} src={img} alt="" />
      <h1>{title}</h1>
      {children}
      <h4>{author}</h4>
    </article>
  );
};
