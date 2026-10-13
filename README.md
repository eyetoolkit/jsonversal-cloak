# jsonversal-cloak

`https://cloak.jsonversal.com/` — jsonversal cloak subdomain.

## Status

Provisioned 2026-10-13. Cloudflare Pages project + DNS + GitHub repo are live.
Site currently serves a placeholder page; real content not yet built.

## Infrastructure

| Piece | Value |
|---|---|
| Cloudflare Pages project | `jsonversal-cloak` |
| Pages hostname | `jsonversal-cloak.pages.dev` |
| Custom domain | `cloak.jsonversal.com` |
| Zone | `jsonversal.com` (`82591a57fa474a57fc21d26ea6e5c558`) |
| Source repo | `eyetoolkit/jsonversal-cloak` |

Deploy: push to `main` — Cloudflare Pages redeploys automatically.

## Adding content

The current root is a plain static `index.html` with no build step. When real
content lands, decide the stack first (plain static vs Astro/Node), then align
the Pages build settings with it.