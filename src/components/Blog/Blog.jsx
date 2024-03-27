import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {image,bookName,reviews} = blog;
    return (
        <div className="card card-side shadow-xl mt-10 border border-gray-400 gap-5">
            <div className='p-5 bg-slate-100 rounded-2xl'>
                <figure><img className='w-36 h-56 rounded-xl' src={image} alt="book"/></figure>
            </div>
            <div className="space-y-5 p-5 mt-5">
                <h2 className="text-3xl font-bold">{bookName}</h2>
                <hr />
                <p>{reviews}</p>
                <button className='btn bg-green-200'>Read More...</button>
            </div>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;