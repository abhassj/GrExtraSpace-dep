# GR Extra Space — Deployment, Domain & SEO Setup Guide

> Complete guide for connecting your Cloudflare domain, setting up Google Search Console, Google Analytics 4, and post-launch SEO optimization.

---

## Table of Contents

1. [Connecting Cloudflare Domain to Vercel](#1-connecting-cloudflare-domain-to-vercel)
2. [Google Search Console Setup](#2-google-search-console-setup)
3. [Google Analytics 4 Setup](#3-google-analytics-4-setup)
4. [Post-Launch SEO Checklist](#4-post-launch-seo-checklist)
5. [Ongoing SEO Maintenance](#5-ongoing-seo-maintenance)

---

## 1. Connecting Cloudflare Domain to Vercel

### Prerequisites
- ✅ Domain `grextraspace.com` purchased on Cloudflare
- ✅ Vercel project deployed and working on `*.vercel.app`
- ✅ DNS records visible in Cloudflare dashboard

### Step 1: Add Custom Domain in Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your **GR Extra Space** project
3. Navigate to **Settings → Domains**
4. Click **Add Domain**
5. Enter `grextraspace.com` and click **Add**
6. Vercel will ask you to configure DNS — we'll do this in Cloudflare

### Step 2: Configure DNS in Cloudflare

Since you already have DNS records in Cloudflare, you need to **update them** to point to Vercel.

#### Option A: Using CNAME (Recommended)

1. In Cloudflare DNS dashboard, **delete** the existing A and AAAA records for `grextraspace.com` and `www`
2. Add the following records:

| Type  | Name              | Content              | Proxy Status | TTL  |
|-------|-------------------|----------------------|--------------|------|
| CNAME | `@` (root)        | `cname.vercel-dns.com` | **DNS Only** (grey cloud) | Auto |
| CNAME | `www`             | `cname.vercel-dns.com` | **DNS Only** (grey cloud) | Auto |

> ⚠️ **Important**: Set proxy status to **DNS Only** (grey cloud icon, NOT orange). Vercel needs direct DNS resolution for SSL certificate issuance. You can enable Cloudflare proxy later if desired, but it's not recommended as Vercel already provides CDN and SSL.

#### Option B: Using A Records (Alternative)

If CNAME flattening causes issues, use Vercel's A record:

| Type | Name    | Content       | Proxy Status | TTL  |
|------|---------|---------------|--------------|------|
| A    | `@`     | `76.76.21.21` | DNS Only     | Auto |
| CNAME| `www`   | `cname.vercel-dns.com` | DNS Only | Auto |

### Step 3: SSL/TLS Configuration on Cloudflare

1. Go to **SSL/TLS → Overview** in Cloudflare
2. Set encryption mode to:
   - **Full (strict)** if using DNS Only (grey cloud) — Vercel handles SSL
   - **Full** if using Cloudflare proxy (orange cloud)
3. Under **SSL/TLS → Edge Certificates**:
   - Enable **Always Use HTTPS**: ✅
   - Enable **Automatic HTTPS Rewrites**: ✅
   - Set **Minimum TLS Version** to: `TLS 1.2`

### Step 4: Configure www → apex redirect

In Vercel:
1. Go to **Settings → Domains**
2. Add both `grextraspace.com` and `www.grextraspace.com`
3. Set `grextraspace.com` as the **primary domain**
4. Vercel will automatically redirect `www` to the apex domain

### Step 5: Verify Connection

1. Wait 5-10 minutes for DNS propagation
2. Visit `https://grextraspace.com` — should load your site
3. Visit `https://www.grextraspace.com` — should redirect to above
4. Check the Vercel Domains page — both should show **✅ Valid Configuration**
5. Verify SSL by checking the padlock icon in the browser

### Troubleshooting

| Problem | Solution |
|---------|----------|
| "DNS points to wrong server" | Ensure proxy is set to DNS Only (grey cloud) in Cloudflare |
| SSL certificate pending | Wait up to 24 hours; ensure DNS Only mode is enabled |
| 522 or 524 errors | Disable Cloudflare proxy (set to DNS Only) |
| Redirect loop | Set Cloudflare SSL to "Full (strict)" mode |

---

## 2. Google Search Console Setup

### Step 1: Add Property

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add Property**
3. Choose **URL Prefix** method
4. Enter: `https://grextraspace.com`
5. Click **Continue**

### Step 2: Verify Ownership

Choose one of these verification methods:

#### Method A: DNS TXT Record (Recommended)

1. Google will provide a TXT record like: `google-site-verification=XXXXXXXXXXXX`
2. In Cloudflare DNS dashboard, add:

| Type | Name | Content | TTL |
|------|------|---------|-----|
| TXT  | `@`  | `google-site-verification=XXXXXXXXXXXX` | Auto |

3. Wait 5 minutes, then click **Verify** in Google Search Console

#### Method B: HTML Meta Tag

1. Google will provide a meta tag like: `<meta name="google-site-verification" content="XXXX" />`
2. Add this tag to the `<head>` section of `index.html`
3. Deploy the update
4. Click **Verify** in Google Search Console

### Step 3: Submit Sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Status should show **Success** after processing

### Step 4: Request Indexing

1. In Search Console, go to **URL Inspection**
2. Enter: `https://grextraspace.com/`
3. Click **Request Indexing**
4. Repeat for `https://grextraspace.com/about`

### Step 5: Monitor

After a few days, check:
- **Performance** tab → See search queries, clicks, impressions
- **Coverage** tab → Ensure all pages are indexed without errors
- **Experience** tab → Check Core Web Vitals scores

---

## 3. Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Admin** (gear icon, bottom left)
3. Click **Create** → **Property**
4. Property name: `GR Extra Space`
5. Reporting time zone: `United Kingdom - GMT+0` (or your preference)
6. Currency: `GBP`
7. Click **Next**, fill in business details
8. Click **Create**

### Step 2: Set Up Data Stream

1. Choose **Web** as the platform
2. Website URL: `https://grextraspace.com`
3. Stream name: `GR Extra Space Web`
4. Click **Create Stream**
5. Copy the **Measurement ID** (e.g., `G-5C7D1Z23VX`)

### Step 3: Install on Website

Add the Google tag to `index.html` inside the `<head>` section, **before** the closing `</head>` tag:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5C7D1Z23VX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5C7D1Z23VX');
</script>
```

> 📌 Google Analytics 4 has been successfully configured.

### Step 4: Verify Installation

1. Deploy the updated site
2. Visit your website
3. In GA4, go to **Reports → Realtime**
4. You should see yourself as an active user

### Step 5: Set Up Key Events

In GA4 Admin → Events:

| Event Name | Description |
|------------|-------------|
| `page_view` | Automatic — tracks page visits |
| `scroll` | Automatic — tracks 90% scroll depth |
| `click` | Set up for "Get a Quote" CTA clicks |
| `outbound_click` | Tracks WhatsApp/email link clicks |

### Step 6: Connect to Search Console

1. In GA4, go to **Admin → Product Links**
2. Click **Search Console Links**
3. Click **Link** and select your Search Console property
4. This enables SEO data directly in GA4 reports

---

## 4. Post-Launch SEO Checklist

### Technical SEO ✅

- [x] **Meta tags** — Title, description, OG, Twitter Card on all pages
- [x] **Canonical URLs** — Set on both Home and About pages
- [x] **Structured data** — Organization + LocalBusiness JSON-LD schemas
- [x] **Sitemap** — `sitemap.xml` with both pages
- [x] **Robots.txt** — Allows indexing, references sitemap
- [x] **SSL/HTTPS** — Enforced via HSTS + Vercel + Cloudflare
- [x] **Mobile responsive** — Fully responsive design
- [x] **Page speed** — Code-split bundles, lazy loading, optimized images

### Content SEO

- [x] **H1 tags** — Unique H1 on each page
- [x] **Image alt text** — Descriptive alt attributes on all images
- [x] **Internal linking** — Cross-links between Home and About pages
- [x] **Content quality** — Unique, keyword-rich content
- [x] **Contact information** — Phone, email, locations visible

### Local SEO

- [x] **Geo meta tags** — UK (Berkshire) and SA (KZN) regions
- [x] **LocalBusiness schema** — With ratings, contact, area served
- [x] **Multiple locations** — Both UK and SA offices listed
- [ ] **Google Business Profile** — Create profiles for both locations (manual step)

### Performance SEO

- [x] **Lazy loading** — Route-based code splitting
- [x] **Image optimization** — Lazy loading on below-fold images
- [x] **Font optimization** — Preconnect + preload for Google Fonts
- [x] **Caching headers** — Aggressive caching via Vercel headers
- [x] **Security headers** — Full suite (HSTS, CSP, X-Frame, etc.)

---

## 5. Ongoing SEO Maintenance

### Weekly Tasks
- Check Google Search Console for **crawl errors**
- Monitor **Core Web Vitals** scores
- Review **search performance** (queries, impressions, clicks)

### Monthly Tasks
- Update `sitemap.xml` if new pages are added
- Review and update meta descriptions if content changes
- Check for **broken links** using a tool like [brokenlinkcheck.com](https://www.brokenlinkcheck.com/)
- Monitor competitor rankings

### Quarterly Tasks
- Perform a full **Lighthouse audit** (aim for 90+ on all metrics)
- Review and refresh content for relevance
- Check structured data validity at [Google Rich Results Test](https://search.google.com/test/rich-results)
- Consider adding a blog or news section for fresh content signals

### Recommended SEO Tools
| Tool | Purpose | URL |
|------|---------|-----|
| Google Search Console | Index monitoring, search performance | [search.google.com/search-console](https://search.google.com/search-console) |
| Google Analytics 4 | Traffic analysis, user behavior | [analytics.google.com](https://analytics.google.com) |
| PageSpeed Insights | Performance scoring | [pagespeed.web.dev](https://pagespeed.web.dev) |
| Open Graph Debugger | OG tag validation | [opengraph.xyz](https://www.opengraph.xyz/) |
| Schema Validator | Structured data testing | [validator.schema.org](https://validator.schema.org/) |
| Rich Results Test | Google rich snippet preview | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |

---

## Quick Reference

| Item | Value |
|------|-------|
| Production URL | `https://grextraspace.com` |
| Vercel Project | GR Extra Space |
| Domain Registrar | Cloudflare |
| Sitemap URL | `https://grextraspace.com/sitemap.xml` |
| Robots.txt URL | `https://grextraspace.com/robots.txt` |
| OG Image URL | `https://grextraspace.com/extraspace-og.png` |
| GA4 Measurement ID | `G-5C7D1Z23VX` |

---

*Last updated: May 2026*
*Generated for GR Extra Space by Astraweb*
