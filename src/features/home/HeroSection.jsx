import { personal } from '../../data/personal'

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="hero-heading">
          ML & Software Engineer building{' '}
          <span className="highlight">AI systems</span> with{' '}
          <span className="highlight">measurable impact</span>
        </h1>

        <p className="hero-description">
          Machine Learning, NLP, Computer Vision, and Explainable AI.
          From building feature stores and MCP servers to training vision transformers
          and writing CUDA kernels. 33+ open-source PRs across major projects.
        </p>

        <div className="hero-info-cards">
          <div className="hero-info-card">
            <div className="info-label">Focus</div>
            <div className="info-value">ML / AI / Backend</div>
          </div>
          <div className="hero-info-card">
            <div className="info-label">Location</div>
            <div className="info-value">{personal.location}</div>
          </div>
          <div className="hero-info-card">
            <div className="info-label">Open Source</div>
            <div className="info-value">33+ PRs</div>
          </div>
        </div>

        <div className="hero-actions">
          <a href={`mailto:${personal.email}`} className="btn btn-yellow">
            ✉ Hire Me
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-default">
            📄 View GitHub
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image">
          <img src={personal.avatar} alt={personal.name} />
          <div className="hero-image-badge">ML</div>
        </div>
      </div>
    </div>
  )
}
