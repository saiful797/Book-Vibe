import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooksDetails } from "../../utility/localStorage";

const ListedBooks = () => {

    const [readBooksItem, setReadBooksItem] = useState([]);

    const books = useLoaderData();
    useEffect(()=>{
        const storedBookId = getStoredReadBooksDetails();
        if(books.length > 0){
            const booksReads = books.filter(book => storedBookId.includes(book.bookId));

            setReadBooksItem(booksReads);
        }
    },[])

    return (
        <div>
            <div className="rounded-2xl w-full h-32 pt-1 bg-slate-100 flex justify-center items-center">
                <p className="text-6xl font-bold">Books: {readBooksItem.length}</p>
            </div>
            <div className="text-center mt-10 mb-10">
                <select className="select select-success max-w-xs bg-[#23BE0A] font-medium text-white">
                    <option selected>Sort By</option>
                    <option>One Piece</option>
                    <option>Naruto</option>
                    <option>Death Note</option>
                    <option>Attack on Titan</option>
                    <option>Bleach</option>
                    <option>Fullmetal Alchemist</option>
                </select>
            </div>
            <div className="flex gap-2">
                <div>
                    <button className="btn bg-white border-slate-400">Read Books</button>
                </div>
                <div>
                    <button className="btn bg-white border-slate-400"> Wish Books</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default ListedBooks;