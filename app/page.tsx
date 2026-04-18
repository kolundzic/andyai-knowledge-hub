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
  const content = (
    <>
      <div className="card-tag">{item.tag}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="meta-row">
        <span>{item.level}</span>
        <span>{item.format}</span>
      </div>
      <div className="card-link">Read more →</div>
    </>
  );

  if (item.href) {
    return (
      <a className="library-card" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className="library-card">{content}</article>;
}

const showcase = [
  {
    value: '3 lanes',
    title: 'Tutorials, resources, visuals',
    text: 'A clean front door for practical AI study, not a random feed of disconnected links.',
  },
  {
    value: 'Written-first',
    title: 'Stable reference base',
    text: 'PDFs, explainers, and reusable notes create a calmer system for returning to important material.',
  },
  {
    value: 'Public now',
    title: 'Live editorial foundation',
    text: 'The hub is already online and now enters its first stronger public-facing prestige layer.',
  },
  {
    value: 'Mobile-ready',
    title: 'Cleaner on smaller screens',
    text: 'The homepage rhythm, CTA flow, and cards are shaped to feel better on phones, too.',
  },
];

const proofCards = [
  {
    title: 'Start from signal, not from chaos',
    text: 'Featured material gives the reader a strong place to begin instead of forcing them to guess what matters first.',
  },
  {
    title: 'Use one editorial home page as the front door',
    text: 'The homepage should feel like a confident overview of the project, not only a stack of sections and links.',
  },
  {
    title: 'Keep the visual language calm but premium',
    text: 'Prestige here means cleaner hierarchy, stronger framing, and more confidence — not noisy effects.',
  },
];

export default function HomePage() {
  const [spotlight, ...secondaryFeatured] = featured;

  return (
    <>
      <section className="hero hero-editorial hero-prestige">
        <div className="container">
          <div className="hero-shell hero-shell-prestige">
            <div className="hero-copy hero-copy-prestige">
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

              <div className="hero-mini-row">
                <div className="hero-mini-pill">Live knowledge hub</div>
                <div className="hero-mini-pill">Practical AI learning</div>
                <div className="hero-mini-pill">Editorial structure</div>
              </div>
            </div>

            <div className="hero-panel card hero-panel-prestige">
              <div className="kicker">Homepage showcase</div>
              <h2>Public-facing polish with a stronger front page rhythm</h2>
              <p>
                This layer pushes the hub beyond a clean starter and toward a more confident editorial product.
              </p>
              <ul className="hero-list hero-list-rich">
                <li>
                  <strong>Stronger hero presence</strong>
                  <span>Clear value, calmer authority, better first impression</span>
                </li>
                <li>
                  <strong>Showcase strip</strong>
                  <span>Quick proof of scope, value, and reading lanes</span>
                </li>
                <li>
                  <strong>Homepage spotlight</strong>
                  <span>A more premium presentation of featured material</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight section-showcase-strip">
        <div className="container">
          <div className="showcase-strip">
            {showcase.map((item) => (
              <article className="showcase-card" key={item.title}>
                <div className="showcase-value">{item.value}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-head section-head-prestige">
            <div>
              <div className="kicker">Featured content</div>
              <h2>Start with the strongest material on the front page</h2>
            </div>
            <p className="section-intro">
              {site.sections.featured}
            </p>
          </div>

          <div className="featured-stage">
            <article className="spotlight-card">
              <div className="card-tag">Spotlight guide</div>
              <h3>{spotlight.title}</h3>
              <p>{spotlight.description}</p>
              <div className="meta-row">
                <span>{spotlight.level}</span>
                <span>{spotlight.format}</span>
              </div>
              <div className="spotlight-actions">
                <Link className="btn primary" href="/tutorials">
                  Open Tutorials
                </Link>
                <Link className="btn" href="/resources">
                  Browse Library
                </Link>
              </div>
            </article>

            <div className="featured-stack">
              {secondaryFeatured.map((item) => (
                <LibraryCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container">
          <div className="section-head section-head-prestige">
            <div>
              <div className="kicker">Reading lanes</div>
              <h2>Browse the hub by practical intent</h2>
            </div>
            <p className="section-intro">
              Choose your lane: learn a workflow, open a stable reference, or use a visual explainer to understand the system faster.
            </p>
          </div>

          <div className="lane-grid">
            <article className="lane-card">
              <div className="card-tag">Tutorial lane</div>
              <h3>Learn concrete workflows</h3>
              <p>{site.sections.tutorials}</p>
              <div className="lane-list">
                {tutorials.map((item) => (
                  <div className="lane-item" key={item.slug}>
                    <strong>{item.title}</strong>
                    <span>{item.level} · {item.format}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="lane-card">
              <div className="card-tag">Resource lane</div>
              <h3>Keep a written base nearby</h3>
              <p>{site.sections.resources}</p>
              <div className="lane-list">
                {resources.map((item) => (
                  <div className="lane-item" key={item.slug}>
                    <strong>{item.title}</strong>
                    <span>{item.level} · {item.format}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="lane-card">
              <div className="card-tag">Visual lane</div>
              <h3>Use diagrams to shorten confusion</h3>
              <p>{site.sections.visuals}</p>
              <div className="lane-list">
                {visuals.map((item) => (
                  <div className="lane-item" key={item.slug}>
                    <strong>{item.title}</strong>
                    <span>{item.level} · {item.format}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-head section-head-prestige">
            <div>
              <div className="kicker">Why it feels stronger now</div>
              <h2>Prestige comes from clarity, rhythm, and confidence</h2>
            </div>
          </div>

          <div className="grid-3 editorial-grid">
            {proofCards.map((item) => (
              <article className="library-card" key={item.title}>
                <div className="card-tag">Public polish</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta section-cta-prestige">
        <div className="container">
          <div className="cta-panel cta-panel-prestige">
            <div>
              <div className="kicker">Keep moving through the hub</div>
              <h2>Use the homepage as a calm launchpad for deeper study</h2>
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
