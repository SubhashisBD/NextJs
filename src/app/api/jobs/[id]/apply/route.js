export async function POST(request, { params }) {
    const { id } = params;
    const data = await request.json();
    // Log the submission (in real app, save to DB or send email)
    console.log("Received application for job:", id, data);
    return new Response(JSON.stringify({ success: true, message: "Application received", jobId: id }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
