import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooksDetails, getStoredWishListBooks } from "../../utility/localStorage";
import ListedBooksDetails from "../ListedBooksDetails/ListedBooksDetails";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListedBooks = () => {

    const [readBooksItem, setReadBooksItem] = useState([]);
    const [wishListBooksItem, setWishListBooksItem] =useState([]);

    const [displayBooks, setDisplayBooks] = useState([]);
    const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);

    const books = useLoaderData();

    const handleBooksFilter=(filter)=>{
        if(filter==='all'){
            setDisplayBooks(readBooksItem);
            setDisplayWishlistBooks(wishListBooksItem);
        }
        else if(filter==='fiction'){
            const fictionBooks = readBooksItem.filter(book => book.category === 'Fiction');
            setDisplayBooks(fictionBooks);
            setDisplayWishlistBooks(fictionBooks);
        }
        else if(filter==='thriller'){
            const thrillerBooks = readBooksItem.filter(book => book.category === 'Thriller');
            setDisplayBooks(thrillerBooks);
            setDisplayWishlistBooks(thrillerBooks);
        }
        else if(filter==='fantasy'){
            const fantasyBooks = readBooksItem.filter(book => book.category === 'Fantasy');
            setDisplayBooks(fantasyBooks);
            setDisplayWishlistBooks(fantasyBooks);
        }
        else if(filter==='fable'){
            const fableBooks = readBooksItem.filter(book => book.category === 'Fable');
            setDisplayBooks(fableBooks);
            setDisplayWishlistBooks(fableBooks);
        }
        else if(filter==='mystery'){
            const mysteryBooks = readBooksItem.filter(book => book.category === 'Mystery');
            setDisplayBooks(mysteryBooks);
            setDisplayWishlistBooks(mysteryBooks);
        }
    }

    useEffect(()=>{
        const storedBookId = getStoredReadBooksDetails();
        const storedWishListBookId = getStoredWishListBooks();
        if(books.length > 0){
            const booksReads = books.filter(book => storedBookId.includes(book.bookId));

            setReadBooksItem(booksReads);
            setDisplayBooks(booksReads);
        }
        if(books.length > 0){
            const booksWishes = books.filter(book => storedWishListBookId.includes(book.bookId));

            setWishListBooksItem(booksWishes);
            setDisplayWishlistBooks(booksWishes);
        }
    },[books])

    return (
        <div className="mt-10">
            <div className="rounded-2xl w-full h-32 pt-1 bg-slate-100 flex justify-center items-center">
                <p className="text-6xl font-bold">Books</p>
            </div>
            <div className="text-center mt-5 mb-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 text-lg text-white w-40 bg-[#23BE0A]">Sort By <img src="https://i.ibb.co/DVg10S3/angle.png" alt="" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleBooksFilter('all')}><a>All</a></li>
                        <li onClick={()=>handleBooksFilter('fiction')}><a>Fiction</a></li>
                        <li onClick={()=>handleBooksFilter('thriller')}><a>Thriller</a></li>
                        <li onClick={()=>handleBooksFilter('fantasy')}><a>Fantasy</a></li>
                        <li onClick={()=>handleBooksFilter('fable')}><a>Fable</a></li>
                        <li onClick={()=>handleBooksFilter('mystery')}><a>mystery</a></li>
                    </ul>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lifted tabs-lg">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        displayBooks.map(book => <ListedBooksDetails key={book.bookId}  book={book}></ListedBooksDetails>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                       displayWishlistBooks.map(book => <WishListBooks key={book.bookId} book={book}></WishListBooks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;