import Link from 'next/link'
import { featured, resources, tutorials, visuals } from '@/lib/library'
import { site } from '@/lib/siteContent'

const proofPoints = [
  'Curated tutorials, references, and visual explainers',
  'Written-first structure built for repeatable learning',
  'Calm editorial rhythm instead of noisy AI hype',
]

const galleryCards = [
  {
    title: 'Tutorial lane',
    text: 'Operational guides that turn AI from vague interest into a usable work method.',
    href: '/tutorials',
    label: 'Workflow',
    image: '/assets/gallery/tutorial-lane-card.svg',
  },
  {
    title: 'Resource lane',
    text: 'Stable guides, PDF-oriented references, and documentation worth returning to.',
    href: '/resources',
    label: 'Reference',
    image: '/assets/gallery/resource-lane-card.svg',
  },
  {
    title: 'Visual lane',
    text: 'Diagrams and visual notes that make complex systems easier to explain and remember.',
    href: '/resources',
    label: 'Visual clarity',
    image: '/assets/gallery/visual-lane-card.svg',
  },
]

const credibilityMetrics = [
  { value: 'Live', text: 'Public Vercel deployment already in place' },
  { value: '3 lanes', text: 'Tutorials · Resources · Visuals' },
  { value: '8 entries', text: 'Starter content already seeded into the hub' },
  { value: 'Mobile-ready', text: 'Calm reading rhythm that still holds on smaller screens' },
]

