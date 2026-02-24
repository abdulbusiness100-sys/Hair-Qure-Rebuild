# HairQure - Natural Hair Growth Brand Website

## Overview
HairQure is a premium natural hair care brand website matching the original hairqure.ae layout. Sells natural hair growth products including oils, mists, butters, and bonnets. Founded by "MissK" after her daughter experienced hair loss from harmful chemicals.

## Current State
- Fully functional single-page website matching original hairqure.ae layout
- Uses real product photography from brand photoshoot
- PostgreSQL database for subscriber/waiting list management
- Responsive design with warm amber/golden color scheme
- Built with React + Express + Drizzle ORM

## Architecture
- **Frontend**: React with Tailwind CSS, shadcn/ui components, Framer Motion animations
- **Backend**: Express.js with PostgreSQL (Drizzle ORM)
- **Routing**: wouter (single page "/" route)
- **State**: TanStack React Query for API calls

## Key Sections (matching original site)
1. Announcement bar (shipping over AED 50)
2. Navbar (centered logo, Products/Our Story links, Shop Now button)
3. Hero (video background with Shop Now overlay)
4. Products (6 products: Oil, Mist, Butter, Combo, Adult Bonnet, Baby Bonnet)
5. Spotlight (Hair Growth Oil feature section)
6. Brand Story (MissK + daughter photo, founding story)
7. Newsletter/Waiting List (email capture with PostgreSQL persistence)
8. Footer (Products, Company, Help & Information columns)

## Product Images (from brand zip)
- Real product photography used throughout
- Images stored in client/public/images/
- Logo: logo.jpg
- Product photos: product-oil.jpg, product-mist-oil.jpg, product-butter.jpg, etc.
- Brand photos: missk-daughter.jpg, bonnet-black.jpg, bonnet-pink.jpg
- Hero video: hero-video.mp4

## API Endpoints
- `POST /api/subscribe` - Newsletter/waiting list subscription (email, optional name)

## Database
- `subscribers` table: id, email (unique), name, subscribed_at

## Design Tokens
- Font sans: Plus Jakarta Sans
- Font serif: Playfair Display
- Primary color: Warm amber (28 85% 45%)
- Theme: Warm natural tones suitable for hair care brand

## User Preferences
- Follow original hairqure.ae layout closely
- Use actual brand product images (not generated)
- Don't add sections not on the original site
- Brand colors: Warm amber/golden tones
- Target market: UAE (AED currency)
- Products priced in AED
