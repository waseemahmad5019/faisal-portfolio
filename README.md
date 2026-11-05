# Faisal Raza – Portfolio (Next.js 15, Tailwind v4, Motion)

Run locally:  npm install && npm run dev   → http://localhost:3000
Production:   npm run build && npm start   (or deploy to Vercel: push to GitHub → Import Project)

Where to edit
- Text, experience, skills, projects, stats, social links: data/profile.ts
- Photo: replace public/faisal.png (same filename) or change P.photo
- Colors: app/globals.css (@theme block)
- Contact form: opens the visitor's email app (mailto). For a real backend, replace `send` in components/sections.tsx with a fetch to an API route / Formspree / Resend.
