import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Features = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>setJobs(data))
    })
    return (
    <div>
        <div className="text-center">
            <h2 className="text-3xl">Featured Jobs:{jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
       <div className="grid grid-cols-2 gap-5">
       {
            jobs.slice(0,dataLength).map(job => <Job 
                job={job}
                key={job.id}></Job>)
        }
       </div>

       <div className={`text-center mt-5 mb-5 ${dataLength === jobs.length ?'hidden':''}`}>
       <button 
       onClick={()=>setDataLength(jobs.length)} className="btn btn-primary ">sell all jobs</button>
      
       </div>
       
    </div>
    );
};

export default Features;