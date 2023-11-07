import React from "react";
import "./Book.css";

function Book({ book }) {
  return (
    <div className="book">
      <h2 className="book-title">{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Year:</strong> {book.year}
      </p>
    </div>
  );
}

export default Book;
