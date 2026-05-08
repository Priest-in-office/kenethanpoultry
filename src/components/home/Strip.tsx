const items = [
  'Pasture-raised',
  'No routine antibiotics',
  'Heritage breeds',
  'Slow-grown',
  'Family-run since 2018',
  'Lagos & Abeokuta delivery',
];

const repeated = [...items, ...items];

export default function Strip() {
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {repeated.map((t, i) => (
          <span key={i}>
            {t}
            <span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
