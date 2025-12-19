#!/bin/bash

# ELVA Clinic - Vercel Deployment Script

echo "🚀 Deploying ELVA Clinic to Vercel..."
echo ""

# Check if vercel is available
if command -v vercel &> /dev/null; then
    echo "✅ Vercel CLI found"
    vercel --version
    echo ""
    echo "Deploying..."
    vercel
elif command -v npx &> /dev/null; then
    echo "✅ Using npx to run Vercel CLI"
    echo ""
    echo "Deploying..."
    npx vercel
else
    echo "❌ Neither vercel nor npx found"
    echo ""
    echo "Please install Vercel CLI:"
    echo "  npm install -g vercel"
    echo ""
    echo "Or deploy via Vercel Dashboard:"
    echo "  1. Go to https://vercel.com"
    echo "  2. Sign in and click 'Add New Project'"
    echo "  3. Import your repository or drag & drop this folder"
    exit 1
fi

