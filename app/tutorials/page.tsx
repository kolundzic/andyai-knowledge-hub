import { site } from '@/lib/siteContent'

const sampleTutorials = [
  'How to structure AI work with files instead of chaos',
  'How to build a useful tutorial from raw notes',
  'How to turn a concept into a clean block diagram',
  'How to prepare written materials before video production'
]

export default function TutorialsPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <h1>Tutorials</h1>
        <p className="page-intro">{site.sections.tutorials}</p>
        <div className="grid-2">
          {sampleTutorials.map((item) => (
            <div key={item} className="card"><h3>{item}</h3><p>Starter placeholder block for the first public tutorial library.</p></div>
          ))}
        </div>
      </div>
    </main>
  )
}
