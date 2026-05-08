# KenEthan Farms — Project Brief for Agents

## What this project is

A single-page marketing website for **KenEthan Farms**, a pasture-raised heritage livestock farm in Ogun State, Nigeria. The audience is premium — chefs, restaurants, hotels, and households who care about provenance. The primary CTA throughout the site is **"Plan a Visit"**.

The site lives at `kenethanpoultry/` inside the monorepo root `KenEthan-Poultry/`.

---

## Tech stack

| Tool | Version | Role |
|------|---------|------|
| React | 19 | UI |
| TypeScript | ~6.0 | Type safety |
| Vite | 8 | Build tool |
| `@tailwindcss/vite` | 4 | **Installed but not used** — see note below |

**Tailwind note:** The project was scaffolded with Tailwind v4. The design was replaced entirely with a vanilla CSS system using CSS custom properties. The `@import "tailwindcss"` line is gone from `index.css`. The Tailwind package and its Vite plugin remain in `package.json` — they cause no harm. Do NOT re-introduce Tailwind classes; the design uses CSS class names defined in `src/index.css`.

**Unused packages (installed, not imported anywhere):**
- `gsap` — was used by the old Hero; now unused
- `@studio-freight/lenis` — was used by old SmoothScroll; now unused
- `react-router-dom` — was used by old multi-page app; now unused
- `lucide-react` — was used by old Navbar/Footer; now unused

These packages can be removed from `package.json` when cleaning up. Don't import them in new code.

---

## Commands

```bash
cd kenethanpoultry

npm run dev       # start dev server
npm run build     # tsc type-check + vite production build
npm run preview   # serve the dist/ build locally
npm run lint      # ESLint
```

Build output goes to `kenethanpoultry/dist/`.

---

## Design system

All design tokens live as CSS custom properties in `src/index.css` under `:root`.

### Colour palette

```css
--bg: #f6f1e8          /* warm cream — page background */
--bg-2: #efe7d6        /* slightly darker cream — alternate section bg */
--paper: #faf6ee       /* lightest cream — cards, form */
--ink: #1f2218         /* near-black — primary text, nav scrolled */
--ink-soft: #4a4a3e    /* warm dark grey — secondary text */
--rule: #d9cfba        /* muted tan — borders, dividers */
--terracotta: #b9542e  /* primary accent — CTAs, hover states */
--ochre: #c8943a       /* warm gold — stats, section numbers */
--olive: #6b6f31       /* muted green */
--moss: #2f4a2a        /* deep green — brand mark, accents */
--forest: #1c3320      /* darkest green — Wholesale section background */
```

### Typography

```css
--serif: "Cormorant Garamond", Georgia, serif   /* headlines, prices, brand name */
--sans:  "Inter", system-ui, sans-serif          /* body text, labels */
--mono:  "JetBrains Mono", ui-monospace          /* section numbers, tags, eyebrows */
```

Fonts are loaded from Google Fonts in `index.html`. The `<link>` tag loads Cormorant Garamond, DM Serif Display (alternate heading), Libre Caslon Display (alternate heading), Inter, and JetBrains Mono.

### Utility classes

```
.serif      font-family: var(--serif) + weight 500
.mono       font-family: var(--mono) + uppercase + tracking
.container  max-width 1320px, centered, 40px padding (24px on mobile)
.reveal     scroll-reveal base class (opacity 0, translateY 24px)
.reveal.in  revealed state (opacity 1, translateY 0)
.reveal-d1 through .reveal-d4   transition-delay stagger (80ms increments)
```

### Placeholder component

All imagery is placeholder. When real photography arrives, replace `<Placeholder>` with `<img>` — the layout dimensions are already set by CSS (aspect-ratio, min-height, flex: 1, etc.).

Placeholder variants (controls background colour and hatch texture tint):
- `olive` — muted green
- `terra` — terracotta
- `moss` — deep green (light text)
- `ochre` — warm gold
- `dark` — for dark section backgrounds (Wholesale)
- `""` (empty string) — default bg-2 cream

---

## File structure

```
src/
  main.tsx                          Entry point — renders <App /> in StrictMode
  App.tsx                           Thin wrapper — renders <Home /> only
  index.css                         ALL styles. Single stylesheet, no Tailwind.

  hooks/
    useReveal.ts                    IntersectionObserver: adds .in to .reveal elements on scroll
    useScrollState.ts               Tracks scrolled (bool, >40px) + active section (string)

  components/
    shared/
      Placeholder.tsx               Hatch-textured image placeholder with variant colours

    layout/
      Navbar.tsx                    Fixed nav — transparent+cream over hero, frosted glass when scrolled
      Footer.tsx                    4-column footer on --ink background

    home/
      Hero.tsx                      Full-bleed background (Placeholder), forest overlay, 3-stat bar
      Strip.tsx                     Infinite marquee on --ink background (serif italic)
      Livestock.tsx                 5-column ruled grid — one card per species
      Shop.tsx                      3-column product grid — Naira prices, season tags
      Wholesale.tsx                 Dark forest section — numbered list + trade account card
      Gallery.tsx                   Bento CSS grid — explicit gridColumn/gridRow placement
      FAQ.tsx                       Accordion — maxHeight CSS transition, + icon rotates to ×
      Contact.tsx                   2-column — contact info left, validated form right

  pages/
    Home.tsx                        Owns useReveal + useScrollState, assembles all sections + layout
```

