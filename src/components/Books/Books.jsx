import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
          .then(res => res.json())
          .then(data => setBooks(data))
    },[])
    return (
        <div>
            <p className="text-6xl text-center">Books</p>
            <div className="grid grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;