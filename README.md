# GrowBrow.ai — AI-Powered WhatsApp Growth Platform

> A modern SaaS landing website built as a competitor study to AiSensy.

## 🚀 Live Demo
Open `index.html` in your browser or deploy to any static hosting.

## 📁 Project Structure

```
growbrow-ai/
├── index.html              ← Main landing page
├── css/
│   └── style.css           ← All styles (CSS variables, animations)
├── js/
│   └── main.js             ← Scroll effects, animations, interactivity
└── pages/
    ├── pricing.html        ← Pricing with billing toggle + FAQ
    ├── signup.html         ← Sign-up form with split layout
    ├── login.html          ← Login page
    ├── dashboard.html      ← Animated SaaS dashboard (demo)
    ├── about.html          ← About / team / mission
    └── contact.html        ← Contact form with channels
```

## ✨ Features
- **Dark SaaS aesthetic** with green/teal gradient brand
- **Animated hero** with floating WhatsApp mockup chat
- **Infinite logo scroll** (CSS-only)
- **Scroll reveal animations** on all sections
- **Comparison table** vs AiSensy and Interakt
- **Pricing page** with monthly/annual toggle
- **Live dashboard demo** with animated KPI counters + bar chart
- **FAQ accordion** (vanilla JS)
- **Fully responsive** — mobile-first
- **Zero dependencies** — pure HTML, CSS, JS

## 🛠 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/growbrow-ai.git
cd growbrow-ai

# Option 1: Just open index.html in your browser
open index.html

# Option 2: Use a local server (recommended)
npx serve .
# or
python3 -m http.server 3000
```
Then open `http://localhost:3000`

## 🌐 Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit: GrowBrow.ai SaaS website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/growbrow-ai.git
git push -u origin main
```
Then: GitHub repo → Settings → Pages → Source: `main` branch → Save.
Your site will be live at: `https://YOUR_USERNAME.github.io/growbrow-ai/`

## 🎨 Design Decisions
| Choice | Reason |
|--------|--------|
| Dark theme | Conveys premium, tech-forward brand |
| Syne font | Bold, geometric — stands out vs Inter/Roboto |
| Green gradient | Differentiates from AiSensy's purple |
| Floating chat mockup | Shows the product in context immediately |
| Comparison table | Directly shows competitive advantage |
| Dashboard page | Demonstrates product depth beyond just a landing page |

## 📊 Competitive Edge vs AiSensy
- **Predictive AI Engine** — unique differentiator not offered by AiSensy
- **AI send-time optimization** — maximizes open rates automatically  
- **Per-message revenue attribution** — ties every message to revenue
- **Native UPI payments** — fully integrated vs AiSensy's beta offering

## 🏆 Assignment Notes
This project was built for the Growbrow.ai assignment to study AiSensy and build a SaaS-style competing website. Key evaluation criteria addressed:
1. ✅ Professional SaaS UI/UX design
2. ✅ Competitor analysis baked into the comparison table
3. ✅ Multiple pages (Landing, Pricing, About, Contact, Dashboard)
4. ✅ Mobile responsive
5. ✅ Clean, explainable code with comments
6. ✅ Unique "Predictive AI Engine" differentiator concept
