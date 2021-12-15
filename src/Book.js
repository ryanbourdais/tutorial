import React from "react";

const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  alert("Added to cart");
};

const complexHandler = (title, author) => {
  alert("Added to Cart:\n'" + title + "'\nby: " + author);
};

/*
can be written as:
const Book = ({props}) => {
  return (
    <article className="book">
      <img style={{ height: 200, width: 300 }} src={props.img} alt="" />
      <h1>{props.title}</h1>
      {props.children}
      <h4>{props.author}</h4>
    </article>
  );
}
*/

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img style={{ height: 200, width: 300 }} src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{children}</p>
      <button type="button" onClick={clickHandler}>
        Add to Cart
      </button>
      <button type="button" onClick={() => complexHandler(title, author)}>
        Complex Add to Cart
      </button>
    </article>
  );
};

export default Book;
