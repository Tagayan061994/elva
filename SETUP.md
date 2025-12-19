# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   - Navigate to http://localhost:3000
   - The app will automatically redirect to `/en` (default locale)

## Project Structure

```
elva/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/           # Localized routes (en, arm, ru)
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── about/          # About page
│   │   │   ├── services/       # Services page
│   │   │   ├── works/          # Works/Cases page
│   │   │   ├── doctors/        # Doctors page
│   │   │   └── contact/        # Contact page
│   │   ├── layout.tsx          # Root layout
│   │   └── sitemap.ts          # SEO sitemap
│   ├── components/             # React components
│   ├── content/               # JSON content files
│   ├── lib/                   # Utility functions
│   ├── styles/                # SCSS files
│   └── middleware.ts          # Locale routing
├── public/                    # Static assets
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file (optional):

```env
NEXT_PUBLIC_SITE_URL=https://elvaclinic.com
```

## Content Management

All content is stored in JSON files:
- `src/content/en.json` - English content
- `src/content/arm.json` - Armenian content
- `src/content/ru.json` - Russian content

Edit these files to update website content. The structure is consistent across all languages.

## Language Routes

- English: `/en` or `/` (default)
- Armenian: `/arm`
- Russian: `/ru`

All pages are available in all three languages.

## Styling

The project uses SCSS with:
- Variables (`_variables.scss`) - Colors, typography, spacing
- Mixins (`_mixins.scss`) - Reusable styles
- Module styles - Component-specific styles

Edit `src/styles/_variables.scss` to customize colors and design tokens.

## SEO

- Meta tags are automatically generated for each page
- Sitemap is available at `/sitemap.xml`
- Robots.txt is in `/public/robots.txt`
- Language alternates (hreflang) are included

## Troubleshooting

### TypeScript Errors
If you see TypeScript errors, make sure dependencies are installed:
```bash
npm install
```

### Build Errors
Clear the `.next` folder and rebuild:
```bash
rm -rf .next
npm run build
```

### Port Already in Use
Change the port:
```bash
npm run dev -- -p 3001
```

## Next Steps

1. Update content in JSON files
2. Add images to `/public` folder
3. Customize colors in `src/styles/_variables.scss`
4. Deploy to Vercel, Netlify, or your preferred hosting

