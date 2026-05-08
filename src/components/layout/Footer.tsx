export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <div className="brand-mark">K</div>
              <div>
                <div className="brand-name">KenEthan Farms</div>
                <div className="brand-sub">EST. 2018 · OGUN STATE</div>
              </div>
            </a>
            <p>
              A pasture-raised farm in Ogun State, Nigeria, supplying chefs and
              households with honest meat since 2018.
            </p>
          </div>

          <div>
            <h5>Visit</h5>
            <a href="#contact">Plan a tour</a>
            <a href="#contact">Open Saturdays</a>
            <a href="#contact">Group bookings</a>
          </div>

          <div>
            <h5>Shop</h5>
            <a href="#shop">In-season</a>
            <a href="#shop">Order online</a>
            <a href="#wholesale">Wholesale</a>
          </div>

          <div>
            <h5>The Farm</h5>
            <a href="#livestock">Livestock</a>
            <a href="#gallery">Field notes</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 KenEthan Farms Ltd. All rights reserved.</span>
          <span className="mono">Built with care · Odeda, Ogun State</span>
        </div>
      </div>
    </footer>
  );
}
