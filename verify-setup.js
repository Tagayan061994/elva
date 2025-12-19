#!/usr/bin/env node

/**
 * Simple verification script to check project setup
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying ELVA Clinic Project Setup...\n');

const checks = [
  {
    name: 'Package.json exists',
    check: () => fs.existsSync('package.json'),
  },
  {
    name: 'Next.js config exists',
    check: () => fs.existsSync('next.config.js'),
  },
  {
    name: 'TypeScript config exists',
    check: () => fs.existsSync('tsconfig.json'),
  },
  {
    name: 'Source directory exists',
    check: () => fs.existsSync('src'),
  },
  {
    name: 'App directory exists',
    check: () => fs.existsSync('src/app'),
  },
  {
    name: 'Components directory exists',
    check: () => fs.existsSync('src/components'),
  },
  {
    name: 'Content files exist',
    check: () =>
      fs.existsSync('src/content/en.json') &&
      fs.existsSync('src/content/arm.json') &&
      fs.existsSync('src/content/ru.json'),
  },
  {
    name: 'Styles directory exists',
    check: () => fs.existsSync('src/styles'),
  },
  {
    name: 'SCSS files exist',
    check: () =>
      fs.existsSync('src/styles/_variables.scss') &&
      fs.existsSync('src/styles/_mixins.scss') &&
      fs.existsSync('src/styles/globals.scss'),
  },
  {
    name: 'Middleware exists',
    check: () => fs.existsSync('src/middleware.ts'),
  },
  {
    name: 'All pages exist',
    check: () =>
      fs.existsSync('src/app/[locale]/page.tsx') &&
      fs.existsSync('src/app/[locale]/about/page.tsx') &&
      fs.existsSync('src/app/[locale]/services/page.tsx') &&
      fs.existsSync('src/app/[locale]/works/page.tsx') &&
      fs.existsSync('src/app/[locale]/doctors/page.tsx') &&
      fs.existsSync('src/app/[locale]/contact/page.tsx'),
  },
  {
    name: 'Key components exist',
    check: () =>
      fs.existsSync('src/components/Header/Header.tsx') &&
      fs.existsSync('src/components/Footer/Footer.tsx') &&
      fs.existsSync('src/components/Hero/Hero.tsx') &&
      fs.existsSync('src/components/LanguageSwitcher/LanguageSwitcher.tsx'),
  },
  {
    name: 'Public directory exists',
    check: () => fs.existsSync('public'),
  },
  {
    name: 'Robots.txt exists',
    check: () => fs.existsSync('public/robots.txt'),
  },
];

let passed = 0;
let failed = 0;

checks.forEach(({ name, check }) => {
  const result = check();
  if (result) {
    console.log(`✅ ${name}`);
    passed++;
  } else {
    console.log(`❌ ${name}`);
    failed++;
  }
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('\n🎉 All checks passed! Project is ready to use.\n');
  console.log('Next steps:');
  console.log('  1. Run: npm run dev');
  console.log('  2. Open: http://localhost:3000');
  console.log('  3. Start customizing content in src/content/\n');
  process.exit(0);
} else {
  console.log('\n⚠️  Some checks failed. Please review the errors above.\n');
  process.exit(1);
}

