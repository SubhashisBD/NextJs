

import React from "react";
import Link from "next/link";


async function getJob(id) {
    // Always use absolute URL for server fetch
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/jobs/${id}`);
    if (!res.ok) return null;
    return res.json();
}

export default async function JobDetailPage({ params }) {
    const job = await getJob(params.id);
    if (!job) {
        return <h1 className="bg-red-400 text-white">JOB NOT FOUND</h1>;
    }
    return (
        <div className="ml-20">
            <div className="border p-4 rounded shadow mb-4 w-xl">
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.company} - {job.location}</p>
                <p className="mt-2 text-sm text-gray-500">{job.description}</p>
                <h2 className="font-semibold mt-4">Requirements</h2>
                <ul className="list-disc list-inside">
                    {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
                <Link href={`/jobs/${job.id}/apply`}>
                    <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Apply</button>
                </Link>
            </div>
        </div>
    );
}
