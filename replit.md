# HairQure - Natural Hair Growth Brand Website

## Overview
HairQure is a premium natural hair care brand landing page/e-commerce website. The brand sells natural hair growth products including oils, mists, butters, and accessories. Founded by "MissK" after her daughter experienced hair loss from harmful chemicals.

## Current State
- Fully functional single-page landing website with newsletter subscription
- PostgreSQL database for subscriber management
- Responsive design with warm amber/golden color scheme
- Built with React + Express + Drizzle ORM

## Architecture
- **Frontend**: React with Tailwind CSS, shadcn/ui components, Framer Motion animations
- **Backend**: Express.js with PostgreSQL (Drizzle ORM)
- **Routing**: wouter (single page "/" route)
- **State**: TanStack React Query for API calls

## Key Sections
1. Navbar (fixed, transparent to solid on scroll)
2. Hero (product showcase + CTAs)
3. Products (5 products with pricing)
4. Results (stats + 8-week growth timeline)
5. Brand Story (MissK's founding story)
6. Ingredients (6 key natural ingredients)
7. Testimonials (6 customer reviews)
8. Bundles (3 pricing tiers: Starter, Combo, Ultimate)
9. FAQ (8 accordion questions)
10. Newsletter (email capture with PostgreSQL persistence)
11. Footer (navigation + social links)

## API Endpoints
- `POST /api/subscribe` - Newsletter subscription (email, optional name)

## Database
- `subscribers` table: id, email (unique), name, subscribed_at

## Design Tokens
- Font sans: Plus Jakarta Sans
- Font serif: Playfair Display
- Primary color: Warm amber (28 85% 45%)
- Theme: Warm natural tones suitable for hair care brand

## User Preferences
- Brand colors: Warm amber/golden tones
- Target market: UAE (AED currency)
- Products priced in AED
