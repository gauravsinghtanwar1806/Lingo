# Lingo Premium Landing Page

Lingo is a fictional AI language-learning product. This repository contains the source code for a highly polished, responsive landing page designed to look like a premium modern startup launch on Product Hunt.

## 🚀 Features

- **Interactive Product Mockups:** A functional lesson UI that provides instant feedback (correct/incorrect states) and increments XP, demonstrating the core product experience without a backend.
- **Dark/Light Mode:** Seamless theme toggling using Tailwind CSS v4. The default is set to Light mode, with a Sun/Moon toggle in the navigation bar.
- **Restrained Motion & Micro-interactions:** Subtle fade-ins, hover states, and transitions that make the page feel alive and polished.
- **Fully Responsive:** Carefully crafted layouts that look perfect on mobile (390px) up to large desktop monitors (1440px+).
- **Hidden Easter Egg:** Click the Lingo leaf logo 5 times to trigger a secret bonus!

## 🛠️ Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

## 💻 Running Locally

To run the project locally, ensure you have Node.js installed, then execute:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🚢 Deployment

This project is configured to be easily deployed on Vercel.

1. Push your code to a GitHub repository.
2. Go to your Vercel Dashboard and click **Add New Project**.
3. Import this repository.
4. Vercel will automatically detect Vite and use the correct build settings (`npm run build` with `dist` output).
5. Click **Deploy**.

## 📝 Design Decisions

See [DECISIONS.md](./DECISIONS.md) for details on the implementation strategy, trade-offs, and verification steps.
