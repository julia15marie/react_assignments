import { useState } from "react";

function BookCard({ title, author, content, bookArt }) {
  const [isRead, setIsRead] = useState(false);
  
  function toggleReadStatus(){
    setIsRead((prevState) => !prevState);
}
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <img src={bookArt}/>
      <p>{author}</p>
      <p>{content}</p>
      

      <button onClick={toggleReadStatus}>
        {isRead ? "Mark as unread" : "Mark as read"}
      </button>
      <p>Status: {isRead ? "Read" : "Not Read"}</p>
    </div>
  );
}
export default BookCard;
