import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import { Link } from 'react-router-dom';

const ListedBooksDetails = ({book}) => {
    const {bookId,image,bookName,author,tags,yearOfPublishing,publisher,totalPages,category,rating} = book;
    return (

        <div className='md:flex shadow-xl w-full border border-green-500 rounded-2xl mt-10'>
            <div className='w-full md:w-96 bg-slate-200 flex justify-center items-center p-5 rounded-2xl'>
                <img className='w-60 h-full' src={image} alt="" />
            </div>
            <div className='w-full p-5 space-y-2 rounded-xl'>
                <h1 className="text-3xl font-bold">{bookName}</h1>
                <h3 className='text-lg font-medium'>By: {author}</h3>
                <hr />
                <h5 className='text-lg font-medium'>{category}</h5>
                <hr />
                <div className='md:flex items-center gap-2'>
                    <div className='flex items-center space-x-2'>
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
                <div className='flex gap-5'>
                    <div className='flex gap-2'>
                        <img src="https://i.ibb.co/QNLQcZr/people.png" alt="location" />
                        <p className='font-medium'>Publisher: {publisher}</p>
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
ListedBooksDetails.propTypes={
    book: PropTypes.object
}
export default ListedBooksDetails;

/**
 * <div className="rounded-2xl shadow-xl mt-10 border border-gray-400 grid grid-cols-2">
            <div className='p-5 bg-slate-100 rounded-l-2xl md:w-64 border border-red-300'>
                <figure><img className='w-56 h-96 rounded-xl' src={image} alt="book"/></figure>
            </div>
            <div className="space-y-5 p-5 border border-gray-800">
                <h2 className="text-3xl font-bold">{bookName}</h2>
                <p className='text-lg font-medium'>By: {author}</p>
                <div className='md:flex justify-center items-center gap-2'>
                    <div className='flex items-center space-x-2'>
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
                <div className='flex gap-5'>
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
 */
