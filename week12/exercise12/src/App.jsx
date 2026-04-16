
import './css/app.css'
import BookCard from './components/BookCard';
import Footer from './components/Footer';
import { books } from './data/bookData';

function App() {
  return (
    <div>
      <h2>Favorite Reads</h2>
      {books.map((books)=> (
      <BookCard key= {books.id} title= {books.title} content={books.description} author={books.author} bookArt={books.bookArt}/>
      ))}
      <Footer />
    </div>
  );
}
export default App;
