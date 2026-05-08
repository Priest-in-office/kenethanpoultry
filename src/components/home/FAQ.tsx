import { useState } from 'react';

const items = [
  {
    q: 'Can I visit the farm?',
    a: 'Yes — we host open Saturdays twice a month and bookable private tours on weekdays. Tours include a paddock walk, the laying barn, and a tasting at the farmhouse. Bring closed shoes.',
  },
  {
    q: 'Do you deliver to Lagos?',
    a: 'We deliver to Lagos Island, Lekki, Ikoyi, Victoria Island and the mainland three times a week. Abeokuta and Ibadan have dedicated days. Free over ₦25,000; otherwise ₦2,500 flat.',
  },
  {
    q: "What does 'pasture-raised' mean here?",
    a: 'Our chickens, turkeys and ducks live outdoors from week three onward, on rotated paddocks. Cattle and goats are 100% grass-fed and grass-finished. We never use routine antibiotics or growth promoters.',
  },
  {
    q: 'Are your products certified?',
    a: "We are NAFDAC and Federal Ministry of Agriculture registered. We're working toward a third-party pasture-raised audit, expected late 2026.",
  },
  {
    q: 'How do I open a wholesale account?',
    a: "Send us your weekly volumes, product mix and delivery window via the form below. We'll respond with a sample box and draft cut sheet within 48 hours.",
  },
  {
    q: 'Do you sell live birds or chicks?',
    a: 'We supply day-old chicks of select heritage breeds twice a year, and POL pullets quarterly. Live birds are sold dressed only — for backyard breeders we recommend our partner hatcheries.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="mono label reveal">§ 05 — Common Questions</div>
          </div>
          <div className="reveal reveal-d1">
            <h2>Things people <em>tend to ask.</em></h2>
          </div>
        </div>

        <div className="faq-list reveal">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <span className="n">0{i + 1}</span>
                <span className="q serif">{it.q}</span>
                <span className="ic">+</span>
              </button>
              <div className="faq-a" style={{ maxHeight: openIdx === i ? 240 : 0 }}>
                <div className="faq-a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
