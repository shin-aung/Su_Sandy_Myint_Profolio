# Su Sandy Myint – Personal Profile Website

A warm, pastel-themed personal profile website built with **React + TypeScript + Vite + Tailwind CSS**.

## ✨ Features

- Responsive design (desktop, tablet, mobile)
- Smooth scroll-reveal animations
- Floating hero decorations
- Animated timeline for Education
- Skill badge grid with hover effects
- Roadmap-style Goals section
- Contact section with email buttons

## 🎨 Design

- **Theme:** Warm pastel, scrapbook-inspired
- **Colors:** Cream, Soft Peach, Dusty Rose, Olive Green, Warm Brown
- **Fonts:** Playfair Display (headings) + Poppins (body)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm or pnpm

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

### Deploy

Recommended: **Vercel** or **Netlify** (free tier available)

- Push to GitHub, then connect the repository to Vercel/Netlify
- Build command: `npm run build`
- Output directory: `dist`

## 📁 Project Structure

```
sandy-profile/
├── public/
│   ├── images/
│   │   ├── sandy-professional.jpg   ← Hero & contact photo
│   │   └── sandy-about.jpeg         ← Additional photo (optional use)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutMe.tsx
│   │   ├── Education.tsx
│   │   ├── WorkExperience.tsx
│   │   ├── Skills.tsx
│   │   ├── CurrentlyStudying.tsx
│   │   ├── ThingsILove.tsx
│   │   ├── Values.tsx
│   │   ├── Goals.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── profile.ts               ← All content lives here
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## 📝 Updating Content

All content is centralised in `src/data/profile.ts`. Edit that file to update:
- Name, bio, email
- Education history
- Work experience
- Skills
- Hobbies, values, goals

## 📜 License

Personal use only – Su Sandy Myint
