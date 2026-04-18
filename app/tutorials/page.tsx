import { tutorials } from '@/lib/library';
import { site } from '@/lib/siteContent';

export default function TutorialsPage() {
  return (
    <div className="page-shell">
      <div className="container">
        <div className="page-intro-shell">
          <div className="kicker">Tutorials</div>
          <h1>Tutorials for practical AI work</h1>
          <p className="page-intro">{site.sections.tutorials}</p>
        </div>

        <div className="grid-3 editorial-grid">
          {tutorials.map((item) => (
            <article className="library-card" key={item.slug}>
              <div className="card-tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="meta-row">
                <span>{item.level}</span>
                <span>{item.format}</span>
              </div>
              <div className="card-link">Open tutorial note →</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
