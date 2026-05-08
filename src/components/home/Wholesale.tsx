import Placeholder from '../shared/Placeholder';

const points = [
  {
    n: 'I',
    t: 'Standing weekly orders',
    d: 'Confirm volumes with our farm coordinator on Monday; receive Thursday or Friday.',
  },
  {
    n: 'II',
    t: 'Cuts to your spec',
    d: 'Whole birds, primal beef, or custom butchery. We work with your kitchen\'s cut sheet.',
  },
  {
    n: 'III',
    t: 'Cold-chain delivery',
    d: 'Insulated transport across Lagos, Abeokuta, and Ibadan. Same-day from slaughter.',
  },
  {
    n: 'IV',
    t: 'Provenance, on demand',
    d: 'Every batch carries breed, paddock, and slaughter date — for menus and sourcing reports.',
  },
];

export default function Wholesale() {
  return (
    <section id="wholesale" className="whole">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="mono label reveal">§ 03 — Wholesale &amp; Partners</div>
          </div>
          <div className="reveal reveal-d1">
            <h2>Built for kitchens that <em>plan ahead.</em></h2>
            <p style={{ marginTop: 20 }}>
              We supply hotels, restaurants and specialty grocers across south-west
              Nigeria. Predictable supply, breed-level traceability, and chefs who
              can call the farmer directly.
            </p>
          </div>
        </div>

        <div className="whole-grid">
          <ul className="whole-list">
            {points.map((p, i) => (
              <li key={p.n} className={`reveal reveal-d${i + 1}`}>
                <span className="n">{p.n}</span>
                <div>
                  <h4 className="serif">{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <aside className="whole-card reveal reveal-d2">
            <Placeholder label="WHOLESALE — chef + farmer in field" variant="dark" />
            <h3 className="serif">Open a trade account</h3>
            <p>
              Tell us your weekly volumes and product mix. We'll send a sample box and
              a draft cut sheet within 48 hours.
            </p>
            <a href="#contact" className="btn btn-primary">
              Request trade pack <span className="arr">→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
