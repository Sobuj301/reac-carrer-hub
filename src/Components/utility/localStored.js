const getJobStoredApplication = () =>{
    const storeApplication = localStorage.getItem('job-application');
   if(storeApplication){
    return JSON.parse(storeApplication)
   }
   return []
}


const saveStoredJobApplication = (id) =>{
    const jobApplications = getJobStoredApplication();
    const exists = jobApplications.find(jobId => jobId === id)
    if(!exists){
        jobApplications.push(id);
        localStorage.setItem('job-application',JSON.stringify(jobApplications))
    }
}
export {getJobStoredApplication, saveStoredJobApplication}