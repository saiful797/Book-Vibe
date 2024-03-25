import PropTypes from 'prop-types';

const Tags = ({tag}) => {
    return (
        <div>
            <button className="btn bg-[#f0f7ef] text-[#23BE0A] rounded-3xl w-28">{tag}</button>
        </div>
    );
};
Tags.propTypes ={
    tag: PropTypes.string.isRequired
}
export default Tags;