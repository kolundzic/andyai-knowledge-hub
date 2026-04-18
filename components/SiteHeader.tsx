import Link from 'next/link'

const links = [
  ['Home', '/'],
  ['Resources', '/resources'],
  ['Tutorials', '/tutorials'],
  ['About', '/about'],
  ['Join', '/join'],
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">🧠 AndyAI Knowledge Hub</Link>
        <nav className="nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
