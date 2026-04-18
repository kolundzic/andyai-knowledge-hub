import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Resources', '/resources'],
  ['Tutorials', '/tutorials'],
  ['About', '/about'],
  ['Join', '/join'],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="brand-wrap">
          <Link className="brand" href="/">
            AndyAI Knowledge Hub
          </Link>
          <p className="brand-note">Calm, practical, editorial AI learning</p>
        </div>

        <div className="nav-wrap">
          <nav className="nav" aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <Link className="header-cta" href="/resources">
            Explore Library
          </Link>
        </div>
      </div>
    </header>
  );
}
