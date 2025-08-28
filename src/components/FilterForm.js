'use client'
import React, { useEffect, useState } from 'react'
import JobCard from "./JobCard"
import { useRouter, useSearchParams } from "next/navigation"

const FilterForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("");
    const [filteredjobs, setFilteredJobs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchJobs = async () => {
            setLoading(true)
            const titleParam = searchParams.get("title") || "";
            const locationParam = searchParams.get("location") || "";

            setTitle(titleParam);
            setLocation(locationParam);

            const res = await fetch(`/api/jobs?title=${titleParam}&location=${locationParam}`)
            const data = await res.json();
            setFilteredJobs(data)
            setLoading(false)
        }
        fetchJobs();
    }, [searchParams])

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/?title=${title}&location=${location}`)

    }

    const resetHandler = (e) => {
        e.preventDefault();
        setTitle("");
        setLocation("");
        // setFilteredJobs(jobs);
        router.push("/")
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="flex gap-4 items-center">
                    <input type="text" placeholder="job title" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-amber-50 px-3 py-1" />
                    <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="border border-amber-50 px-3 py-1" />
                    <button type="submit" className="border border-gray-300 rounded px-3 py-1 cursor-pointer">Submit</button>
                    <button className="border border-gray-300 rounded px-3 py-1 cursor-pointer" onClick={resetHandler}>Reset</button>
                </form>
            </div>
            <div className="grid gap-4">

                {loading ? (<h1>Loading Jobs....</h1>)
                    :
                    (filteredjobs.length > 0 ? (
                        filteredjobs.map(job => <JobCard key={job.id} job={job} />)
                    ) : (
                        <p className="text-gray-600">No jobs found.</p>
                    ))}

            </div>
        </>

    )
}

export default FilterForm
