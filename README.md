# ELVA Dental Clinic Website

A modern, SEO-optimized Next.js website for ELVA Dental Clinic with multi-language support (EN, ARM, RU).

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **SCSS** - Styling with variables, mixins, and best practices
- **Static Site Generation** - All content is static, no API calls

## Features

- ✅ Multi-language support (English, Armenian, Russian)
- ✅ SEO optimized with meta tags, sitemap, and robots.txt
- ✅ Responsive design with mobile-first approach
- ✅ Modern UI inspired by professional dental clinics (M.Vision style)
- ✅ Static content from JSON files
- ✅ No backend/API - fully static
- ✅ Language switcher component
- ✅ Professional color scheme and typography

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website. The app will automatically redirect to `/en` (default locale).

## Project Structure

```
elva/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/           # Localized routes
│   │   │   ├── about/         # About page
│   │   │   ├── services/      # Services page
│   │   │   ├── works/         # Works/Cases page
│   │   │   ├── doctors/       # Doctors page
│   │   │   ├── contact/       # Contact page
│   │   │   └── page.tsx       # Home page
│   │   ├── layout.tsx         # Root layout
│   │   └── sitemap.ts         # SEO sitemap
│   ├── components/             # React components
│   │   ├── Header/            # Navigation header
│   │   ├── Footer/            # Site footer
│   │   ├── Hero/              # Hero section
│   │   ├── Services/          # Services showcase
│   │   ├── Works/             # Works gallery
│   │   ├── AboutSection/      # About section
│   │   └── LanguageSwitcher/  # Language selector
│   ├── content/               # JSON content files
│   │   ├── en.json           # English content
│   │   ├── arm.json          # Armenian content
│   │   └── ru.json           # Russian content
│   ├── lib/                   # Utility functions
│   │   └── content.ts        # Content loader
│   ├── styles/               # SCSS files
│   │   ├── _variables.scss  # SCSS variables
│   │   ├── _mixins.scss      # SCSS mixins
│   │   └── globals.scss      # Global styles
│   └── middleware.ts         # Locale routing middleware
├── public/                   # Static assets
│   └── robots.txt           # SEO robots file
└── package.json
```

## Pages

- **Home** (`/en`, `/arm`, `/ru`) - Hero section, services showcase, featured works
- **About Us** (`/[locale]/about`) - Clinic information, mission, vision, values
- **Services** (`/[locale]/services`) - Detailed service offerings
- **Works** (`/[locale]/works`) - Before/after case studies
- **Doctors** (`/[locale]/doctors`) - Team members and qualifications
- **Contact Us** (`/[locale]/contact`) - Contact form and location information

## SCSS Architecture

The project uses a well-organized SCSS structure:

- **Variables** (`_variables.scss`): Colors, typography, spacing, breakpoints
- **Mixins** (`_mixins.scss`): Reusable styles (buttons, cards, responsive utilities)
- **Module Styles**: Component-specific SCSS modules
- **Best Practices**: BEM-like naming, modular architecture, responsive design

## Content Management

All content is stored in JSON files in `src/content/`:
- `en.json` - English content
- `arm.json` - Armenian content
- `ru.json` - Russian content

To update content, simply edit the corresponding JSON file. The structure is consistent across all languages.

## SEO Features

- ✅ Meta tags for each page
- ✅ Open Graph tags for social sharing
- ✅ Sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ Language alternates (hreflang tags)
- ✅ Semantic HTML structure
- ✅ Accessible navigation

## Language Support

The website supports three languages:
- **English (EN)** - Default locale at `/en`
- **Armenian (ARM)** - Available at `/arm`
- **Russian (RU)** - Available at `/ru`

Language switching is handled via the LanguageSwitcher component in the header. The middleware automatically handles locale routing.

## Environment Variables

Create a `.env.local` file (optional):

```env
NEXT_PUBLIC_SITE_URL=https://elvaclinic.com
```

## Deployment

The site is fully static and can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

Build command: `npm run build`
Output directory: `.next`

## Development Notes

- All pages use static generation (no server-side rendering)
- Content is loaded from JSON files at build time
- No API calls or external dependencies for content
- Responsive design tested for mobile, tablet, and desktop
- TypeScript for type safety
- ESLint for code quality

