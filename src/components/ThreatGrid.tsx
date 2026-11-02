import { threats } from "../data/threats"
import { ThreatCard } from "./ThreatCard"

export function ThreatGrid() {
  return (
    <ul className="grid" role="list">
      {threats.map((threat) => (
        <li key={threat.id}>
          <ThreatCard threat={threat} />
        </li>
      ))}
    </ul>
  )
}
