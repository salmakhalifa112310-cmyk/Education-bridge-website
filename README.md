# The Education Bridge Initiative — Website

A static, mobile-friendly website. No backend, database, or build step is required to host it — just upload these files to any static host (GitHub Pages, Netlify, Vercel, or your own web host).

## Files that still need real content

1. **GoFundMe link** — live: every "Donate Here" / "Donate Now" button points to `https://gofund.me/72216d547`. If the campaign URL ever changes, search every `.html` file for `gofund.me` and replace it (or open `build.py` in the source project, change `GOFUNDME_URL`, and re-run `python3 build.py`).
2. **Book drop-off addresses** — `donate-books.html` has two placeholder address cards clearly marked `[Address line 1 — to be added]`. Replace the bracketed text with the real addresses and hours.
3. **Progress bars** — `goals.html` has two progress bars currently at 0%. Update the inline `width:` percentage on each `.progress-fill` div and the "$0 raised so far" / "0 books collected so far" text as totals come in.
4. **Partner logos** — `partners.html` and the homepage use a simple icon placeholder for each partner (Books Between Kids, Room to Read, The Pangea Network). If you get real logo files, swap the icon `<div class="partner-logo">` content for an `<img>` tag.

## Events & News (events.html)

This page is built to be easy to hand-edit:
- Each event is one `<div class="event-card">` block, wrapped in `<!-- EVENT CARD START -->` / `<!-- EVENT CARD END -->` comments.
- Copy a block to add an event, delete a block to remove one, or edit the month/day/tag/title/description text directly.
- Same pattern for the "Latest News" cards further down the page.

## Structure

- `index.html`, `about.html`, `goals.html`, `get-involved.html`, `donate-books.html`, `partners.html`, `events.html`, `contact.html`, `donate.html` — the site pages
- `css/styles.css` — all styling (colors are defined as CSS variables at the top of the file if you ever want to adjust the palette)
- `js/main.js` — mobile menu toggle
- `assets/img/` — logo files and original illustrations (SVG, so they scale cleanly at any size)

## Logo files

- `logo-icon-transparent.png` — the book/person mark with a transparent background, used in the nav and footer (works on the dark navy bar)
- `logo-icon-navy.png` — the same mark on its navy background square, used as the favicon
- `logo-full-navy.png` — the full lockup (icon + wordmark) from your original upload, in case you want it somewhere standalone

Note: the wordmark in your uploaded logo image reads "INITATIVE" (missing an I). To avoid that typo appearing on the live site, the nav/footer use the icon mark only, paired with real HTML text ("The Education Bridge Initiative") instead of the text baked into the image. If you'd like the full image lockup used instead, get a corrected version of the logo file and swap it in.

## Contact info currently on the site

- General inquiries: edubridgeini@gmail.com
- Founder (Salma Khalifa): salmakhalifa112310@gmail.com
- Phone: 346-481-4614
- Instagram: @education.bridge.initiative
- Facebook: (linked per the URL provided)
