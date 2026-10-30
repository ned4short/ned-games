# Ned Games

Ned's Arcade: a hub for six free browser games by Ned. Plain HTML, CSS and JavaScript, no build step.

**Live site:** https://games.nedwebservices.com/

Rebuilt from the original React/Babel page on nedgames.replit.app as static HTML so search engines can read every word.

## Files

| File | What it is |
|---|---|
| `index.html` | The arcade page: header, hero, game cards, about, filter banner, contact |
| `privacy.html` | Privacy policy |
| `style.css` | All styles (phone layout below 768px wide) |
| `app.js` | Arcade sound toggle (off by default, remembered in the browser) |
| `assets/` | Logo/favicons, share image (`og-image.jpg`) and game screenshots (`screens/*.webp`) |
| `sitemap.xml`, `robots.txt` | For search engines |
| `404.html` | "Game over" page-not-found page |
| `CNAME`, `.nojekyll` | GitHub Pages custom domain and settings |

## Editing games

Game cards are in `index.html` inside `<div class="grid">`. Each card's color comes from its `style="--c:…"` value, and its screenshot is `assets/screens/<id>.webp`. If you change the games, also update the game list in the JSON-LD block in `<head>`.

## Tracking

Ned Traffic site ID `8035ef31-9093-4702-ae8d-4995232cfbb9` (the same one the Replit version used, so visit history continues).

## Hosting

GitHub Pages from the `main` branch, custom domain `games.nedwebservices.com` (DNS: CNAME `games` → `ned4short.github.io`).
