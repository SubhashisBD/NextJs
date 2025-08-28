import { jobs } from "@/data/jobs"

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title")?.toLowerCase() || ""
  const location = searchParams.get("location")?.toLowerCase() || ""

  const filtered = jobs.filter((job) => {
    const matchesTitle = title ? job.title.toLowerCase().includes(title) : true
    const matchesLocation = location ? job.location.toLowerCase().includes(location) : true
    return matchesTitle && matchesLocation
  })

  return new Response(JSON.stringify(filtered), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
