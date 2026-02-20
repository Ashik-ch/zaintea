# 📌 Project Deployment Notes – Zaintea

## 🔧 Build Command
npm run build

## 🚀 Deploy Command
npm run deploy

## 🌐 GitHub Pages Setup
- Branch: main
- Custom Domain: zainteacafe.com
- https://github.com/Ashik-ch/zaintea
- CNAME file inside /public

## 🔁 404 Fix for React Router
Requires 404.html fix:
postbuild script auto copy and rename   :
build/index.html → build/404.html 

## ⚠️ Important Reminders
- Always push main branch
- Do NOT delete CNAME
- Run npm run deploy (not manual build)