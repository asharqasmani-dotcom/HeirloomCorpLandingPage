# Heirloom Legacy, Inc. — Arvon Luxury Real Estate Landing Page

A modern, high-performance React + TypeScript + Vite web application converted from the Arvon Elementor/WordPress landing page and re-themed according to the official **HeirloomCorp.org** Brand Book.

## Features & Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Brand Palette:** HeirloomCorp.org official brand tokens
  - Deep Navy: `#0B1B3D`
  - Warm Ivory: `#F5F2E9`
  - Heirloom Gold: `#B6975E`
  - Deep Green: `#0A3A2F`
  - Pure White: `#FFFFFF`
  - Neutral Gray: `#A0A0A0`
- **Typography:**
  - Headings: `"Minion Variable", Georgia, serif`
  - Body & UI: `"Helvetica Now", Helvetica, Arial, sans-serif`
- **Interactive Components:**
  - Sticky glassmorphic header with navigation dropdowns and accessible mobile drawer
  - Hero section with backdrop photography, Arvon watermark, avatar trust proof, and instant inquiry form
  - Refined living standards section with IntersectionObserver-driven counter animations (18+, 95+, 120+) and continuous ticker
  - Responsive curated luxury property carousel with touch/mouse controls and pagination
  - 4-card value proposition grid and 4-step client acquisition process
  - Testimonial carousel with customer rating stars and interactive reviewer selector
  - Infinite client partner logo ticker
  - Curated newsletter subscription component with rate limiting and regex validation
  - 3-column market insights & articles section
  - Deep navy corporate footer with complete site directory and subtle "EXCLUSIVE LIVING" typography
- **Form Validation & Services:** Rate-limited inquiry and newsletter submission services (`src/services/api.ts`) ready for CRM/webhook integration (`.env.example`).
- **Testing:** Comprehensive Vitest + Testing Library test suite (`src/tests/`).

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
