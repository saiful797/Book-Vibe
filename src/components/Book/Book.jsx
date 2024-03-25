import PropTypes from 'prop-types';

const Book = ({book}) => {
    const {image}= book;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-[400px] m-5 rounded-lg' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Book.propTypes ={
    book: PropTypes.object.isRequired
}

export default Book;