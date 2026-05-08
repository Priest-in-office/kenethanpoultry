import Placeholder from '../shared/Placeholder';

const animals = [
  { num: '01', name: 'Chickens', note: 'Heritage broilers and Black Australorp layers, 60+ days on grass.', v: 'olive' },
  { num: '02', name: 'Turkeys',  note: 'Bourbon Reds and Royal Palms — slow-grown, season-led release.',   v: 'terra' },
  { num: '03', name: 'Cattle',   note: 'White Fulani crossbreeds, grass-finished on rotational paddocks.',  v: 'moss'  },
  { num: '04', name: 'Goats',    note: 'West African Dwarf and Red Sokoto — dairy and table cuts.',         v: 'ochre' },
  { num: '05', name: 'Pigs',     note: 'Large Black heritage hogs, foraged feed with farm-grown roots.',    v: ''      },
];

export default function Livestock() {
  return (
    <section id="livestock">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="mono label reveal">§ 01 — The Herd</div>
          </div>
          <div className="reveal reveal-d1">
            <h2>What we raise, <em>and how.</em></h2>
            <p style={{ marginTop: 20 }}>
              Five species, one principle: animals live outside, eat what's natural,
              and grow at their own pace. Every breed below was chosen for flavour and
              hardiness, not throughput.
            </p>
          </div>
        </div>

        <div className="live-grid">
          {animals.map((a, i) => (
            <article key={a.num} className={`live-card reveal reveal-d${(i % 4) + 1}`}>
              <div className="num mono">{a.num} / 05</div>
              <Placeholder label={a.name.toUpperCase()} variant={a.v} />
              <h3 className="serif">{a.name}</h3>
              <p>{a.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
