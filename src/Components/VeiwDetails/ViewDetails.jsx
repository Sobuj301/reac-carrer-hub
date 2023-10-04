import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoredJobApplication } from "../utility/localStored";



const ViewDetails = () => {
    

    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    
    const job = jobs.find(job =>job.id === idInt)
    console.log(job)

    const handleToastButton = () =>{
        saveStoredJobApplication(idInt)
        toast('you have applied successfully')
    }
   
    return (
        <div>
            <h2 className="text-center text-2xl">JOB DETAILS </h2>
            <div className="grid grid-cols-4 gap-8">
                <div className="border col-span-3 p-5">
                 <h2>Job Description:{job.job_description
}</h2>
                 <h2>Job Responsibility:{job.job_responsibility
}</h2>
                 <h2>Educational Requirements:</h2>
                 <p>{job.educational_requirements}</p>
                 <h2>Experiences:</h2>
                 <p>{job.experiences}</p>
                </div>
                <div className="border p-5">
                      <h2>job details:</h2>
                      <p>Salary:{job.salary}</p>
                      <p>Job Title :{job.job_title}</p>
                      <h2>Contact Information:</h2>

                      <button onClick={handleToastButton} className="btn btn-primary w-full">Apply now</button>

                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default ViewDetails;