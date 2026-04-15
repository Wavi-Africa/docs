# wavi-docs (waviafrica.com/docs)

Astro 4 + Starlight. Static build served via nginx `alias` under `/docs` on the marketing domain — NOT a subdomain.

## Stack
- Astro 4
- `@astrojs/starlight`
- MDX content
- `base: '/docs'` in `astro.config.mjs` — critical, all assets must be `/docs`-prefixed

## Content
```
src/content/docs/
├── index.mdx
├── quickstart/   (install, first-sms, first-email, first-otp)
├── sms/
├── email/
├── otp/
├── whatsapp/     (coming-soon page)
└── api-reference/  (auto-generated from wavi-api OpenAPI in CI)
```

## API Reference Generation
- `scripts/gen_api_ref.py` pulls `openapi.json` from wavi-api and emits MDX pages
- Runs as part of docs build in CI before `astro build`

## Brand Rules (critical)
- Same tone as marketing
- Never reference internal service names (eSMS, patrol, mailer, Jasmin, Postfix)
- All examples use `api.waviafrica.com`
- No em/en dashes in content — hyphens only

## Dev
```bash
npm install
npm run dev     # http://localhost:4321/docs/
npm run build   # ./dist
```

## Deploy
- `rsync ./dist/ origin:/var/www/wavi-docs/`
- Nginx on waviafrica.com vhost:
  ```
  location /docs/ {
    alias /var/www/wavi-docs/;
    try_files $uri $uri/ $uri.html =404;
  }
  ```
