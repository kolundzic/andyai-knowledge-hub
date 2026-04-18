import Link from 'next/link';
import { featured, resources, tutorials, visuals } from '@/lib/library';
import { site } from '@/lib/siteContent';

function LibraryCard({
  item,
}: {
  item: {
    slug: string;
    title: string;
    description: string;
    tag: string;
    level: string;
    format: string;
    href?: string;
  };
}) {
  return (
    <article className="library-card">
      <div className="card-tag">{item.tag}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="meta-row">
        <span>{item.level}</span>
        <span>{item.format}</span>
      </div>
      <div className="card-link">Read more →</div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero hero-editorial">
        <div className="container">
          <div className="hero-shell">
            <div className="hero-copy">
              <div className="eyebrow">{site.heroEyebrow}</div>
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
              <p className="hero-trust">{site.heroTrust}</p>
            </div>

            <div className="hero-panel card">
              <div className="kicker">Featured focus</div>
              <h2>Signal over noise</h2>
              <p>
                Start with a practical mix of tutorials, reference resources, and visual explainers.
              </p>
              <ul className="hero-list">
                {featured.map((item) => (
                  <li key={item.slug}>
                    <strong>{item.title}</strong>
                    <span>
                      {item.level} · {item.format}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Featured content</div>
              <h2>Start with high-signal material</h2>
            </div>
            <p className="section-intro">{site.sections.featured}</p>
          </div>
          <div className="grid-3 editorial-grid">
            {featured.map((item) => (
              <LibraryCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Tutorials</div>
              <h2>Learn real workflows, not random tricks</h2>
            </div>
            <p className="section-intro">{site.sections.tutorials}</p>
          </div>
          <div className="grid-3 editorial-grid">
            {tutorials.map((item) => (
              <LibraryCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Resources and PDFs</div>
              <h2>Keep a stable written base</h2>
            </div>
            <p className="section-intro">{site.sections.resources}</p>
          </div>
          <div className="grid-3 editorial-grid">
            {resources.map((item) => (
              <LibraryCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Visuals and diagrams</div>
              <h2>See the system more clearly</h2>
            </div>
            <p className="section-intro">{site.sections.visuals}</p>
          </div>
          <div className="grid-2 editorial-grid">
            {visuals.map((item) => (
              <LibraryCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Why this hub exists</div>
              <h2>A calmer learning base for practical AI work</h2>
            </div>
          </div>
          <div className="grid-3 editorial-grid">
            {site.pillars.map((item) => (
              <article className="library-card" key={item.title}>
                <div className="card-tag">Core principle</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta-panel">
            <div>
              <div className="kicker">Stay with the strongest material</div>
              <h2>Build a calmer, sharper AI learning workflow</h2>
              <p>{site.sections.closing}</p>
            </div>
            <div className="cta-row cta-row-end">
              <Link className="btn primary" href="/resources">
                Browse the Library
              </Link>
              <Link className="btn" href="/tutorials">
                Start with Tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
