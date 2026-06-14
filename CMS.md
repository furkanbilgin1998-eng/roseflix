# Roseflix Decap CMS

## Local editing

Run the website:

```bash
npm run dev
```

Run Decap's local Git proxy in a second terminal:

```bash
npm run cms
```

Open:

```text
http://localhost:3001/admin
```

Click **Login**. Local changes are written directly to `data/cms-content.json` and uploaded images are stored in `public/uploads`.

## Managed content

- Hero carousel slides and images
- Movies, posters, backdrops, cast, ratings, and synopsis
- Reviews, full review text, pros, and cons
- Blog articles, covers, summaries, and EN/TR body text
- Categories

## Image sizes

- Supported upload formats: `JPG`, `JPEG`, `PNG`, and `WebP`
- Hero and movie backdrops: `1920x1080`
- Movie posters: `1000x1500`
- Article covers: `1600x900`
- Keep hero subjects inside the central `1200x700` safe area.

## Production authentication

The production CMS uses Netlify Identity and Git Gateway.

1. In Netlify, open **Project configuration > Identity** and enable Identity.
2. Set registration to **Invite only**.
3. Open **Identity > Services > Git Gateway** and enable Git Gateway.
4. Invite editor email addresses from the Identity users page.

Editors can then sign in at `/admin` and publish changes to the connected GitHub repository.

Update `site_url` and `display_url` in `public/admin/config.yml` when the custom production domain is known.
