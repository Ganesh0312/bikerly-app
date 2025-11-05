# RIDO — Bikers' Community & Management Platform

Last updated: October 28, 2025

## Project Overview

RIDO is envisioned as a comprehensive community platform tailored for bike enthusiasts. It integrates bike management, expense tracking, ride planning, social networking, and smart AI-backed features into one sleek, moto-inspired experience.

This repository (bikerly-app) contains the Next.js frontend for the RIDO platform — a modern, responsive app built with accessibility and extensibility in mind.

---

## Core Components

### 1. RIDOIDEA: Conceptual Framework
- Focus on bikers’ needs including bike service tracking, fuel/expense management, ride organization, community engagement, and AI-driven assistance.
- Emphasis on social and group interactions to foster a tight-knit biker community.
- Data schema and model designed to support user profiles, bikes, expenses, rides, groups, messages, and AI content (trip summaries, tips).

### 2. RIDOSCREENS: Screen Architecture and UI Scope
- Authentication & Onboarding (Welcome, Signup, Login, Password Reset)
- User Profile & Settings (Profile view/edit, connections, preferences)
- Bike Management (CRUD for bike info, service history, expense additions)
- Expense Tracking (Logging, analytics, expense categories)
- Ride Management & Social Features (Create/join rides, ride details, chat)
- Community & Groups (Clubs/groups, discussions, member management)
- Messaging & Notifications (1:1 and group chats, alerts)
- Marketplace (Optional feature for buying/selling gear)
- AI/LLM Features (Chatbot, AI-generated summaries and tips)
- Admin & Moderation (Future feature for content and user management)

### 3. RIDOTHEME: Visual & UX Style Guide
- Dark mode base: #121212 with vibrant accents — primary CTA: fiery orange (#FF5722); secondary: electric blue (#2962FF).
- Typography: Roboto for body text; Montserrat for bold headings.
- UI elements: rounded corners (8px), subtle shadows, smooth transitions, and high-contrast text for accessibility.
- Support for black & white minimal theme toggle for user preference.
- Visual nods to moto culture via subtle textures and dynamic color usage.

### 4. Detailed Screen Development Prompts
- Landing Page: Engaging intro with strong CTAs, moto-themed background, and responsive layout.
- Authentication Flow: Clean signup/login/reset screens with validation and accessibility.
- Dashboard: Summary of bikes, expenses, rides, and community feed with theme toggling.
- User Profile & Settings: Rich profile display and management, connections, notification preferences, and theme settings.
- Bike Management: Full CRUD for bike info with photo/document uploads, status tracking, and expense integration.
- Expense Tracking: Category-wise expense logging, editing, and analytics with visual summaries.
- Ride & Community Modules: Create/join rides and groups, event details, real-time group chats, and social posts.
- Messaging & Notifications: Robust chat UI with threading, notification filters, and dismissals.
- AI/LLM Features: Chatbot for bike help, AI-generated trip summaries, and personalized riding tips.

---

## Functional & Interaction Design Highlights
- CRUD operations with interactive UI elements (buttons, modals, forms) and consistent event handling.
- Consistent application of RIDOTHEME styles across modules for visual harmony.
- Accessibility and responsiveness prioritized for cross-device usability.
- Modular, extensible design to allow future expansions (marketplace, admin tools).

---

## Next Steps & Recommendations
- Prioritize core modules: onboarding, profile, bike management, expense tracking, rides & groups, messaging.
- Build modular UX pilots from the detailed screen prompts to accelerate prototyping and testing.
- Implement theme toggle early to collect user feedback on visual preferences.
- Integrate AI features incrementally to validate value (start with read-only summaries and tips).
- Design APIs aligned with the RIDOSCHEMA and RIDOMODEL to prepare for future scalability.

---

## How to run (frontend)

This repo is a Next.js app. From the project root, install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Contributing
- File an issue or open a pull request for bug fixes and features.
- Follow existing code style and add tests for new functionality where applicable.

---

If you'd like, I can also add: wireframes, a dedicated style guide file, example API schemas, or a small component library starter following RIDOTHEME.
