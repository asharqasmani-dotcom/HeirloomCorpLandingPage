# Heirloom Legacy, Inc. — Corporate Landing Page (HeirloomCorp.org)

A modern, high-performance React + TypeScript + Vite web application built for **Heirloom Legacy, Inc.** according to the official nonprofit Brand Book and content guidelines.

## Features & Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Brand Palette:** HeirloomCorp.org official brand tokens
  - Deep Navy: `#0B1B3D` (`--navy`)
  - Warm Ivory: `#F5F2E9` (`--ivory`)
  - Heirloom Gold: `#B6975E` (`--gold`)
  - Deep Green: `#0A3A2F` (`--deep-green`)
  - Pure White: `#FFFFFF` (`--white`)
  - Neutral Gray: `#A0A0A0` (`--gray`)
- **Typography:**
  - Headings: `"Minion Variable", Georgia, serif`
  - Body & UI: `"Helvetica Now", Helvetica, Arial, sans-serif`
- **Interactive Components:**
  - Sticky navy header with smooth single-page anchor navigation and mobile drawer
  - Hero section with backdrop photography, `LEGACY` watermark, mission overview, and highlight bar
  - About section with brand value metrics, community vision card, and brand keyword ticker
  - Community Initiatives showcase highlighting stable environments, partnerships, and resources
  - "What Drives Our Mission" values grid with community recreation media card and mission video placeholder
  - "Our Mission Framework" 4-step process highlighting stability, partnerships, resources, and vision
  - Community philosophy statement card featuring organizational commitments
  - Accessible Contact Inquiry form (Full Name, Email, Inquiry Type dropdown, Message, spam honeypot, rate limiting, and backend configuration status handling)
  - Deep navy corporate footer with complete site directory and "BUILDING A LEGACY OF STABILITY" typography
- **Form Validation & Security:** Client-side validation, honeypot protection, in-memory rate limiting, and explicit backend configuration handling (`src/services/api.ts`). No API keys or credentials exposed in frontend.
- **Testing:** Vitest + Testing Library test suite (`src/tests/`).

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Development server
```bash
npm run dev
```
Open [http://127.0.0.1:5173](http://127.0.0.1:5173).

### 3. Run unit tests
```bash
npm test
```

### 4. Production build
```bash
npm run build
npm run preview
```
The compiled output is located in `dist/`.

## Environment Configuration
To connect inquiry forms and newsletter signups to your live CRM, Zapier, or email provider, copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Populate `VITE_INQUIRY_ENDPOINT` and `VITE_NEWSLETTER_ENDPOINT` with your webhook URLs.
