# WELFIX Solutions — Official Multi-Page Business Website

> **STRONGER BONDS. BETTER SPACES.**  
> Silicone Sealants & Construction Sealing Solutions  
> **Manufacturer:** Welfix  
> **Marketed By:** Welfix Solutions  
> **Headquarters:** Shri Guru Krupa, Sr. No. 1/9, Labhade Colony, Behind Kulkarni Complex, Karvenagar, Pune, Maharashtra, India.  
> **Contact / WhatsApp:** +91 91851 53501 | **Email:** enquiries.welfixsolutions@gmail.com

---

## 🚀 Overview

This repository contains the complete, production-ready, multi-page business website for **WELFIX Solutions**. It is built with semantic HTML5, modern Tailwind CSS, pure Vanilla ES6+ JavaScript, CSS3 animations, and Lucide icons.

The design strictly reflects the brand colors derived from the official packaging:
- **Primary Purple:** `#52119B`
- **Deep Purple:** `#31065E`
- **Dark Violet:** `#3D087B`
- **Magenta Accent:** `#C026D3`
- **Light Purple:** `#F2E8FC`
- **Lavender Background:** `#F8F4FC`
- **White:** `#FFFFFF`
- **Dark Text:** `#171321`

---

## 📂 Project Structure

```
welsili/
├── index.html                   # Homepage (Hero, Brand Highlights, Products, Applications, CTA)
├── about.html                   # About WELFIX, Welfix (Mfg), Welfix Solutions (Mkt)
├── products.html                # Products Catalog with Live Search & Category Filtering
├── acrylic-silicone.html        # Product 1: WELFIX Acrylic General Purpose (300 ml verified)
├── weatherproof-silicone.html   # Product 2: WELFIX Weatherproof Silicone Sealant (Exterior Facades)
├── acetic-silicone.html         # Product 3: WELFIX Acetic Silicone Sealant (Glass & Sanitary)
├── applications.html            # 6 Core Architectural & Sealing Applications
├── contact.html                 # Interactive Contact Form, Call, WhatsApp & Google Map
├── privacy-policy.html          # Transparent Privacy and Enquiry Policy
├── sitemap.xml                  # Search Engine Sitemap
├── robots.txt                   # Web Crawlers Policy
├── README.md                    # Project Documentation
└── assets/
    ├── css/
    │   └── style.css            # Custom brand utilities, glowing shadows, floating animations
    ├── js/
    │   ├── main.js              # Sticky navbar, mobile menu drawer, active links, scroll reveal
    │   ├── products.js          # Central product database, search, and category filters
    │   └── contact.js           # Real form validation & structured WhatsApp prefilled redirection
    ├── images/
    │   ├── logo.svg             # WELFIX Primary Logo
    │   ├── logo-white.svg       # WELFIX White Logo for dark purple backgrounds
    │   ├── products/
    │   │   ├── acrylic-silicone.svg        # 300 ml cartridge matching verified packaging
    │   │   ├── weatherproof-silicone.svg   # Dedicated placeholder
    │   │   └── acetic-silicone.svg         # Dedicated placeholder
    │   └── applications/
    │       ├── windows-doors.svg           # Windows & Doors perimeter joints
    │       ├── glass-frames.svg            # Architectural structural glazing
    │       ├── kitchen-bathroom.svg        # Sanitary waterproof joints
    │       ├── interior.svg                # Baseboard & joinery gap filling
    │       ├── exterior.svg                # Facade & cladding expansion seams
    │       └── general-sealing.svg         # Multi-surface maintenance
    └── icons/
        └── favicon.svg          # Brand favicon
```

---

## 🛠 Features

1. **Multi-Page Complete Architecture:** 9 fully linked pages with zero dead ends or placeholders.
2. **Sticky Navigation & Mobile Drawer:** Responsive navbar with desktop hover dropdown and a slide-out mobile drawer with touch-friendly navigation.
3. **Verified Information Discipline:** Does not invent false curing times, certifications, or pack sizes. Product 1 strictly highlights the verified 300 ml pack size and packaging features: *Flexible, Durable, Waterproof, Weather Resistant, High Flexibility*.
4. **Live Product Search & Filtering:** In `products.html`, products can be searched by name, feature, or application, or filtered by category (Acrylic, Weatherproof, Acetic).
5. **Real Form Validation & Direct WhatsApp Redirection:** The contact form in `contact.html` validates inputs client-side, formats a clean WhatsApp message, and automatically redirects directly to `+919185153501`.
6. **Floating WhatsApp Button:** Available on all 9 pages with pre-filled enquiry messages customized per product page.
7. **SEO & Structured Data:** Semantic HTML5, Schema.org `LocalBusiness` JSON-LD schema, OpenGraph tags, canonical tags, `sitemap.xml`, and `robots.txt`.

---

## 📸 Updating Product Photography

When you receive new product photos:
1. Place your new photo in `assets/images/products/` (e.g. `acrylic-silicone.png` or `weatherproof-silicone.jpg`).
2. Update the corresponding `src` in `acrylic-silicone.html`, `weatherproof-silicone.html`, `acetic-silicone.html`, `index.html`, and `assets/js/products.js`.

---

## 🌐 Local Testing & Deployment

### Run Locally:
You can run any local static web server from inside the `welsili` directory:

**Using Python:**
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

**Using Node.js `npx serve`:**
```bash
npx serve .
```

### Deploying to Production:
- **Netlify / Vercel / Cloudflare Pages:** Connect the repository or drag-and-drop the `welsili` folder.
- **Apache / Nginx / cPanel:** Upload the files directly to your `public_html` root.

---

© 2026 WELFIX Solutions. All Rights Reserved.
