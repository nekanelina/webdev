import logo from "./logo.svg";
import "./App.css";
import Book from "./Book.js";
import booksData from "./booksData.js";

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {booksData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
