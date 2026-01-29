import React from 'react'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">Anand</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
