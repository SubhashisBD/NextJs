import React from 'react'
import JobCard from "./JobCard"
import { jobs } from "@/data/jobs"

const MainPage = () => {
    return (
        <div>
            
            {jobs.map((job) => <JobCard key={job.id} job= {job}/>)}
        </div>
    )
}
export default MainPage
