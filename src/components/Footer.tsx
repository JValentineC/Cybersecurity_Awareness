export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">🛡️ Cybersecurity Awareness</p>
        <p className="footer__note">
          Built to keep people aware, not afraid. Share it with someone who could
          use it.
        </p>
        <p className="footer__meta">
          © {year} · An i.c.stars awareness project
        </p>
      </div>
    </footer>
  )
}
