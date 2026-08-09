# Cozy Aesthetic Portfolio — Design Prompt

## Overall Mood

A warm, softly-lit digital space that feels like a handwritten journal meets a modern design studio. Think golden-hour light through a window, textured paper, warm shadows, and gentle motion — not a cold corporate SaaS site. The user should feel like they're settling into a comfortable, personal space rather than browsing a resume.

---

## Color Palette

**Base / Background**

- `#FDF8F3` — warm cream (primary background)
- `#F5EDE4` — soft beige (secondary background, cards)
- `#2B2420` — deep espresso brown (primary text)

**Accent Colors**

- `#D97B4F` — warm terracotta (primary accent, CTAs, links)
- `#E8A87C` — soft peach (hover states, highlights)
- `#8B9D77` — muted sage green (secondary accent, tags/badges)
- `#C9A15E` — muted gold (decorative accents, borders, icons)

**Supporting Neutrals**

- `#DCD3C6` — warm taupe (dividers, subtle borders)
- `#A69885` — muted mocha (secondary text, captions)
- `#FFFFFF` at 40–60% opacity — used sparingly for glassmorphism cards over textured backgrounds

**Dark Mode Variant (optional toggle)**

- `#1C1712` — near-black warm brown (background)
- `#2E2620` — card background
- `#F0E6D8` — primary text
- `#E8A87C` — accent stays consistent for warmth continuity

---

## Typography

- **Headings:** A serif with character — "Fraunces," "Playfair Display," or "Lora" for warmth and a slightly editorial, handcrafted feel. Slightly oversized, generous line-height.
- **Body:** A clean humanist sans — "Inter," "Manrope," or "Work Sans" for readability against the serif headers.
- **Accent/Handwritten touches:** A script font like "Caveat" or "Kalam" used sparingly for small annotations, taglines, or "hand-drawn" underlines beneath section titles — not for body copy.

---

## Layout & Structure

1. **Hero Section**
   - Large serif greeting ("Hi, I'm [Name] 🌾" or similar warm opener)
   - Soft blurred organic shapes (blob gradients in terracotta/sage) floating gently in the background with slow parallax drift
   - A subtle grain/noise texture overlay (~3–5% opacity) across the whole page for that "printed paper" feel
   - CTA button with a soft pill shape, warm gradient fill, and a gentle shadow that grows on hover

2. **About Section**
   - Two-column layout: warm-toned photo (rounded corners, soft drop shadow, maybe a slight rotation of 2–3° for a "pinned photo" effect) beside a short, personal bio
   - Small decorative elements: a dashed underline, a small illustrated icon (coffee cup, plant, sun) drawn in a hand-sketch style

3. **Projects/Work Section**
   - Cards with soft beige backgrounds, warm inner shadow, rounded corners (16–24px radius)
   - On hover: card lifts slightly (`translateY(-6px)`), shadow deepens and warms in tone, and a soft glow (terracotta at low opacity) appears behind the card
   - Project thumbnails have a subtle color-tint overlay in the primary palette that fades on hover to reveal true colors

4. **Skills/Tools Section**
   - Soft pill-shaped tags with sage or gold backgrounds, gentle bounce-in animation on scroll into view (staggered by 50–80ms per tag)

5. **Contact/Footer**
   - Warm gradient background transition (cream → soft terracotta glow at the very bottom)
   - Social icons that gently "wiggle" or scale up with a spring easing on hover

---

## Animation & Interaction Details

**Cursor Effects**

- Custom cursor: a small soft circle (terracotta, ~20px, blurred edge) that trails the real cursor with slight lag (use spring physics, not linear easing — feels organic)
- On hoverable elements (buttons, links, project cards): cursor expands to ~40px and shifts to a lighter peach tone, optionally with the cursor label changing to "View" or "Open"
- Optional: a very subtle particle trail (tiny warm-toned dots) that fades out behind cursor movement — use sparingly so it doesn't feel busy

**Scroll Animations**

- Fade-up + slight scale (from 0.96 to 1) as sections enter viewport — stagger children (text, then image, then CTA) by 100–150ms
- Parallax on background blobs: move slower than foreground content (0.3–0.5x scroll speed) for depth
- A thin progress indicator (terracotta line) tracking scroll position, styled like a filling ink line rather than a hard progress bar

**Hover Micro-interactions**

- Buttons: background color shifts from terracotta to peach over 250ms ease-out, with a subtle scale (1.02) and shadow bloom
- Links: animated underline that draws itself left-to-right (like ink filling in) rather than a static underline
- Images: slight zoom (scale 1.05) with a warm color-overlay fade on hover
- Cards: 3D tilt effect on mouse move (subtle, max 4–6° rotation) using mouse position relative to card center — creates a "held in hand" feel

**Page Transitions**

- Soft cross-fade with a slight warm color wash (terracotta at 10% opacity) sweeping across the screen between page/section transitions
- Loading state: a small animated illustration (steam rising from a coffee cup, or a sun slowly rising) rather than a generic spinner

**Texture & Depth**

- Consistent soft grain/noise overlay across the whole site for a tactile, printed feel
- Layered soft shadows (multiple low-opacity shadows stacked, not one hard shadow) on cards and buttons for that "soft glow" cozy depth
- Occasional torn-paper or brush-stroke SVG dividers between sections instead of hard straight lines

---

## Technical Notes (if building in React/Next.js)

- Use `framer-motion` for scroll-triggered fade/scale animations and the custom cursor
- Use CSS `mix-blend-mode` or SVG filters for the grain texture overlay
- Custom cursor should use `position: fixed` with `transform: translate3d()` updated via `requestAnimationFrame`, and disable on touch devices
- Respect `prefers-reduced-motion` — fall back to simple opacity fades with no parallax/cursor effects for accessibility

---

## One-line Summary Prompt (for AI design tools)

"Design a cozy, warm modern portfolio website with cream (#FDF8F3) and terracotta (#D97B4F) tones, serif headings (Fraunces) paired with clean sans body text, soft blob-shaped background gradients, grain texture overlay, custom trailing cursor with spring physics, 3D-tilt project cards on hover, ink-style animated underlines on links, and gentle scroll-triggered fade-up animations — overall feeling like a handwritten journal meets a modern design studio."
