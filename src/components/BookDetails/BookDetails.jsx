import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooksDetails, saveWishListBooks } from "../../utility/localStorage";
import Tag from "../Tag/Tag";

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idNum = id.charAt(1);
    const idInt = parseInt(idNum);

    const book = books.find(book => book.bookId === idInt);

    const {image,bookName,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;

    const handleBooksRead = () =>{
        const id1 = saveReadBooksDetails(idInt);
        if(id1 === idInt){
            toast.error('Already Exist', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else{
            toast.success('Added Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
                
            });
        }
    }

    const handleWishListBook = () =>{
        const id2 = saveWishListBooks(idInt);

        if(id2 === idInt){
            toast.error('Already Exist', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else{
            toast.success('Added Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
                
            });
        }
    }

    return ( 
        <div className="flex justify-around mt-10 gap-5 h-screen">
            <div className="w-1/2 p-5 bg-slate-100 rounded-xl flex justify-center items-center">
                <img className="h-full" src={image} alt="" />
            </div>
            <div className="w-1/2 h-full space-y-3">
                <h1 className="text-3xl font-bold">{bookName}</h1>
                <h4 className="text-xl font-medium">By: {author}</h4>
                <hr />
                <p className="text-base font-medium">{category}</p>
                <hr />
                <p><span className="text-xl font-bold">Review: </span>{review}</p>
                <div className="flex items-center gap-3">
                    <p className="text-xl font-medium">Tags: </p>
                    <div className="flex gap-5">
                        {
                            tags.map(tag => <Tag key={tag} tag={tag}></Tag>)
                        }
                    </div>
                </div>
                <hr />
                <div className="flex gap-5">
                    <p>Number of Pages:</p>
                    <p className="font-medium">{totalPages}</p>
                </div>
                <div className="flex gap-5">
                    <p>Publisher:</p>
                    <p className="font-medium">{publisher}</p>
                </div>
                <div className="flex gap-5">
                    <p>Year of publishing:</p>
                    <p className="font-medium">{yearOfPublishing}</p>
                </div>
                <div className="flex gap-5">
                    <p>Rating:</p>
                    <p className="font-medium">{rating}</p>
                </div>
                
                <div className="flex gap-3">
                    <button onClick={handleBooksRead} className="btn bg-white border border-[#84d478] text-lg font-medium">Read</button>
                    <button onClick={handleWishListBook} className="btn bg-[#59C6D2] text-lg font-medium">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;