# 🚀 Deploy via Vercel CLI

## Quick Deploy Command

Run this in your terminal:

```bash
cd /Users/hakobtagayan/Desktop/elva
npx vercel
```

## Step-by-Step Process

### Step 1: Navigate to Project
```bash
cd /Users/hakobtagayan/Desktop/elva
```

### Step 2: Deploy
```bash
npx vercel
```

### Step 3: Follow the Prompts

When you run `npx vercel`, you'll see prompts like:

1. **Set up and deploy?** → Type `Y` and press Enter
2. **Which scope?** → Select your account (use arrow keys, press Enter)
3. **Link to existing project?** → Type `N` (for new project)
4. **What's your project's name?** → Press Enter (uses `elva-clinic`)
5. **In which directory is your code located?** → Press Enter (uses `./`)
6. **Want to override the settings?** → Type `N`

### Step 4: Wait for Deployment

Vercel will:
- Upload your files
- Install dependencies
- Build your project
- Deploy to a random URL

### Step 5: Get Your URL

After deployment completes, you'll see:
```
✅ Production: https://elva-clinic-xxxxx.vercel.app
```

**Copy this URL!** This is your random test URL.

---

## For Production Deployment

After the first deployment, to deploy to production:

```bash
npx vercel --prod
```

---

## Troubleshooting

**If you get npm permission errors:**
```bash
# Try using sudo (if needed)
sudo npx vercel
```

**If build fails:**
```bash
# Test build locally first
npm run build
```

**If vercel command not found:**
```bash
# Install globally (optional)
npm install -g vercel
# Then just use: vercel
```

---

## What You'll Get

- **Preview URL**: Random test URL (e.g., `elva-clinic-abc123.vercel.app`)
- **Production URL**: Your project URL
- **Automatic HTTPS**: SSL included
- **Global CDN**: Fast worldwide

---

## Quick Command Reference

```bash
# Deploy (preview)
npx vercel

# Deploy to production
npx vercel --prod

# Check deployment status
npx vercel ls

# View deployment logs
npx vercel logs
```

