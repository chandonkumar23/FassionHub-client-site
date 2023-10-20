import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-3xl flex justify-center mx-auto font-extrabold"> No Data Found!</h1>
            <button  className="btn flex justify-center mx-auto"><Link to={'/'}>Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;