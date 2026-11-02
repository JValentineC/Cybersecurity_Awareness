export function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <div className="hero__badge" aria-hidden="true">
          🛡️
        </div>
        <p className="hero__eyebrow">Cybersecurity Awareness</p>
        <h1 className="hero__title">Stay a step ahead of the threats.</h1>
        <p className="hero__lead">
          Welcome. This is a plain-English newsletter about the security risks
          most people never see coming &mdash; from the radios in a hacker's
          backpack to the links in your inbox. Each issue breaks down one threat
          and the simple habits that keep you safe.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#threats">
            Browse the threats
          </a>
          <a className="btn btn--ghost" href="#about">
            What this is
          </a>
        </div>
      </div>
    </header>
  )
}
