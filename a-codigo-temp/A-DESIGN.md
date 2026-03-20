# Design System Document: Kinetic Sanctuary

## 1. Overview & Creative North Star: The Kinetic Sanctuary

The "Kinetic Sanctuary" is a departure from the rigid, high-intensity aesthetics typical of sports management. It acknowledges that elite performance requires elite recovery. This design system treats the interface as a high-end editorial space—part athletic journal, part wellness retreat.

**The Creative North Star: "Organized Breath"**
The layout must feel like it is exhaling. We break the traditional "boxed-in" dashboard look by utilizing intentional asymmetry, oversized margins, and a refusal to use structural lines. By layering sage greens and blush tones on an off-white canvas, we create a professional environment that reduces cognitive load for athletes and coaches alike.

---

## 2. Colors & Surface Philosophy

The palette is rooted in nature and skin tones, designed to lower cortisol while maintaining professional authority.

- **Primary (`#4c6455` - Sage Green):** Used for focus, growth, and primary actions. It represents the "Grounding" force of the app.
- **Secondary (`#795555` - Muted Blush):** Used for recovery-focused data, athlete bios, and soft highlights.
- **Neutral (`#faf9f7` - Off-White):** The expansive "Air" of the layout.

### The "No-Line" Rule

Explicitly prohibited: 1px solid borders used to separate sections or cards. Boundaries must be defined solely through background color shifts. To separate a sidebar from a main content area, use `surface-container-low` against the `background`. To highlight a dashboard widget, use `surface-container-lowest` on a `surface-container` background.

### Surface Hierarchy & Nesting

Treat the UI as a series of fine paper sheets.

- **Base:** `background` (#faf9f7)
- **Level 1 (Sections):** `surface-container-low` (#f4f3f1)
- **Level 2 (Active Cards):** `surface-container-lowest` (#ffffff)
  This nesting creates a sense of "physical" organization without the clutter of lines.

### The "Glass & Gradient" Rule

To add soul to the interface, use Glassmorphism for floating navigation bars or modal overlays.

- **Effect:** Apply `surface` color at 70% opacity with a `20px` backdrop-blur.
- **Signature Texture:** Use a subtle linear gradient (from `primary` to `primary_container`) for main CTA buttons to give them a three-dimensional "pressed leaf" quality.

---

## 3. Typography: The Editorial Voice

We use **Manrope** exclusively. Its geometric yet humanist qualities balance athletic precision with wellness.

- **Display (Display-LG/MD):** Used for "Hero" moments—like an athlete's name or a course title. These should be tracked slightly tighter (-2%) to feel like a premium magazine header.
- **Headlines & Titles:** Use `headline-md` for section headers. Ensure there is massive vertical clearance (spacing-12 or 16) above headlines to let the content breathe.
- **Body:** `body-lg` is your workhorse. Maintain a line height of 1.6 to ensure readability for athletes who may be viewing schedules on the move.
- **Labels:** `label-md` is for data points (e.g., "Heart Rate," "Duration"). Use these sparingly in `primary_fixed_variant` for a sophisticated, low-contrast look.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "tech-heavy." In this design system, depth is organic.

- **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural lift.
- **Ambient Shadows:** If an element must float (like a FAB or a Tooltip), use an extra-diffused shadow: `offset: 0 8px, blur: 24px, color: rgba(76, 100, 85, 0.06)`. Note the color—it is a tinted sage, not grey.
- **The "Ghost Border" Fallback:** For accessibility in form fields, use the `outline-variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Bespoke Implementation

### Buttons

- **Primary:** Solid `primary` background, `on-primary` text. `ROUND_EIGHT` (0.5rem) corners. No border.
- **Secondary:** `secondary_container` background with `on-secondary-container` text. Use this for recovery or "soft" actions.
- **Tertiary:** No background. `primary` text weight 600.

### Input Fields

- **Style:** Background `surface-container-highest` with a bottom-only "Ghost Border" (15% opacity `outline-variant`).
- **State:** On focus, the bottom border transitions to 100% opacity `primary`, and the background shifts to `surface-container-lowest`.

### Cards & Lists

- **Strict Rule:** No dividers. Separate list items using `spacing-2.5` of vertical white space.
- **Interactive Cards:** Should have no shadow in their default state. On hover, transition the background from `surface-container-low` to `surface-container-lowest` and apply a soft Ambient Shadow.

### Chips (The "Vitals" Chips)

- Used for sports categories or status. Use `tertiary_fixed` background with `on-tertiary-fixed` text. The corners should be `full` (pill-shaped) to contrast against the `ROUND_EIGHT` logic of the cards.

### Progress Indicators (The "Breath" Bar)

- For course completion, use a thick (8px) bar with `primary_fixed` as the track and `primary` as the indicator. Round the ends completely.

---

## 6. Do’s and Don’ts

### Do:

- **Do** embrace wide gutters. If you think there’s enough white space, add 20% more.
- **Do** use asymmetrical layouts. For example, a left-aligned headline with a right-aligned data visualization creates a dynamic "kinetic" energy.
- **Do** use `secondary` (Blush) to highlight human-centric data (e.g., mood, sleep quality, personal notes).

### Don't:

- **Don't** use high-contrast black (#000000). Always use `on-surface` (#1a1c1b).
- **Don't** use 1px dividers to separate content blocks. Use the spacing scale (`spacing-10` or `12`).
- **Don't** use sharp 90-degree corners. Everything must adhere to the `ROUND_EIGHT` or `full` rounding logic to maintain the "Wellness" vibe.
- **Don't** overcrowd the dashboard. If a user has 10 courses, show the 3 most "Tranquil" (upcoming/current) and hide the rest in a "Deep Storage" surface.
