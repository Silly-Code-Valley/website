import { readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  // If TEAM_JSON env var is set (use this on Vercel), return it directly
  if (process.env.TEAM_JSON) {
    return new Response(process.env.TEAM_JSON, {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Otherwise, fall back to the local public/data/team.json file (development)
  try {
    const file = path.join(process.cwd(), 'public', 'data', 'team.json')
    const content = await readFile(file, 'utf8')
    return new Response(content, { headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'team data not found' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
