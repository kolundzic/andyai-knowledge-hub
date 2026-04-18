# v0.9 Implementation Guide

## Goal

Turn the homepage from a promising concept surface into a cleaner, more credible, more public-facing front page.

## Section order

1. Hero
2. Mini proof strip
3. Showcase cards
4. Credibility band
5. Gallery / visual preview
6. Resource lanes
7. Future media block
8. Final CTA

## Required tonal shift

Reduce or remove:
- next-gen intelligence
- revolutionary ecosystem
- premium innovation layer
- futuristic vision messaging

Prefer:
- live
- structured
- public-facing
- versioned
- curated
- practical
- growing
- evidence-ready
- prepared

## Component targets

If your repo already contains similar components, reuse and tighten them rather than adding more surface area.

Recommended component alignment:
- HeroSection
- ProofStrip
- ShowcaseGrid
- CredibilityBand
- GalleryPreview
- ResourceLanes
- FutureMediaBlock
- FinalCTA

## Visual rules

- reduce decorative glow
- increase whitespace between major blocks
- shorten card titles
- make captions feel like artifact descriptions
- keep one dominant message per section
- let preview modules read as prepared placeholders, not fake finished assets

## Integration approach

### Option A — content-driven setup
If the site uses centralized content/config files, wire `content/homepage-v0.9.json` into the homepage renderer.

### Option B — component copy replacement
If the site uses inline section copy, use `docs/V0_9_COPY_PACK.md` section-by-section.

## Build checks

```bash
npm install
npm run build
```

## Git

```bash
git add .
git commit -m "Refine homepage showcase and credibility layer for v0.9"
git push origin main
```
