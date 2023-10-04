import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops.....!!!</h2>
            <p>sorry,an unexpected error has occurred  </p>

            <Link to="/"><button className="bg-slate-600 text-white rounded-md px-2 py-1 mt-3"> Go Back Home Page </button></Link>
        </div>
    );
};

export default ErrorPage;