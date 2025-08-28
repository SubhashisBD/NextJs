
'use client';
import React, { useState } from "react";

export default function ApplyPage({ params }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [jobId, setJobId] = useState(params.id || "");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/jobs/${params.id}/apply`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, location, jobId: params.id }),
        });
        const data = await res.json();
        setResult(data);
        setMessage("");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
            <h1 className="text-xl font-bold mb-4">Apply for Job ID: {params.id}</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    className="border p-2 rounded"
                    type="text"
                    placeholder="Job ID"
                    value={jobId}
                    onChange={e => setJobId(e.target.value)}
                    name="jobId"
                    required
                />
                <input
                    className="border p-2 rounded"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    className="border p-2 rounded"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    className="border p-2 rounded"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    required
                />
                <button className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700" type="submit">
                    Submit Application
                </button>
            </form>
            {result && (
                <div className="mt-4 text-green-600 font-semibold">{result.message}</div>
            )}
        </div>
    );
}



