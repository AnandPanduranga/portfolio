import React from 'react'

const sample = [
  {
    title: 'Project A',
    desc: 'A fullstack app with React and Node.js.',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Project B',
    desc: 'Realtime collaboration tool demo.',
    tech: ['Socket.io', 'Express', 'Postgres']
  },
  {
    title: 'Project C',
    desc: 'Static site + API integration.',
    tech: ['Vite', 'React', 'REST']
  }
]

export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {sample.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p className="tech">{p.tech.join(' • ')}</p>
            <p>
              <a className="small" href="#contact">View details</a>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
