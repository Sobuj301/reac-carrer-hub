import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id,logo,job_title,company_name,remote_or_onsite,job_type,salary,location } = job
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="gap-3">
                    <button className="px-3 py-1 rounded border border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button  className="px-3 py-1 rounded border border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;