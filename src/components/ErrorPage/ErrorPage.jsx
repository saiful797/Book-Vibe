import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center space-y-5 mt-56">
            <p>Oops!!! 404 Not Found</p>
            <Link className="btn bg-[#4cc03a] text-xl font-medium text-white" to="/">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;