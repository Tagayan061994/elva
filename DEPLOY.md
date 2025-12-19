# Deploy to Vercel

## Quick Deploy

### Option 1: Using Vercel CLI (Recommended)

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Deploy to Vercel**:
   ```bash
   npx vercel
   ```

3. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? Choose your account
   - Link to existing project? **No**
   - What's your project's name? **elva-clinic** (or press Enter)
   - In which directory is your code located? **./** (press Enter)
   - Want to override settings? **No**

4. **For production deployment**:
   ```bash
   npx vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Click "Add New Project"
4. Import your Git repository OR drag and drop your project folder
5. Vercel will auto-detect Next.js
6. Click "Deploy"

### Option 3: GitHub Integration (Automatic)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically deploy on every push

## Environment Variables

If you need environment variables, add them in Vercel dashboard:
- Settings → Environment Variables
- Add `NEXT_PUBLIC_SITE_URL` if needed

## Build Settings

Vercel will automatically detect:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Deployment URL

After deployment, Vercel will provide:
- **Preview URL**: Random URL for each deployment (e.g., `elva-clinic-abc123.vercel.app`)
- **Production URL**: Your custom domain or `elva-clinic.vercel.app`

## Troubleshooting

If build fails:
1. Check `npm run build` works locally
2. Ensure all dependencies are in `package.json`
3. Check for TypeScript errors: `npm run lint`

