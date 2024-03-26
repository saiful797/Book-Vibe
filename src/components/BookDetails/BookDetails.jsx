import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idNum = id.charAt(1);
    const idInt = parseInt(idNum);

    const book = books.find(book => book.bookId === idInt);

    const {image,bookName,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;
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
                    <button className="btn text-[#23BE0A] rounded-3xl">#{tags[0]}</button>
                    <button className="btn text-[#23BE0A] rounded-3xl">#{tags[1]}</button>
                    <button className="btn text-[#23BE0A] rounded-3xl">#{tags[2]}</button>
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
                    <button className="btn bg-white border border-[#84d478] text-lg font-medium">Read</button>
                    <button className="btn bg-[#59C6D2] text-lg font-medium">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;