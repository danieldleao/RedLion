# Red Lion Labs // Specification V2.1

> **Where Architectural Precision Collides with Software Engineering**

**Red Lion Labs** is a static technical portfolio website engineered as an interactive hybrid of an **industrial control interface, architectural CAD/BIM blueprint, software development environment, and experimental digital laboratory**.

Live URL: [https://danieldleao.github.io/RedLion/](https://danieldleao.github.io/RedLion/)

---

## 📐 Brand & Design Specification

Built in strict adherence to the **Red Lion Labs Design Manual V2.1**:

- **Color Hierarchy**:
  - `RED` (`#FA0019`): Primary brand accent, titles, `<H1>`/`<H2>`, active markers, logo.
  - `YELLOW` (`#FA9600`): Secondary accent, `<p>` emphasis, telemetry badges.
  - `DARK RED` (`#7D0019`): WCAG-compliant accent for Light Mode.
  - `GRAPHITE` (`#191919`): Default dark canvas background.
  - `ICE WHITE` (`#C8C8C8`): General body text on dark canvas; light mode canvas.
- **Typography Directive**:
  - **Orbitron**: Logo, brand identity, main headings, and instrument titles.
  - **Atkinson Hyperlegible Mono**: Paragraphs, body text, UI components, and monospaced data.

---

## ⚡ Core Features & Interactive Instruments

1. **AutoCAD CAD Crosshair Cursor**:
   - Technical crosshair with reticle target box and real-time `X / Y` coordinate HUD readout.
   - CAD-snap target acquisition over interactive UI elements.
   - Spark particle physics burst on click and hover.
   - Gracefully disabled on touch devices and respects `prefers-reduced-motion`.

2. **3-Second Diagnostic Boot Sequence**:
   - Atmospheric startup sequence with glowing circuit vectors, progress logging, and instant skip fallback.

3. **The Playground**:
   - Real-time parametric code & geometry workbench with live sliders for Harmonic Frequency, Amplitude, Circuit Nodes, and Torsion.

4. **The Blueprint**:
   - Interactive CAD/BIM architectural schematic with layer toggles (Structural Grid, MEP Circuits, Dimensions, Code Nodes).

5. **Dynamic GitHub API Portfolio (Dual Presentation Modes)**:
   - **Spiral Loop View (Default)**: 3D Archimedean spiral trajectory with depth scaling, rotating radar canvas, and architectural spec sheets.
   - **List Matrix View**: High-density engineering matrix with real-time search and language filters.
   - Session-persisted mode switcher (`sessionStorage`).

6. **Particle Logo Canvas Reconstitution**:
   - Real-time HTML5 Canvas particle simulator reconstructing the Red Lion circuit lion emblem with Hooke's Law spring physics and mouse perturbation.

7. **Technical Contact Console**:
   - Transmit form with validation, mailto fallback, spatial coordinates (Ajax, ON), and one-click copy buttons.

---

## 🛠️ Technology Stack

- **Framework**: [Astro v5](https://astro.build/) (Static Site Generation)
- **Styling**: Vanilla CSS3 Custom Properties (Design Manual tokens, modular grids, scanlines, responsive layouts)
- **Logic**: ES6+ Vanilla JavaScript & HTML5 Canvas physics
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 Local Development

```bash
# Clone repository
git clone https://github.com/danieldleao/RedLion.git

# Install dependencies
npm install

# Start local development server
npm run dev

# Build static production bundle
npm run build

# Preview static build locally
npm run preview
```

---

## 📍 Coordinates

- **Developer**: Daniel Doro Leão
- **Location**: Ajax, Ontario, Canada (`43.8509° N, 79.0204° W`)
- **GitHub**: [github.com/danieldleao](https://github.com/danieldleao)
- **LinkedIn**: [linkedin.com/in/danieldoroleao](https://www.linkedin.com/in/danieldoroleao/)
- **Archive**: [sites.google.com/view/danieldoroleao](https://sites.google.com/view/danieldoroleao)

---

*© 2026 Red Lion Labs. Specification Manual V2.1. All systems operational.*
