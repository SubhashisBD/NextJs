import { jobs } from "../../../../data/jobs";

export async function GET(request, { params }) {
    const { id } = params;
    const job = jobs.find((j) => j.id.toString() === id);
    if (!job) {
        return new Response(JSON.stringify({ error: "Job not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(job), { status: 200 });
}
