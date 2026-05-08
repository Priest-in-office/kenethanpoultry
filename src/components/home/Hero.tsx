import Placeholder from '../shared/Placeholder';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <Placeholder label="HERO IMAGE — pasture w/ flock at golden hour" variant="moss" />
      </div>

      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow reveal">
              <span className="dot" />
              <span className="mono">Pasture-raised · Ogun State, Nigeria</span>
            </div>
            <h1 className="serif reveal reveal-d1">
              Honest meat,<br />
              raised the<br />
              <em>old way.</em>
            </h1>
            <p className="hero-lede reveal reveal-d2">
              KenEthan Farms is a family-run pastoral farm raising heritage poultry,
              cattle, and goats on open grass — supplying chefs and households who
              know the difference.
            </p>
            <div className="hero-cta reveal reveal-d3">
              <a href="#contact" className="btn btn-primary">
                Plan a farm visit <span className="arr">→</span>
              </a>
              <a href="#shop" className="btn btn-ghost">
                See what's in season
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stats reveal reveal-d4">
          <div className="hero-stat">
            <div className="num serif">
              240<span style={{ color: 'var(--terracotta)' }}>ha</span>
            </div>
            <div className="lbl">
              of rotated open pasture across two parcels in Abeokuta and Ijebu-Ode.
            </div>
          </div>
          <div className="hero-stat">
            <div className="num serif">
              6<span style={{ color: 'var(--terracotta)' }}>×</span>
            </div>
            <div className="lbl">
              livestock — heritage chickens, turkeys, ducks, cattle, goats and pigs.
            </div>
          </div>
          <div className="hero-stat">
            <div className="num serif">
              38<span style={{ color: 'var(--terracotta)' }}>+</span>
            </div>
            <div className="lbl">
              restaurants, hotels and grocers across Lagos and Abeokuta source from us weekly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
