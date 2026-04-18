import { site } from '@/lib/siteContent'

export default function JoinPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <h1>Join</h1>
        <div className="card">
          <p>{site.sections.join}</p>
          <p className="codebox">Placeholder: connect your email form or waitlist tool here in the next pack.</p>
        </div>
      </div>
    </main>
  )
}
