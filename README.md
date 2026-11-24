# Lynuel Arcenas — redesigned portfolio

Review-ready static source. Nothing has been published.

## Review locally

Open `dist/index.html` directly in a browser. No installation or build step is needed. Alternatively, from this folder run `python -m http.server 8765 --directory dist` and visit http://localhost:8765.

## Files

- `dist/index.html`: all content, navigation, projects, consulting stories, and eight experience roles.
- `dist/styles.css`: base layout.
- `dist/modern.css`: compact Inter typography, responsive spacing, and light/dark design tokens.
- `dist/theme.js`: system preference on first visit and remembered browser preference thereafter.
- `dist/fonts/`: locally served Inter variable font and license.
- `dist/favicon.svg`: original typographic monogram.
- `project-template.html`: reusable, unpublished project markup.
- `wrangler.jsonc`: retained Cloudflare static-assets deployment configuration.

The site has a small dependency-free theme script, no tracking, and no remote image or font dependencies. Inter is self-hosted with its SIL Open Font License. Native HTML disclosures support keyboard interaction and work offline. Contact links open the visitor’s email application.

## Content provenance

The supplied portfolio is the factual source. All eight role summaries, dates, and contribution bullets are retained verbatim. USTP teaching remains a separate visible section and is linked from the introduction and experience. Selected work is ordered Emerson, ABS-CBN, Aguila. The Emerson reuse estimate remains approximate. No new metrics, testimonials, employment relationships, certifications, or ASP.NET Core experience are claimed.

Consulting stories are editorial reorganizations of the three original stories into client need, contribution, and enabled work. Proprietary interfaces are not simulated. The abstract hero graphic is decorative, not a project screenshot.

The visitor-experience reference was https://bryllim.com/: clear introduction, section navigation, and progressively accessible detail. Typography, palette, layout, and artwork were designed independently.

## Add a future ASP.NET Core project

1. Copy the article from `project-template.html` into `.projects` in `dist/index.html`, after the current three projects.
2. Replace every bracketed placeholder with verified project facts. Describe your own contribution and distinguish shipped work from prototypes or work in progress.
3. Keep the initial summary short; place architecture, tradeoffs, and technical contributions in the disclosure. Add a repository or demo link only when public and authorized.
4. Update the sequence label. Existing styles automatically support new articles at mobile and desktop sizes. No framework or build changes are required.

Keep independent client work in the consulting section when that is its primary context. Add ASP.NET Core to the general profile only once supported by actual work.

## Cloudflare deployment — only after review

Upload the contents of `dist` to Cloudflare Pages as static files, or use the included Workers Static Assets configuration. With Node.js and Wrangler available, run `npx wrangler login`, then `npx wrangler deploy` from this folder. These commands publish the site; they were not executed during this redesign. The configuration points directly at `./dist`, with no build required. Choose the account and project name appropriate for your deployment.

## Verification

- Browser reviewed at desktop size and a 390px mobile viewport; mobile had no horizontal overflow.
- All internal fragment links resolve; eight timeline roles verified.
- Project and role disclosures activated using Enter; visible keyboard focus verified.
- Original role content compared against the supplied source.
- No live deployment or exhaustive assistive-technology audit performed.

## Typography and themes revision

Body and contribution text use 15px Inter; the introduction is 16–17px. Headings use compact sans-serif typography. Dates, tags, and small labels use a system monospace stack. Theme choice is stored in localStorage; if storage is unavailable, the toggle still works for the current page. Without JavaScript, the site follows system colors and hides the toggle. All content and native disclosures remain usable.

Verified at 1100px desktop and 390px mobile widths in light and dark themes, including expanded contributions, keyboard focus, local font loading, no mobile horizontal overflow, and theme persistence. Theme logic also checked with both simulated system preferences and saved overrides.

## Scroll and depth revision

New motion.css and motion.js provide CSS wireframe planes, scroll transforms, card entrance animation, pointer tilt, timeline progress, and section navigation highlighting. No 3D library or new package is required. Mobile disables tilt and hero parallax. Reduced motion removes animations and presents the complete timeline. Content stays visible without JavaScript. All existing copy is preserved. Desktop/mobile and both themes were browser-reviewed; reduced-motion control flow was checked separately with a simulated preference. Open ../review.html for the local responsive review when using the extracted output folder, or dist/index.html directly.

