import { site } from '@/lib/siteContent'

const sampleResources = [
  'PDF guides and starter packs',
  'Practical checklists and reference notes',
  'Signal reviews and structured explainers',
  'Download-ready learning assets'
]

export default function ResourcesPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <h1>Resources</h1>
        <p className="page-intro">{site.sections.resources}</p>
        <div className="grid-2">
          {sampleResources.map((item) => (
            <div key={item} className="card"><h3>{item}</h3><p>Starter placeholder block for the first Vercel release.</p></div>
          ))}
        </div>
      </div>
    </main>
  )
}
