function BookCard({ title, author, content, bookArt }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{content}</p>
      <img src={bookArt}/>
    </div>
  );
}
export default BookCard;