const skills = ["React", "Next.js", "SCSS", "Express", "HTML", "CSS", "JavaScript", "TypeScript", "AWS", "MongoDB", "PostgreSQL"]

export default function Skills() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-4">Top-Tier Skills & Tools for Exceptional Results</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((s, i) => (
          <div key={i} className="border rounded px-4 py-2 shadow-sm bg-white text-sm">
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
