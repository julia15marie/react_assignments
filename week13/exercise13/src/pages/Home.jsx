import { books } from "../data/bookData.js";
import BookCard from "../components/BookCard.jsx";

function Home() {
    return (
    <div className="page-grid">
        <div className="book-grid">
      {books.map((books)=> (
        <BookCard key= {books.id} title= {books.title} content={books.description} author={books.author} bookArt={books.bookArt}/>
      ))}
        </div>
    </div>
    );
}

export default Home;