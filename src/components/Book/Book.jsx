import PropTypes from 'prop-types';
import Tags from '../Tags/Tags';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,image,tags,bookName,author,category,rating}= book;
    return (
        <div>
            <Link to={`/book/:${bookId}/`}>
                <button >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-[#a8f29d]">
            
                        <figure className='bg-slate-300 rounded-t-xl'><img className='w-[70%] h-[400px] m-5' src={image} alt="" /></figure>

                        <div className="card-body">
                            <div className='flex gap-2'>
                                {
                                    tags.map(tag => <Tags key={tag} tag={tag}></Tags>)
                                }
                            </div>
                            <h2 className="text-left text-3xl font-semibold">{bookName}</h2>
                            <p  className='text-left text-xl font-medium'>By: <span>{author}</span></p>
                            <div className="card-actions flex justify-between">
                                <div className='font-medium'>
                                    {category}
                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-lg font-medium'>{rating}</p>
                                    <img src="https://i.ibb.co/Mgs495t/rating.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </Link>
        </div>

        
    );
};

Book.propTypes ={
    book: PropTypes.object.isRequired
}

export default Book;