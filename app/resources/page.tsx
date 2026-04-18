import { resources, visuals } from '@/lib/library';
import { site } from '@/lib/siteContent';

function ResourceCard({
  title,
  description,
  tag,
  level,
  format,
  href,
}: {
  title: string;
  description: string;
  tag: string;
  level: string;
  format: string;
  href?: string;
}) {
  const inner = (
    <article className="library-card">
      <div className="card-tag">{tag}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="meta-row">
        <span>{level}</span>
        <span>{format}</span>
      </div>
      <div className="card-link">Open reference →</div>
    </article>
  );

  if (!href) return inner;
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <div className="page-shell">
      <div className="container">
        <div className="page-intro-shell">
          <div className="kicker">Resources</div>
          <h1>Resources and reference material</h1>
          <p className="page-intro">{site.sections.resources}</p>
        </div>

        <section className="section section-tight no-pad-top">
          <div className="section-head">
            <div>
              <div className="kicker">Official references</div>
              <h2>Start with stable source material</h2>
            </div>
          </div>
          <div className="grid-3 editorial-grid">
            {resources.map((item) => (
              <ResourceCard key={item.slug} {...item} />
            ))}
          </div>
        </section>

        <section className="section section-band">
          <div className="section-head">
            <div>
              <div className="kicker">Visual lane</div>
              <h2>Diagram references and reusable visual guides</h2>
            </div>
            <p className="section-intro">{site.sections.visuals}</p>
          </div>
          <div className="grid-2 editorial-grid">
            {visuals.map((item) => (
              <ResourceCard key={item.slug} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
