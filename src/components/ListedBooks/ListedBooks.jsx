import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooksDetails } from "../../utility/localStorage";
import ListedBooksDetails from "../ListedBooksDetails/ListedBooksDetails";

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
        <div className="mt-10">
            <div className="rounded-2xl w-full h-32 pt-1 bg-slate-100 flex justify-center items-center">
                <p className="text-6xl font-bold">Books</p>
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
            <div role="tablist" className="tabs tabs-lifted tabs-lg">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        readBooksItem.map(book => <ListedBooksDetails key={book.bookId}  book={book}></ListedBooksDetails>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
            </div>
        </div>
    );
};

export default ListedBooks;