---

## Architecture decisions

### Single-page scroll, no router

The design is a single scrolling page with anchor-link navigation (`href="#section-id"`). `react-router-dom` has been removed from the import tree. Do not add it back unless a genuine multi-page requirement emerges.

### Where state lives

- `useScrollState` and `useReveal` are both called in `Home.tsx`. This is intentional — `useReveal` runs its IntersectionObserver after all child sections mount, catching every `.reveal` element in one pass.
- `Navbar` receives `active` and `scrolled` as props from `Home` — it is stateless about scroll.
- `FAQ` owns its own `openIdx` state locally.
- `Contact` owns its own `form`, `errors`, and `sent` state locally.

### CSS approach

One flat stylesheet. No CSS modules, no styled-components. Class names map directly to the design spec. Adding styles means editing `src/index.css`.

### Scroll reveal pattern

Any element that should animate in on scroll gets `className="reveal"` (and optionally `reveal-d1` through `reveal-d4` for stagger delay). The `useReveal` hook, called once in `Home.tsx`, observes all of them via a single `IntersectionObserver`.

---

## Section details

### Nav (`Navbar.tsx`)

- Fixed position, `z-index: 50`
- Over the hero: cream text on transparent background
- After 40px scroll (`scrolled` prop = true): `.scrolled` class adds frosted glass (`backdrop-filter: blur(14px)`) and flips all colours to dark-on-cream
- Mobile: hamburger shows at ≤880px; clicking a link closes the menu

### Hero (`Hero.tsx`)

- Moss-tinted full-bleed Placeholder (swap for a real `<img>` when photography arrives)
- Forest-green gradient overlay (`::before` pseudo-element)
- Stats bar at the bottom: 240ha / 6× / 38+ restaurants

### Strip (`Strip.tsx`)

- CSS `animation: scroll 38s linear infinite` — `translateX(-50%)`
- Items are doubled in the array so the loop is seamless

### Livestock (`Livestock.tsx`)

- 5 species: Chickens (olive), Turkeys (terra), Cattle (moss), Goats (ochre), Pigs (default)
- Grid is 5 columns on desktop, 2 on tablet, 1 on mobile

### Shop (`Shop.tsx`)

- 6 products with Naira (₦) prices
- Background is `--bg-2` (slightly darker than page)
- Images are `aspect-ratio: 4/3` Placeholders

### Wholesale (`Wholesale.tsx`)

- Background is `--forest` (darkest green)
- Left column: numbered list (Roman numerals) of B2B benefits
- Right column: card with CTA linking to `#contact`
- Placeholder variant `dark` used here so hatch texture reads on the dark background

### Gallery (`Gallery.tsx`)

- 12-column CSS grid, rows 120px tall (90px on tablet)
- Each item has explicit `gridColumn` and `gridRow` — e.g. `"1 / 6"` spans columns 1–5
- Captions appear on hover via `opacity` transition

### FAQ (`FAQ.tsx`)

- `openIdx` state: -1 = all closed, integer = that item open
- `maxHeight` animated via inline style: `0` → `240` (React applies `px`)
- The `+` icon rotates 45° (becomes `×`) when open, background fills terracotta

### Contact (`Contact.tsx`)

- Form validates: name (required), email (required + format regex), message (required, min 10 chars)
- On success: clears form, shows confirmation message for 5 seconds
- No backend wired — form submission is client-side only. Add a POST endpoint or form service (e.g. Formspree) when needed.

---

## Known gaps / next steps

1. **Real photography** — all images are `<Placeholder>` components. When farm photos arrive, replace each `<Placeholder label="..." variant="..." />` with `<img src={...} alt="..." />`. The surrounding CSS already handles sizing.

2. **Contact form backend** — the form validates but does not POST anywhere. Wire it to a backend route, Formspree, or EmailJS.

3. **Mobile gallery** — the bento grid uses explicit column/row placement which assumes a 12-column grid. On very small screens (≤480px) this can clip. Consider switching to a single-column stack at that breakpoint.

4. **Package cleanup** — `gsap`, `@studio-freight/lenis`, `react-router-dom`, and `lucide-react` are installed but unused. Remove them from `package.json` when convenient.

5. **Favicon** — `index.html` references `/favicon.svg` which should be a styled KenEthan mark (currently defaults to Vite's).

6. **SEO / meta** — og:image tag is absent. Add when the hero photograph is ready.
