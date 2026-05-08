import Placeholder from '../shared/Placeholder';

interface GalleryItem {
  l: string;
  v: string;
  c: string;
  r: string;
}

const items: GalleryItem[] = [
  { l: 'Hens at dawn',          v: 'olive', c: '1 / 6',   r: '1 / 4' },
  { l: 'Pasture rotation',      v: 'terra', c: '6 / 10',  r: '1 / 3' },
  { l: 'Calf, 3 weeks',         v: 'moss',  c: '10 / 13', r: '1 / 4' },
  { l: 'Egg sort',              v: 'ochre', c: '6 / 9',   r: '3 / 5' },
  { l: 'Bourbon Red tom',       v: '',      c: '9 / 13',  r: '4 / 6' },
  { l: 'Goat kid',              v: 'moss',  c: '1 / 4',   r: '4 / 6' },
  { l: 'Smokehouse',            v: 'terra', c: '4 / 8',   r: '5 / 7' },
  { l: 'Sunset, west pasture',  v: 'ochre', c: '8 / 13',  r: '6 / 8' },
];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="mono label reveal">§ 04 — Field Notes</div>
          </div>
          <div className="reveal reveal-d1">
            <h2>The farm, <em>by hand and by season.</em></h2>
            <p style={{ marginTop: 20 }}>
              A working notebook of mornings, animals, and the people who tend them.
            </p>
          </div>
        </div>

        <div className="gallery-grid">
          {items.map((it, i) => (
            <div
              key={i}
              className={`g-item reveal reveal-d${(i % 4) + 1}`}
              style={{ gridColumn: it.c, gridRow: it.r }}
            >
              <Placeholder label={it.l.toUpperCase()} variant={it.v} />
              <span className="cap">{it.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
