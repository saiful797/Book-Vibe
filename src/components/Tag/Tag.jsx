import PropTypes from 'prop-types';

const Tag = ({tag}) => {
    return (
        <div>
            <button className="md:w-40 btn bg-[#f0f7ef] text-[#23BE0A] rounded-3xl flex">#{tag}</button>
        </div>
    );
};
Tag.propTypes ={
    tag: PropTypes.string.isRequired
}
export default Tag;