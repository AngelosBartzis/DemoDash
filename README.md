# 🎨 React Figma-to-Code Dashboard

A responsive, high-fidelity React dashboard translated directly from a Figma design system. Engineered with modular architecture, clean state management, and internationalization.

🚀 **Live Demo:** [https://demo-dash-6hftwuvvb-angelos-dev.vercel.app/] 
🎨 **Figma Source:** [https://www.figma.com/design/ifIyQJ1BdavLoSJzIf6iZA/]

---

## ✨ Key Features

- **Design Fidelity:** Pixel-perfect translation from Figma tokens (typography, spacing, color palette).
- **Internationalization (i18n):** Real-time Greek (EL) & English (EN) language toggling.
- **Theme Support:** Dark/Light mode theme switcher implemented with Material UI `ThemeProvider`.
- **Responsive Layout:** Optimized for mobile, tablet, and 4K displays.
- **Modular Architecture:** Clean, reusable component structure with routing (`react-router-dom`).

---

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **UI Component Library:** Material UI (MUI v5)
- **State & Routing:** React Router v6
- **Hosting:** Vercel

---

## 📂 Project Structure

src/
├── assets/          # Static assets & images
├── components/      # Reusable UI components (Sidebar, Topbar, Cards)
├── pages/           # Route views (Dashboard, Analytics, Settings, Login)
├── theme/           # MUI custom theme & color tokens
└── App.jsx          # Route configurations & layout wrappers