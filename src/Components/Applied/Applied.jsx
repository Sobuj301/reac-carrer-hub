import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobStoredApplication } from "../utility/localStored";

const Applied = () => {

    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }


    useEffect(() => {
        const storedJobApplication = getJobStoredApplication()
        const jobApplied = jobs.filter(job => storedJobApplication.includes(job.id))
        setAppliedJobs(jobApplied)
        setDisplayJobs(jobApplied)


    }, [])
    return (
        <div>
            <h2>jobs i applied:{appliedJobs.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>all</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}{job.location} :{job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Applied;