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
            <p className="text-3xl md:text-6xl text-center font-bold">Books</p>
            <hr />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 place-content-center">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;