import type { Threat } from "../data/threats"

export function ThreatCard({ threat }: { threat: Threat }) {
  return (
    <article className="card">
      <div className="card__head">
        <span className="card__icon" aria-hidden="true">
          {threat.icon}
        </span>
        <span className="card__tag">{threat.category}</span>
      </div>
      <h3 className="card__title">{threat.name}</h3>
      <p className="card__what">{threat.what}</p>
      <p className="card__tip">
        <strong>Stay safe:</strong> {threat.tip}
      </p>
    </article>
  )
}
