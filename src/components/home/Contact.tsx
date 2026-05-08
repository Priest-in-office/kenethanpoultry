import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  reason: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    reason: 'Plan a farm visit',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Tell us your name.';
    if (!form.email.trim()) errs.email = 'We need an email to reply.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'That email looks off.';
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'A line or two helps us prepare.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', reason: 'Plan a farm visit', message: '' });
      setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="mono label reveal">§ 06 — Visit &amp; Contact</div>
          </div>
          <div className="reveal reveal-d1">
            <h2>Come see <em>where dinner grew up.</em></h2>
            <p style={{ marginTop: 20 }}>
              The farm gate is forty minutes from Abeokuta city. Tell us when you'd
              like to come — we'll arrange a guide, a meal, and a basket to take home.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="group">
              <span className="mono label">Find us</span>
              <p>
                Plot 14, Mile 6, Abeokuta–Ibadan Expressway,<br />
                Odeda LGA, Ogun State
              </p>
              <small>By appointment Mon–Fri · Open Saturdays 9–2</small>
            </div>
            <div className="group">
              <span className="mono label">Speak to us</span>
              <a href="tel:+2348012345678">+234 801 234 5678</a>
              <small>Farm coordinator — Adaeze Okafor</small>
            </div>
            <div className="group">
              <span className="mono label">Write to us</span>
              <a href="mailto:hello@kenethanfarms.ng">hello@kenethanfarms.ng</a>
              <small>Replies within one working day.</small>
            </div>
            <div className="group">
              <span className="mono label">Follow the farm</span>
              <p style={{ display: 'flex', gap: 16, fontSize: 18 }}>
                <a href="#">Instagram</a>
                <span style={{ color: 'var(--rule)' }}>/</span>
                <a href="#">WhatsApp</a>
                <span style={{ color: 'var(--rule)' }}>/</span>
                <a href="#">Newsletter</a>
              </p>
            </div>
          </div>

          <form className="form-card reveal reveal-d1" onSubmit={submit} noValidate>
            <div className="form-grid2">
              <div className="form-row">
                <label>Your name</label>
                <input value={form.name} onChange={set('name')} placeholder="Adaeze O." />
                {errors.name && <span className="err">{errors.name}</span>}
              </div>
              <div className="form-row">
                <label>Email</label>
                <input value={form.email} onChange={set('email')} placeholder="you@kitchen.com" />
                {errors.email && <span className="err">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <label>I'm writing about</label>
              <select value={form.reason} onChange={set('reason')}>
                <option>Plan a farm visit</option>
                <option>Open a wholesale account</option>
                <option>Place a household order</option>
                <option>Press / partnership</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="form-row">
              <label>Message</label>
              <textarea
                value={form.message}
                onChange={set('message')}
                placeholder="Tell us when, who, and how many…"
                rows={3}
              />
              {errors.message && <span className="err">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary">
              Send note <span className="arr">→</span>
            </button>
            <div className={`form-msg ${sent ? 'show' : ''}`}>
              ✓ Thank you — we'll be in touch within a working day.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
