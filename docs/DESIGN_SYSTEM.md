# Platform Design System

## Direction

The interface should feel scientific, premium, calm, modern and credible. It should not resemble a supplement store, clinic funnel or speculative biohacking landing page.

## Theme — "Lab Signal" (2026-11-19)

`assets/theme.css` is loaded last on every page and defines the current palette: a dark, data-instrument look for evidence-based biohacking. Legacy tokens in `styles.css` and `molecule.css` are mapped onto it.

| Token | Value | Use |
|---|---|---|
| `--wm-bg` | `#07090c` | Page background, with a faint 48px grid |
| `--wm-surface` / `--wm-surface-2` | `#0d1116` / `#121820` | Cards, panels, table headers |
| `--wm-ink` / `--wm-ink-2` | `#f1f5f3` / `#c3ccc9` | Headings / body text |
| `--wm-muted` | `#8b9793` | Supporting text |
| `--wm-line` / `--wm-line-strong` | `#1d252e` / `#2b3540` | Borders |
| `--wm-signal` | `#b8f53d` | Brand, links, primary buttons, data highlights |
| `--wm-cyan` | `#3fe0f2` | Secondary accent |
| `--wm-amber` | `#f6b93b` | Warnings |
| `--wm-red` | `#ff5d6c` | Stop / risk states |

Eyebrows, labels, tags, table headers and metric readouts use the system monospace stack (`--wm-mono`); headings and body use the system sans stack. No web fonts are loaded. Primary buttons use dark text on `--wm-signal`.

## Design tokens

Current production tokens live in `assets/styles.css`:

- `--bg`: primary background.
- `--panel` and `--panel2`: elevated surfaces.
- `--text`: primary text.
- `--muted`: supporting text.
- `--accent`: scientific teal.
- `--accent2`: intelligence violet.
- `--line`: subtle borders.
- `--max`: maximum content width.
- `--radius`: shared card radius.
- `--shadow`: premium elevation.

Future rebranding should update tokens before rewriting individual components.

## Typography

- Use the system sans-serif stack until a deliberate font-loading strategy is approved.
- Large headings use tight line-height and negative letter spacing.
- Body copy should remain readable at 16px or larger.
- Eyebrows identify hierarchy and domain, not marketing urgency.

## Core components

### Header

- Sticky and translucent.
- Brand at left.
- Five or fewer primary destinations on desktop.
- Keyboard-accessible mobile menu.

### Hero

- One primary proposition.
- One supporting paragraph.
- Maximum two primary calls to action.
- Optional evidence or intelligence preview panel.

### Service card

- Domain label.
- Clear title.
- One-paragraph value explanation.
- Descriptive destination label.

### Evidence badge

Use labels that describe maturity, such as:

- Preclinical.
- Early human research.
- Phase I.
- Phase II.
- Phase III.
- Approved.
- Limited human evidence.

Do not use color alone to communicate evidence level.

### Scientific Perspective

A synthesis card containing:

- Strongest signal.
- Primary limitation.
- Research outlook.
- Practical interpretation.

### Timeline

- Date or development phase in the first column.
- Event and interpretation in the second column.
- Use text labels in addition to visual lines.

### Comparison table

- Must remain horizontally scrollable on narrow screens.
- Use meaningful row and column headers.
- Avoid rankings unless the comparison criteria support them.

### Membership CTA

- Explain what deeper access adds.
- Never imply unavailable features are already live.
- One clear destination to the membership page.

### Footer

Four groups where space permits:

- Brand and purpose.
- Platform.
- Research/resources.
- Educational boundary.

## Interaction standards

- Visible focus states.
- Touch targets approximately 44px or larger.
- Native links for navigation.
- Native buttons for actions.
- No fake forms or inert controls.
- Respect reduced-motion preferences.

## Responsive standards

- Desktop grids collapse from three or four columns to two, then one.
- Navigation becomes a controlled vertical menu.
- CTAs become full width on narrow screens.
- Tables use overflow containers.
- Text should not rely on fixed widths.

## Content density

Premium does not mean empty. Scientific pages may be information-rich, but should use:

- Strong section hierarchy.
- Short explanatory paragraphs.
- Cards for structured comparisons.
- Lists only where they improve scanning.
- Progressive disclosure only when it remains accessible.

## Brand migration readiness

The future MaxWellness transition should preserve:

- Color-token architecture.
- Component class names where practical.
- Public URLs until redirects are approved.
- Content hierarchy.
- Structured data.
- Accessibility behavior.

Do not scatter a future brand name across templates before the public migration plan is approved.