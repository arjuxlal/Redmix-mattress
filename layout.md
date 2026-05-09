# Layout Model Specification: Home Page

This layout model defines the grid system, layout spacing, and visual sections for a premium e-commerce home page.

## 1. Global Grid & Spacing System
* **Container Max Width:** 1280px (Standard desktop layout), with fluid padding (e.g., `px-4` on mobile, `px-6` on tablet, `px-8` on desktop).
* **Grid System:** 12-column flex or CSS Grid layout.
* **Base Spacing:** Tailwind spacing scale (`gap-y-16` to `gap-y-24` between major sections).

## 2. Section-by-Section Layout Blueprint

### Section A: Header
* **Height:** 80px (Desktop), 64px (Mobile).
* **Elements (Left to Right):** Brand Logo (centered on mobile, left on desktop), Navigation Links (Center), Utilities & Actions (Right).

### Section B: Hero Banner
* **Height:** 600px - 700px (Cinematic aspect ratio).
* **Layout:**
    * Left/Center Text content (h1, p, CTA group).
    * Right side or background overlay: High-quality lifestyle image or ambient video, dark gradient for text legibility.

### Section C: Trust Bar
* **Height:** 80px.
* **Layout:** Flex container, row direction on desktop, wrap on mobile. 3 or 4 grid columns.

### Section D: Product Showcase Section
* **Layout:** 3 or 4-column product grid.
* **Card Anatomy:**
    * Image aspect ratio: 4:3 or 1:1.
    * Hover effect: Zoom-in image and sliding "Quick Add" or "View Details" button.
    * Badge: "Best Seller" or "Save 40%" top left.

### Section E: Interactive Features/Layers
* **Layout:** Split layout (50/50).
* **Left Column:** Material benefits tabs.
* **Right Column:** Large visual illustration or high-fidelity image of the product structure.

### Section F: Footer
* **Layout:** 4-column footer grid (Links, Support, Products, Newsletter).
* **Bottom Section:** Copyright, Social Links, and secure payment badge icons.
