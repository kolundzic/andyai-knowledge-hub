import Link from 'next/link'
import { site } from '@/lib/siteContent'

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">{site.heroEyebrow}</div>
          <h1>{site.heroTitle}</h1>
          <p className="lead">{site.heroLead}</p>
          <div className="cta-row">
            <Link href="/resources" className="btn primary">Explore Resources</Link>
            <Link href="/tutorials" className="btn">Read Tutorials</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {site.pillars.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <div className="kicker">What you get</div>
            <h2>A calm learning base for practical AI work</h2>
            <ul className="list">
              <li>Written tutorials for real operator workflows</li>
              <li>PDF guides, structured notes, and reusable reference docs</li>
              <li>Visual explainers and block diagrams for complex topics</li>
              <li>A stable content base that can later evolve into video</li>
            </ul>
          </div>
          <div className="card">
            <div className="kicker">Who this is for</div>
            <h2>Beginners, creators, and small teams</h2>
            <p>
              This hub is for people who want to use AI clearly and productively without drowning in hype, scattered prompts, or tool confusion.
            </p>
            <div className="cta-row">
              <Link href="/about" className="btn">About the Hub</Link>
              <Link href="/join" className="btn primary">Join Early</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
