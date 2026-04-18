import { site } from '@/lib/siteContent';

export default function JoinPage() {
  return (
    <div className="page-shell">
      <div className="container">
        <div className="page-intro-shell narrow-copy">
          <div className="kicker">Join</div>
          <h1>Follow the next wave of practical material</h1>
          <p className="page-intro">{site.sections.join}</p>
          <div className="cta-panel compact">
            <div>
              <h2>Waitlist / form placeholder</h2>
              <p>
                Connect your email tool, waitlist form, or lightweight audience capture block in the
                next pack. The structure is ready for it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
