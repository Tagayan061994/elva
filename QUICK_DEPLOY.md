# 🚀 Quick Deploy to Vercel

## Easiest Method: Vercel Dashboard

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with GitHub/Google/GitLab
3. **Click "Add New Project"**
4. **Import Git Repository** OR **Drag & Drop** this folder
5. **Click "Deploy"** - Vercel auto-detects Next.js!

You'll get a random URL like: `elva-clinic-xyz123.vercel.app`

---

## Using Command Line

### Step 1: Install Vercel CLI (if needed)
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd /Users/hakobtagayan/Desktop/elva
npx vercel
```

### Step 3: Follow Prompts
- Set up and deploy? → **Yes**
- Link to existing project? → **No** (first time)
- Project name? → Press Enter (uses `elva-clinic`)
- Directory? → Press Enter (uses `./`)
- Override settings? → **No**

### Step 4: Get Your URL
After deployment, you'll see:
```
✅ Production: https://elva-clinic-xxxxx.vercel.app
```

---

## Using the Script

```bash
./deploy.sh
```

---

## What You'll Get

- **Preview URL**: Random test URL (e.g., `elva-clinic-abc123.vercel.app`)
- **Automatic HTTPS**: SSL certificate included
- **Global CDN**: Fast loading worldwide
- **Auto Deploy**: Every git push (if connected to Git)

---

## Troubleshooting

**Build fails?**
```bash
# Test build locally first
npm run build
```

**Need to redeploy?**
```bash
npx vercel --prod
```

**Want custom domain?**
- Go to Vercel Dashboard → Project → Settings → Domains

