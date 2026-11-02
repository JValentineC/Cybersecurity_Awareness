import { Hero } from "./components/Hero"
import { ThreatGrid } from "./components/ThreatGrid"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="page">
      <Hero />
      <main>
        <section id="about" className="container about">
          <h2 className="section__title">What this is about</h2>
          <p className="about__text">
            Security tools get cheaper and easier to use every year &mdash; a
            Flipper Zero fits in a pocket, a fake QR code costs nothing, and a
            convincing phishing email takes minutes to write. This newsletter
            isn't here to scare you; it's here to make the invisible visible.
            Once you know how an attack works, most of them stop working on you.
          </p>
          <p className="about__text">
            We cover the whole range &mdash; sub-GHz radio tricks, BadUSB, Wi-Fi
            cracking, quishing, phishing, and the social engineering that ties
            them all together &mdash; in plain language, one threat at a time.
          </p>
        </section>

        <section id="threats" className="container threats">
          <h2 className="section__title">Threats we cover</h2>
          <p className="section__subtitle">
            Nine risks everyone should recognize &mdash; what each one is, and
            how to shut it down.
          </p>
          <ThreatGrid />
        </section>
      </main>
      <Footer />
    </div>
  )
}
