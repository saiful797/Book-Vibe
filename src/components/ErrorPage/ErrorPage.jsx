import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center space-y-5 mt-56">
            <p>Oops!!! Error 404!</p>
            <p>Page Not Found!</p>
            <Link className="btn bg-[#4cc03a] text-xl font-medium text-white" to="/">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;