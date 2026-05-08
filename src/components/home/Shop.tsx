import Placeholder from '../shared/Placeholder';

const products = [
  { name: 'Whole pastured chicken', price: '₦14,500',        meta: '1.6–2.0 kg · slow-grown 70+ days',      tag: 'Year-round', v: 'olive' },
  { name: 'Heritage turkey',        price: '₦42,000',        meta: '5–7 kg · seasonal · pre-order',          tag: 'Dec release', v: 'terra' },
  { name: 'Pasture eggs (dozen)',   price: '₦6,800',         meta: 'Mixed flock · collected daily',           tag: 'Weekly',     v: 'ochre' },
  { name: 'Grass-fed beef cuts',    price: 'From ₦9,200/kg', meta: 'Sirloin, ribeye, brisket, mince',        tag: 'By order',   v: 'moss'  },
  { name: 'Goat — half/whole',      price: 'From ₦38,000',   meta: 'Butchered to spec · 48hr notice',        tag: 'By order',   v: ''      },
  { name: 'Smoked heritage bacon',  price: '₦7,800 / 500g',  meta: 'Farm-cured · oak-smoked',                tag: 'Limited',    v: 'terra' },
];

export default function Shop() {
  return (
    <section id="shop" className="shop">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="mono label reveal">§ 02 — The Larder</div>
          </div>
          <div className="reveal reveal-d1">
            <h2>What's <em>in season</em>, this week.</h2>
            <p style={{ marginTop: 20 }}>
              Our shelves move with the pasture. Place an order online for Lagos &amp;
              Abeokuta delivery, or arrange pickup at the farm gate on Saturdays.
            </p>
          </div>
        </div>

        <div className="shop-grid">
          {products.map((p, i) => (
            <article key={p.name} className={`product reveal reveal-d${(i % 3) + 1}`}>
              <Placeholder label={p.name.toUpperCase()} variant={p.v} ar="4 / 3" />
              <div className="product-body">
                <span className="tag mono">{p.tag}</span>
                <div className="product-row">
                  <h4 className="serif">{p.name}</h4>
                  <span className="price">{p.price}</span>
                </div>
                <p className="meta">{p.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
