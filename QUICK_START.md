# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Navigate to: **http://localhost:3000**

The app will automatically redirect to `/en` (English).

## 🎯 What You'll See

- **Home Page**: Hero section, services, works gallery, about section
- **Navigation**: Header with menu and language switcher
- **Languages**: Switch between EN, ARM, RU using the language buttons

## 📝 Quick Customization

### Change Content
Edit JSON files in `src/content/`:
- `en.json` - English content
- `arm.json` - Armenian content
- `ru.json` - Russian content

### Change Colors
Edit `src/styles/_variables.scss`:
```scss
$primary-color: #2c5aa0;  // Change this
$secondary-color: #00a8cc; // Change this
```

### Add Images
Place images in `/public` folder:
```tsx
<Image src="/your-image.jpg" alt="Description" />
```

## 🌐 Available Routes

- `/en` or `/` - English (default)
- `/arm` - Armenian
- `/ru` - Russian

All pages work in all languages:
- `/[locale]` - Home
- `/[locale]/about` - About Us
- `/[locale]/services` - Services
- `/[locale]/works` - Works/Cases
- `/[locale]/doctors` - Doctors
- `/[locale]/contact` - Contact

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## ✅ Verify Setup

Run the verification script:
```bash
node verify-setup.js
```

## 🎨 Project Structure

```
elva/
├── src/
│   ├── app/[locale]/     # Pages (home, about, services, etc.)
│   ├── components/       # React components
│   ├── content/          # JSON content files
│   ├── lib/              # Utilities
│   └── styles/           # SCSS files
├── public/                # Static assets
└── package.json
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
npm install
```

**Build errors?**
```bash
rm -rf .next
npm run build
```

## 📚 More Information

- See `README.md` for full documentation
- See `SETUP.md` for detailed setup instructions
- See `PROJECT_SUMMARY.md` for project overview

---

**Ready to go! 🎉**

Start the dev server and begin customizing your dental clinic website.

