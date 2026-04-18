import { site } from '@/lib/siteContent';

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="container">
        <div className="page-intro-shell narrow-copy">
          <div className="kicker">About</div>
          <h1>Why AndyAI Knowledge Hub exists</h1>
          <p className="page-intro">{site.sections.about}</p>
          <p>
            The goal is simple: take useful AI learning material and present it in a cleaner, calmer,
            more editorial way. Not random hype. Not scattered bookmarks. Not noise. Just practical
            guides, structured resources, and visual notes that can keep growing over time.
          </p>
        </div>
      </div>
    </div>
  );
}
