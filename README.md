# Amy Zhao

Personal site for Amy Zhao, a computer science student at UCLA. It includes her resume, projects, GitHub, and LinkedIn.

The layout started from the [BSE portfolio template](https://github.com/bse-at-ucla/pww-clouds-template).

## Run it locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## What to edit

Almost all of the words on the page live in `app/config.ts`: name, bio, education, experience, projects, and contact links.

- Resume: `public/resume.pdf`
- Headshot: `public/headshot.jpg`

GitHub, LinkedIn, and the email address are set once in the `ME` object. The header, contact section, and footer reuse those links.