export default function HomePage() {
  return (
    <>
      <section className="hero prestige-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{site.heroEyebrow}</p>
            <h1>{site.heroTitle}</h1>
            <p className="lead">{site.heroLead}</p>
            <div className="cta-row">
              <Link className="btn primary" href="/resources">
                Explore Resources
              </Link>
              <Link className="btn" href="/tutorials">
                Read Tutorials
              </Link>
            </div>
            <p className="hero-note">Built as a practical AI learning base — not a hype feed.</p>
          </div>

          <aside className="hero-panel card">
            <p className="kicker">Prestige snapshot</p>
            <h3>Signal-first editorial learning base</h3>
            <p>
              A public-facing AI hub for tutorials, PDF-oriented resources, diagrams, and reusable notes —
              designed to feel readable, stable, and worth revisiting.
            </p>
            <div className="proof-stack">
              {proofPoints.map((point) => (
                <div key={point} className="proof-chip">
                  <span className="proof-dot" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section credibility-band-section">
        <div className="container credibility-band card">
          <div>
            <p className="kicker">Credibility band</p>
            <h2>Already live, already structured, already growing into a real public knowledge product</h2>
          </div>
          <div className="credibility-metrics">
            {credibilityMetrics.map((item) => (
              <div key={item.value} className="credibility-pill">
                <strong>{item.value}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase-strip-section">
        <div className="container">
          <div className="section-head compact-head">
            <div>
              <p className="kicker">Homepage showcase</p>
              <h2>A cleaner front page with stronger public presence</h2>
            </div>
            <p className="section-intro compact-copy">
              This strip gives the homepage a more editorial rhythm: three clearly defined lanes, one calm visual
              system, and a stronger sense that the hub is already alive.
            </p>
          </div>

          <div className="showcase-strip image-strip">
            {galleryCards.map((item) => (
              <Link key={item.title} href={item.href} className="showcase-card card image-showcase-card">
                <div className="showcase-image-wrap">
                  <img src={item.image} alt={item.title} className="showcase-image" />
                </div>
                <p className="showcase-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="showcase-link">Open lane →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section screenshot-strip-section">
        <div className="container">
          <div className="section-head compact-head">
            <div>
              <p className="kicker">Screenshot / gallery layer</p>
              <h2>Visual placeholders that already behave like a public showcase system</h2>
            </div>
            <p className="section-intro compact-copy">
              Until custom screenshots and branded visuals are added, these image assets create a cleaner gallery
              rhythm and help the homepage feel more complete and credible.
            </p>
          </div>

          <div className="screenshot-strip">
            {galleryCards.map((item) => (
              <figure key={`${item.title}-shot`} className="screenshot-card card">
                <img src={item.image} alt={`${item.title} preview`} className="screenshot-image" />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section spotlight-section">
        <div className="container spotlight-grid">
          <div className="spotlight-copy">
            <p className="kicker">Featured stage</p>
            <h2>Start with the strongest material first</h2>
            <p className="section-intro">
              The opening stage should immediately tell the visitor: this is curated, practical, and structured for
              actual study — not random links stacked in a dark theme.
            </p>
          </div>

          <div className="grid-3 feature-grid">
            {featured.map((item) => (
              <Link key={item.slug} href={item.href ?? '/resources'} className="feature-card card">
                <p className="card-label">{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="meta-row">
                  <span>{item.level}</span>
                  <span>{item.format}</span>
                </div>
                <span className="card-link">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section lane-overview">
        <div className="container">
          <div className="section-head compact-head">
            <div>
              <p className="kicker">Library lanes</p>
              <h2>Three content lanes, one calm structure</h2>
            </div>
            <p className="section-intro compact-copy">
              Tutorials teach workflows, resources stabilize the written base, and visuals help the system become
              easier to understand and explain.
            </p>
          </div>

          <div className="grid-3 lane-grid">
            <div className="lane-card card">
              <p className="card-label">Tutorials</p>
              <h3>Learn real workflows</h3>
              <p>{tutorials[0].description}</p>
              <div className="meta-row">
                <span>{tutorials.length} items</span>
                <span>Operator-focused</span>
              </div>
              <Link href="/tutorials" className="card-link">Browse tutorials →</Link>
            </div>

            <div className="lane-card card">
              <p className="card-label">Resources</p>
              <h3>Keep a stable written base</h3>
              <p>{resources[0].description}</p>
              <div className="meta-row">
                <span>{resources.length} items</span>
                <span>Reference layer</span>
              </div>
              <Link href="/resources" className="card-link">Browse resources →</Link>
            </div>

            <div className="lane-card card">
              <p className="card-label">Visuals</p>
              <h3>See systems more clearly</h3>
              <p>{visuals[0].description}</p>
              <div className="meta-row">
                <span>{visuals.length} items</span>
                <span>Diagram layer</span>
              </div>
              <Link href="/resources" className="card-link">Browse visuals →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section social-proof-section">
        <div className="container social-proof-grid">
          <div>
            <p className="kicker">Public-facing proof</p>
            <h2>A project that already has shape, discipline, and deployment behind it</h2>
            <p className="section-intro">
              The site is not a concept mockup anymore. It already has structure, public deployment, multiple content
              lanes, and a repository foundation that can grow into a larger knowledge system.
            </p>
          </div>

          <div className="proof-board card">
            <div className="proof-metric">
              <strong>Live</strong>
              <span>Public Vercel deployment</span>
            </div>
            <div className="proof-metric">
              <strong>3 lanes</strong>
              <span>Tutorials · Resources · Visuals</span>
            </div>
            <div className="proof-metric">
              <strong>8 entries</strong>
              <span>Real starter content already seeded</span>
            </div>
            <div className="proof-metric">
              <strong>Readable</strong>
              <span>Calm editorial layout built for mobile too</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-grid-section">
        <div className="container">
          <div className="section-head compact-head">
            <div>
              <p className="kicker">Why this hub exists</p>
              <h2>A calmer learning base for practical AI work</h2>
            </div>
            <p className="section-intro compact-copy">
              The written core comes first: tutorials, PDF-friendly resources, and visuals that can later expand into
              richer media without losing structure.
            </p>
          </div>

          <div className="grid-3">
            <article className="pillar-card card">
              <p className="card-label">Signal</p>
              <h3>Keep the good material visible</h3>
              <p>Good AI material disappears too easily. The hub is designed to hold onto it and make it reusable.</p>
            </article>
            <article className="pillar-card card">
              <p className="card-label">Structure</p>
              <h3>Make learning paths calmer</h3>
              <p>Clear sections, repeatable entry points, and a quieter visual rhythm reduce noise and friction.</p>
            </article>
            <article className="pillar-card card">
              <p className="card-label">Expansion</p>
              <h3>Grow from written base outward</h3>
              <p>PDFs, visuals, tutorials, screenshots, and future richer content can all grow from the same system.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section closing-cta-section">
        <div className="container">
          <div className="cta-panel card">
            <div>
              <p className="kicker">Next step</p>
              <h2>Build a calmer, sharper AI learning workflow</h2>
              <p className="section-intro compact-copy">
                Use the hub to collect signal, study practical guides, and return to the material that actually matters.
              </p>
            </div>
            <div className="cta-row">
              <Link className="btn primary" href="/resources">Browse the Library</Link>
              <Link className="btn" href="/tutorials">Start with Tutorials</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
