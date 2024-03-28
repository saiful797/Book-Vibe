import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import { Link } from 'react-router-dom';

const WishListBooks = ({book}) => {
    const {bookId,image,bookName,author,tags,yearOfPublishing,publisher,totalPages,category,rating} = book;
    return (
        <div className="md:flex rounded-xl shadow-xl mt-10 border border-gray-400 gap-5">
            <div className='p-5 bg-slate-100 rounded-2xl flex justify-center items-center'>
                <figure><img className='w-56 h-96 rounded-xl' src={image} alt="book"/></figure>
            </div>
            <div className="space-y-5 p-5 mt-5">
                <h2 className="text-3xl font-bold">{bookName}</h2>
                <p className='text-lg font-medium'>By: {author}</p>
                <div className='md:flex justify-center items-center gap-2 space-y-3 md:space-y-0'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-xl font-medium'>Tags:</h1>
                        {
                            tags.map(tag=><Tag key={tag} tag={tag}></Tag>)
                        }
                    </div>
                    <div className='flex'>
                        <img src="https://i.ibb.co/JCkPvcY/location.png" alt="" />
                        <p className='font-medium'>Year Of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className='lg:flex gap-5 space-y-3 md;space-y-0'>
                    <div className='flex gap-2'>
                        <img src="https://i.ibb.co/QNLQcZr/people.png" alt="location" />
                        <p className='font-medium'>Publisher:-{publisher}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src="https://i.ibb.co/h1GwMDk/page.png" alt="" />
                        <p className='font-medium'>Page: {totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-5'>
                    <button className='btn md:w-40 rounded-3xl bg-[#d9e6f6] text-[#328EFF]'>Category: {category}</button>
                    <button className='btn md:w-40 rounded-3xl bg-[#efe6d3] text-[#FFAC33]'>Rating: {rating}</button>
                    <div>
                        <Link to={`/book/:${bookId}`}>
                            <button className='btn rounded-3xl bg-[#23BE0A] text-white md:w-40'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
WishListBooks.propTypes={
    book: PropTypes.object
}
export default WishListBooks;