# CUSail Website Redesign: "Dark Editorial" — Design Spec

**Date:** 2026-11-09
**Status:** Approved, ready for implementation planning
**Scope:** Full site, all 8 pages, in one pass
**Branch:** `redesign-dark-editorial` (off `master`, PR workflow, never commit directly to `master`)

## Context

CUSail's current site (plain HTML/CSS/JS, no build tooling, served via GitHub Pages at cusail.com) uses a dark charcoal background (`#323232`), white text, and a teal accent (`#65C8D0`), set in Open Sans. The user wants a redesign informed by two sets of references:

- **Cornell team sites** (CUAUV, Cornell Electric Vehicles, Cornell AppDev) — common thread: minimalist black/white base with one accent color, bold sans headlines, horizontal top nav ending in an "Apply"-style CTA, full-width photographic hero, vertical section-based scroll. See memory `cornell-team-website-designs`.
- **Blue Origin, Galaxy, Anthropic** — stark black/white with massive bold type and dramatic full-bleed hero imagery (Blue Origin); dark navy/black fintech-sleek with restrained gold/warm accent and heavy negative space (Galaxy); warm cream/serif editorial calm (Anthropic, used only for spacing/structure inspiration, not palette, since the site stays dark).

Decision: **keep the dark base** (reject switching to the Cornell references' light/white base), and lean toward a **Blue Origin / Galaxy blend** — stark dark palette, bold type, dramatic photo/video moments, restrained negative space — while preserving CUSail's existing teal brand accent rather than introducing a new one.

New raw assets available for this redesign:
- `C:\Users\justi\Downloads\Videos-20261110T025208Z-1-002.zip` — 329 files, ~2GB, folders: top-level action shots, `2026 Headshots/`, `Boba Social 4.24.6/`, `Celsius Sponsorship/`, `Competition Photos/`, `Team Photos/`.
- `C:\Users\justi\Downloads\Video Project.mp4` — 22.3s, 1920x1080, H.264/AAC, 56.7MB.

## Design tokens

| Token | Value | Notes |
|---|---|---|
| `--bg` | `#0a0a0a` | Primary background (darker than current `#323232`) |
| `--bg-raised` | `#161616` | Cards, nav, footer panels |
| `--text` | `#f2f2f2` | Body/headline text (off-white, not pure white) |
| `--text-muted` | `#9a9a9a` | Secondary/caption text |
| `--accent` | `#65C8D0` | Existing CUSail teal — links, CTA pill, highlights, active nav state |
| `--accent-dim` | `#3d7a80` | Hover/pressed states, subtle borders |
| Headline font | Open Sans, weight 800 (unchanged font family — avoids adding a font-loading dependency); hero scale increases from ~110px to ~140px desktop for more Blue-Origin-style boldness | |
| Spacing | ~1.5x current vertical section rhythm | More negative space, Galaxy-style restraint |

These tokens get defined as CSS custom properties in `css/all.css` and consumed by every page's CSS file, replacing hardcoded hex values currently scattered across `css/{all,index,ourteam,recruitment,fleet,sponsorship,gallery,contact,givingday}.css`.

## Navigation & footer

- Top nav keeps its current links (About, Our Team, Recruitment, Fleet, Sponsorship, Gallery, Contact Us, Giving Day) and current responsive hamburger behavior below 750px — no structural/JS change.
- One visual change: the primary CTA link (Recruitment, labeled "Join CUSail") renders as a filled teal pill button, visually distinct from the other plain-text links — this is the one CTA pattern shared by all three Cornell references.
- Nav background moves from `#292828` to `--bg-raised`, with a 1px hairline bottom border instead of the current solid border (Galaxy-style restraint).
- Footer: no structural change, just retokened to the new palette (bg, text, accent links).

## Homepage (`index.html`)

- **Hero**: replaces the current static `#hero-image` div with a full-bleed `<video>` background:
  - `autoplay muted loop playsinline`, `object-fit: cover`, fills viewport width/height.
  - Source: a trimmed/re-encoded version of `Video Project.mp4` — target well under the raw 56.7MB (aim for roughly 5–8MB via reduced bitrate/resolution, since it's a background loop, not a focal-point video).
  - `poster` attribute set to an extracted first frame, for the no-autoplay/slow-connection fallback.
  - Dark gradient overlay (black → transparent, strongest near the headline) to keep "CUSail" + tagline legible on top.
  - Teal pill CTA button beneath the headline (e.g. "Join CUSail" or "Our Fleet"), echoing the nav pill.
  - Scope: homepage hero **only** — no video reuse on other pages; other pages keep static photo heroes/imagery from the new zip.
- **About/metrics/photo-grid sections**: keep current structure (About text → 3 metrics → 4-photo grid), retoken colors/spacing; swap in fresher photos from the new asset zip where current ones are weak (candidates shortlisted during implementation, confirmed with user before finalizing).
- **Events carousel**: keep the existing infinite-loop carousel JS as-is (`index.html`'s inline script + `js/index.js`) — it works; only the card visual styling is retokened.
- **Goals section**: keep structure, retoken; consider swapping in new imagery if better candidates exist in the zip.

## Other pages (retoken + targeted asset refresh, no structural rebuild)

| Page | Treatment |
|---|---|
| `app/ourteam.html` | Retoken card grid; swap in `2026 Headshots/` photos (compressed per the PR #33 recipe: resize to max 900px long side, JPEG quality 82, Pillow). |
| `app/recruitment.html` | Retoken; keep existing "Join CUSail" box + info-session content as-is — this page already has the CTA-box pattern the nav pill echoes. |
| `app/fleet.html` | Retoken; candidate for `Competition Photos/` imagery. |
| `app/sponsorship.html` | Retoken, with emphasis on bigger/bolder stat callouts and reduced clutter (this is a credibility/pitch page, benefits most from Blue-Origin boldness). |
| `app/gallery.html` | Retoken grid; refresh photo set using `Boba Social`, `Celsius Sponsorship`, `Competition Photos`, `Team Photos` folders. |
| `app/contact.html`, `app/givingday.html` | Lightest touch — retoken only, no layout change. |

## Asset pipeline

1. Unzip `Videos-20261110T025208Z-1-002.zip` into a scratch location (not the repo) for review.
2. Shortlist candidates per page/section (hero video trim point, refreshed team headshots, 1–2 photos each for gallery/fleet/sponsorship) and confirm picks with the user before finalizing — avoid silently swapping photos without sign-off.
3. Compress all raster images before committing: resize to max 900px long side, JPEG quality ~82 (Pillow), matching the recipe already used in PR #33 to avoid repeating the 317MB headshot-folder problem.
4. Video: extract/trim the chosen loop segment and re-encode at reduced bitrate/resolution via ffmpeg, targeting a web-reasonable file size (~5–8MB) rather than committing the raw 56.7MB file. Generate a poster-frame JPEG from the same segment.

## Technical approach

- No framework/build-tool change — site stays plain HTML/CSS/JS, same file layout.
- `css/all.css` gains the CSS custom property tokens and the retokened shared rules (nav, footer, section headers); each page's existing CSS file (`index.css`, `ourteam.css`, etc.) is adjusted to consume the tokens and for any page-specific layout tweaks called out above.
- No JS behavior changes except what's needed to wire up the new `<video>` hero element (no change to the existing carousel/hamburger logic).

## Rollout

- Work happens on a new branch `redesign-dark-editorial`, created off current `master` (commit `8fc493e` as of 2026-11-09).
- Preview each page locally via `file://` in a browser as it's built.
- Open a PR into `master` when ready; merge only after explicit user confirmation (same safe-editing workflow documented in `CUSail_Website_Handoff.md` from the prior session — branch → PR → merge, GitHub Pages auto-rebuilds `master` after merge).
- This spec covers design only; asset curation and page-by-page build order will be sequenced in the implementation plan.

## Out of scope

- No restructuring of page content/copy beyond what's described above (e.g., leadership roster, sponsorship packet content, fleet technical descriptions are unchanged).
- No new pages, no removal of existing pages/sections.
- No font-family change (staying on Open Sans).
- No framework/build-tool adoption.
- Pre-existing minor HTML quirks noted in the prior handoff (stray quote in an `alt` attribute, inconsistent `member-card-info` nesting) are not addressed by this redesign unless they block a specific retoken/layout change.
