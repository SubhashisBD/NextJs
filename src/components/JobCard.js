import React from 'react'
import Link from "next/link"

const JobCard = ({ job }) => {
    return (
        <div className="flex items-center justify-center mt-4">
            <div className="border border-gray-300 rounded-2xl shadow-2xl w-2xl p-4">
                <h1 className="text-xl">{job.title}</h1>
                <div className="flex gap-2">
                    <p>{job.company}</p>
                    <p>.</p>
                    <p>{job.location}</p>
                </div>
                <Link href={`/jobs/${job.id}`}>
                    <button className="bg-blue-500 px-3 py-1 rounded cursor-pointer">Details</button>
                </Link>

            </div>
        </div>
    )
}

export default JobCard
