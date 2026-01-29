import React from 'react'

export default function About() {
  return (
    <section className="about container" id="about">
      <h2>About</h2>
      <p>
        I'm Anand, a fullstack developer with experience building React frontends and Node.js backends. I focus on
        performance, accessibility and clean architecture.
      </p>
      <h3>Skills</h3>
      <ul className="skills">
        <li>React</li>
        <li>Node.js / Express</li>
        <li>TypeScript / JavaScript</li>
        <li>SQL / NoSQL</li>
        <li>Testing & CI</li>
      </ul>
    </section>
  )
}
