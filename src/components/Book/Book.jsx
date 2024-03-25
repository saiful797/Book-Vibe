import PropTypes from 'prop-types';
import Tags from '../Tags/Tags';

const Book = ({book}) => {
    const {image,tags,bookName,author,category,rating}= book;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='bg-slate-300'><img className='w-[70%] h-[400px] m-5 rounded-lg' src={image} alt="Shoes" /></figure>

            <div className="card-body">
                <div className='flex gap-2'>
                    {
                        tags.map(tag => <Tags key={tag} tag={tag}></Tags>)
                    }
                </div>
                <h2 className="text-3xl font-semibold">{bookName}</h2>
                <p  className='text-xl font-medium'>By: <span>{author}</span></p>
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
    );
};

Book.propTypes ={
    book: PropTypes.object.isRequired
}

export default Book;