**GR Extra Space**

Website Redesign --- Layout Plan

*Home Page: Detailed Structure & Section Breakdown*

Tech Stack: React + Vite \| Tailwind CSS

Version 1.0 \| April 2025

**1. Document Overview**

This document outlines the detailed layout plan for the GR Extra Space
website redesign, beginning with the Home Page. It is intended to serve
as a reference for the development team, covering section-by-section
structure, component behaviour, responsive considerations, and content
strategy.

+---------------------------------+------------------------------------+
| **Project**                     | **Frontend Stack**                 |
|                                 |                                    |
| GR Extra Space --- Website      | React + Vite                       |
| Redesign                        |                                    |
|                                 | **Styling**                        |
| **Scope (Phase 1)**             |                                    |
|                                 | Tailwind CSS                       |
| Home Page Layout Only           |                                    |
|                                 | **Backend (Planned)**              |
| **Operating Regions**           |                                    |
|                                 | Contact Form API --- Phase 2       |
| United Kingdom (Berkshire) &    |                                    |
| South Africa (KZN)              |                                    |
+---------------------------------+------------------------------------+

**2. Design Principles & Global Notes**

Before detailing each section, the following global principles apply
across the entire Home Page and should inform every component decision:

**Layout Philosophy**

-   No rigid grid or box-heavy layouts --- use fluid, immersive
    full-width sections

-   Layered content with depth: foreground text over background visuals

-   Avoid card-heavy 3-column grids for primary content areas

-   Cinematic, editorial feel --- inspired by global architecture and
    construction brands

**Motion & Interactivity**

-   Subtle scroll-triggered animations (fade-in, slide-up) using Framer
    Motion or CSS transitions

-   Parallax depth effects on hero and background image sections

-   Smooth section transitions --- no hard cuts between content areas

-   Horizontal scroll/drag galleries for project showcases

-   No intrusive pop-ups, full-screen takeovers, or abrupt modals

**Colour Usage**

-   Navy/Dark Blue --- primary brand base, backgrounds, headings

-   Red --- CTAs, active states, highlight accents only (not overused)

-   Yellow/Gold --- minimal accent only; icons, subtle borders,
    highlight strokes

-   Grey/Black --- content backgrounds, footer, industrial feel

-   White --- text on dark, breathing space, clean zones

**Responsive Breakpoints (Tailwind)**

-   Mobile: \< 640px (sm) --- stacked layouts, reduced padding,
    hamburger nav

-   Tablet: 640px--1024px (md/lg) --- 2-column grids, adjusted hero
    scale

-   Desktop: \> 1024px (xl/2xl) --- full layouts, full-width immersive
    sections

**3. Navigation Bar**

  ---------------------------------------------------------------------
  **COMPONENT: NAVBAR --- FIXED / STICKY**

  ---------------------------------------------------------------------

**Layout**

-   Full-width sticky navigation bar fixed to the top of the viewport on
    scroll

-   Left: GR Extra Space logo (SVG or transparent PNG)

-   Centre/Right: Navigation links

-   Far right: Primary CTA button --- \'Get a Quote\' (red background)

**Navigation Links**

-   Home

-   Our Services

-   Projects

-   About Us

-   Contact Us

**Behaviour & Effects**

-   Transparent background on load over hero video --- transitions to
    dark/frosted on scroll

-   Subtle backdrop-blur effect when scrolled (glassmorphism feel)

-   Active link underline or dot indicator

-   Mobile: Hamburger menu with full-screen or slide-in drawer overlay

-   Smooth hover transitions on all links

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| The current website has only 2 nav links (Home, Contact Us). The new  |
| navbar should expand to reflect all 5 main pages, giving the site     |
| proper navigational depth and encouraging exploration. The CTA button |
| (\'Get a Quote\') should be visually distinct in red, appearing on    |
| every page.                                                           |
+-----------------------------------------------------------------------+

**4. Home Page --- Section-by-Section Breakdown**

**SECTION 1 --- Hero (Video Background)**

  ---------------------------------------------------------------------
  **TYPE: FULL-VIEWPORT IMAGE SLIDER HERO**

  ---------------------------------------------------------------------

**Layout**

-   100vw x 100vh --- fills the entire screen on load

-   Background: 3-image slider (high-quality images, smooth
    auto-transition, no controls visible)

-   Dark semi-transparent overlay (opacity \~50--60%) to ensure text
    readability

-   Centred content block with headline, subheadline, and dual CTAs

**Content Elements**

  ---------------- ----------------------------------------------------
  **Element**      **Specification**

  *Eyebrow Tag*    Small uppercase label, e.g. \'4th Generation
                   Builders \| UK & South Africa\'

  *Main Headline*  Large, bold white headline --- e.g. \'Building
                   Beyond Boundaries\'

  *Subheadline*    1--2 line descriptor: \'Turnkey construction,
                   container solutions & bespoke builds --- UK & SA\'

  *CTA Buttons*    Primary: \'Get a Quote\' (red fill) \| Secondary:
                   \'View Our Work\' (white outline/ghost)

  *Scroll          Animated downward chevron or scroll prompt at
  Indicator*       bottom-centre of hero
  ---------------- ----------------------------------------------------

**Animation & Behaviour**

-   Video: looping background footage of construction, container builds,
    or project sites

-   Text entrance: staggered fade-in-up animation as page loads
    (headline first, then sub, then CTAs)

-   Subtle Ken Burns / slow zoom effect if using static image fallback
    on mobile

-   Mobile fallback: replace video with a high-quality static image
    (video autoplay restricted on iOS)

-   Ensure video is compressed (WebM + MP4 fallback) for fast load times

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| Add a subtle animated country flag or dual-country indicator near the |
| eyebrow tag to immediately communicate the UK & SA presence --- this  |
| builds trust and international credibility from the very first scroll |
| interaction.                                                          |
+-----------------------------------------------------------------------+

**SECTION 2 --- Business Introduction**

  ---------------------------------------------------------------------
  **TYPE: SPLIT LAYOUT --- BLUR BACKGROUND WITH OVERLAY TEXT**

  ---------------------------------------------------------------------

**Layout Concept**

-   Full-width section with a large background image (construction/site
    photography)

-   CSS backdrop-filter: blur applied to the background --- creates a
    frosted/depth effect

-   Foreground: text and stats block, slightly off-centre for visual
    dynamism

-   Avoid centred symmetric layouts --- use asymmetric left-weighted
    text with right-side image or stat block

**Content Elements**

-   Section eyebrow: \'Who We Are\'

-   Headline: Bold, 2--3 lines --- e.g. \'Four Generations of Building
    Excellence\'

-   Body paragraph: Concise company introduction (founded in KZN, SA,
    2006; expanded to UK; one-stop construction)

-   Legacy badge: Visual callout --- \'4th Generation Builders\' with
    icon or illustrated badge

-   Stat counters (animated on scroll): e.g. Years of Experience \|
    Projects Completed \| Countries Active \| Team Members

-   CTA link: \'Our Story\' → redirects to About Us page

**Visual Treatment**

-   Background image: aerial construction site or a premium project
    photograph

-   Blur intensity: moderate --- enough to soften background without
    losing visual interest

-   Text container: semi-opaque dark (navy/black) panel behind text for
    legibility

-   Stat row: horizontal strip with dividers, contrasting background
    colour

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| The animated stat counters (counting up on scroll entry) are a        |
| high-impact trust signal. Recommended stats: 18+ Years of Experience  |
| \| 200+ Projects Delivered \| 2 Countries \| 1 Dedicated Team. These  |
| replace the static \'0+\' counter currently on the live site.         |
+-----------------------------------------------------------------------+

**SECTION 3 --- Our Services (Brief Overview)**

  ---------------------------------------------------------------------
  **TYPE: FEATURE STRIP + VISUALS WITH REDIRECT CTA**

  ---------------------------------------------------------------------

**Layout Concept**

-   Alternating full-width rows: image left / content right (or vice
    versa) --- fluid, not a grid

-   Each service is a wide horizontal band --- not a card or box

-   Background alternates between off-white and dark navy for visual
    rhythm

-   All service items have a subtle slide-in-from-side animation on
    scroll entry

**Services to Feature (Brief Teasers)**

-   Container-Based Developments (Container Parks, Commercial Spaces,
    Bespoke Builds)

-   Turnkey Project Management (Concept to Completion, Single-Point
    Responsibility)

-   Timber & Steel Construction

-   Park Homes & Bespoke Builds

-   Play Areas & Recreational Spaces

-   Interior Works (Painting, Drywalling, Ceilings, Carpentry,
    End-of-Tenancy Repairs)

**CTA**

-   Prominent button at the bottom of the section: \'Explore All
    Services\' → /services

-   Button style: Red fill with white text; hover state: slight scale-up
    and shadow

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| Each service teaser should include a short 1-line benefit statement   |
| (e.g. \'From concept to completion --- we handle everything\') rather |
| than just a name label. This differentiates from the current site     |
| which only lists service titles. Container builds should be listed    |
| first, as it is a key strategic differentiator.                       |
+-----------------------------------------------------------------------+

**SECTION 4 --- Construction Methods & Materials**

  ---------------------------------------------------------------------
  **TYPE: INTERACTIVE INFORMATIONAL SECTION**

  ---------------------------------------------------------------------

**Purpose**

This section communicates GR Extra Space\'s technical expertise and
proprietary construction methods --- differentiating them from general
contractors and communicating premium quality.

**Layout Concept**

-   Dark-themed section (charcoal/navy background) for contrast and
    industrial feel

-   Icon or illustration-based feature blocks --- not plain text lists

-   Horizontal scroll or tabbed interface for desktop; stacked for
    mobile

-   Each method block reveals more detail on hover or click (accordion /
    flip card / modal)

**Content Blocks --- Three Core Methods**

+----------------------+----------------------+----------------------+
| **Nutech Systems**   | **Timber & Steel**   | **Prefabrication**   |
|                      |                      |                      |
| Advanced building    | Core specialisation  | Off-site component   |
| system using Nutech  | --- structural       | manufacturing        |
| products for         | timber frames and    | reduces waste,       |
| high-performance     | steel construction   | accelerates build    |
| insulation, coatings | from ground up,      | times and ensures    |
| & structural         | engineered for       | precision from       |
| solutions.           | durability.          | foundation upwards.  |
+----------------------+----------------------+----------------------+

**Interactive Behaviour**

-   Desktop: Each block expands or reveals a detail panel on hover ---
    showing a photo, a stat, or a 2-line detail

-   Mobile: Tap to expand; stacked vertically in single column

-   Subtle animated icon or line drawing for each method (e.g. timber
    grain, steel beam, modular block)

-   Background: consider a faint blueprint or technical drawing texture
    for depth

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| Add a fourth \'Container Builds\' block here to tie this section into |
| the container theme running through the entire site. Also consider    |
| adding a short process timeline strip below the three blocks showing  |
| a linear flow: Design → Material Selection → Prefab → On-Site         |
| Assembly → Handover.                                                  |
+-----------------------------------------------------------------------+

**SECTION 5 --- Project Showcase Slider**

  ---------------------------------------------------------------------
  **TYPE: HORIZONTAL SCROLL / DRAG GALLERY SLIDER**

  ---------------------------------------------------------------------

**Layout Concept**

-   Full-width horizontal draggable slider --- no static grid

-   Each project is a wide card (not a small thumbnail) showing: image,
    project name, location, category tag

-   Cards are partially overlapping or offset to create layered depth
    effect

-   Background: dark section so project imagery pops

-   Drag interaction (mouse drag on desktop, swipe on mobile)

**Per-Project Card Contents**

-   Large project photograph (full card background)

-   Category tag: e.g. \'Container Build\' \| \'Timber Frame\' \|
    \'Recreation\'

-   Project name and location (SA / UK flag indicator)

-   Brief 1-line descriptor

-   Arrow or \'View Project\' link --- redirects to detailed project
    page

**Projects to Feature (Top 5 Highlights)**

-   Container Park Development (location TBC --- UK or SA)

-   Bespoke Container Commercial Build

-   Timber Frame Residential Project

-   Play Area & Jungle Gym Build (SA)

-   Park Home / Modular Build

**CTA**

-   Below the slider: \'View All Projects\' button → /projects

-   Slide counter or dot indicator showing position in the gallery

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| Use a CSS/JS library such as Embla Carousel or Keen Slider for the    |
| drag-scroll gallery. Add a subtle horizontal scroll hint animation on |
| load to prompt users to drag. Also include a project count badge:     |
| e.g. \'12+ Projects Completed\' as a header stat above the slider.    |
+-----------------------------------------------------------------------+

**SECTION 6 --- Client Testimonials**

  ---------------------------------------------------------------------
  **TYPE: QUOTE CAROUSEL / STAGGERED DISPLAY**

  ---------------------------------------------------------------------

**Layout Concept**

-   Light section (off-white or very light grey background) for contrast
    after dark project section

-   Testimonials displayed as large quote blocks --- not small cards

-   Auto-rotating carousel with manual navigation dots

-   One testimonial displayed prominently at a time (full-width quote
    treatment)

-   Quote marks: large decorative quotation marks as visual element

**Per-Testimonial Elements**

-   Full quote text (displayed in a readable, generous font size)

-   Client name and identifier (e.g. \'Thor Christian --- Impande,
    Norway\')

-   Country/flag indicator where applicable

-   Optional: star rating (5-star) if consistently 5-star reviews

-   Optional: small circular avatar/photo placeholder

**Existing Testimonials (from current site)**

-   Thor Christian --- Norway / Impande

-   Jane Pillay

-   Balraj Burnham --- (2 properties, carpentry)

-   Dr Andre --- (shed works)

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| Add a trust strip above or below the testimonials section featuring   |
| Google Review rating, Houzz profile, or any industry accreditation    |
| logos (NHBC, FMB, or equivalent). This provides third-party           |
| credibility beyond the quotes alone. Also aim to source 2--3          |
| additional testimonials for UK-based projects to demonstrate          |
| international client satisfaction.                                    |
+-----------------------------------------------------------------------+

**SECTION 7 --- Contact Us Teaser**

  ---------------------------------------------------------------------
  **TYPE: FULL-WIDTH CTA BAND --- REDIRECTS TO /CONTACT**

  ---------------------------------------------------------------------

**Layout Concept**

-   Bold, full-width section --- high visual contrast to encourage
    action

-   Dark navy or deep red background with white large-format text

-   NOT a form --- this is a teaser/gateway; the actual form lives on
    /contact

-   Single focused message with one primary CTA button

-   Optional: subtle background texture (blueprint / concrete / subtle
    animated gradient)

**Content Elements**

-   Headline: \'Ready to Start Your Next Project?\' or \'Let\'s Build
    Something Great Together\'

-   Sub-copy: 1-line --- \'Get in touch for a free consultation and
    competitive quote\'

-   CTA Button: \'Contact Us\' → /contact (red fill, large, prominent)

-   Secondary supporting detail: South Africa flag + UK flag with region
    labels

-   Optional: Quick contact info strip --- SA phone \| UK phone \| email
    (no form)

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| Include a subtle animated background element in this section --- e.g. |
| a very faint rotating globe or a slow-scrolling blueprint --- to      |
| visually reinforce the international reach of the business, as        |
| mentioned in the brief. Keep it subtle so it does not distract from   |
| the CTA.                                                              |
+-----------------------------------------------------------------------+

**SECTION 8 --- Our Partners**

  ---------------------------------------------------------------------
  **TYPE: LOGO MARQUEE / PARTNER STRIP**

  ---------------------------------------------------------------------

**Layout Concept**

-   Clean, minimal section --- white or very light background

-   Infinite auto-scrolling logo marquee (left-to-right continuous loop)

-   Logos displayed in greyscale --- on hover, they reveal full colour

-   Section label: \'Trusted Partners\' or \'Brands We Work With\'

-   No heavy layout --- thin strip, not a full-section element

**Content**

-   Partner/client logos to be supplied by GR Extra Space

-   Nutech logo should be prominently included (product partner
    mentioned in brief)

-   Recommended: 6--12 logos for an effective marquee loop

-   If insufficient logos, supplement with accreditation bodies,
    certifications, or material brands used

**Behaviour**

-   Marquee auto-scrolls continuously at a gentle speed

-   On hover: marquee pauses; individual logo transitions to colour

-   Mobile: same marquee, slightly smaller logos

+-----------------------------------------------------------------------+
| **Improvisation Note**                                                |
|                                                                       |
| Consider adding a secondary row of logos if enough partners/clients   |
| are available --- alternating row directions (left-to-right and       |
| right-to-left) creates visual depth. This section also acts as social |
| proof even before a visitor reads testimonials.                       |
+-----------------------------------------------------------------------+

**SECTION 9 --- Footer**

  ---------------------------------------------------------------------
  **TYPE: COMPREHENSIVE MULTI-COLUMN FOOTER**

  ---------------------------------------------------------------------

**Layout Concept**

-   Dark background (near black or very deep navy)

-   4-column layout on desktop, 2-column on tablet, stacked on mobile

-   Top row: logo + brief tagline

-   Bottom bar: copyright, privacy policy, website credit

**Footer Columns**

-   Column 1 --- Logo + Tagline + Social Icons (LinkedIn, Facebook,
    Instagram)

-   Column 2 --- Quick Links: Home, Services, Projects, About, Contact

-   Column 3 --- Services: Container Builds, Timber & Steel, Park Homes,
    Play Areas, Turnkey PM

-   Column 4 --- Contact Details: SA address/phone, UK address/phone,
    email addresses

**Dual-Region Display**

-   SA and UK contact details displayed side-by-side or in two sub-rows

-   Flag emojis or small SVG flag icons to differentiate regions clearly

**5. Responsive Layout Summary**

The following summarises how each section adapts across the three
primary breakpoints:

  ------------------- ---------------- ---------------- -----------------
  **Section**         **Mobile**       **Tablet**       **Desktop**

  **Navbar**          Hamburger menu + Logo + 3 links + Full links + CTA
                      logo only        hamburger        button

  **Hero**            Static image,    Video + stacked  Full-viewport
                      stacked CTAs     CTAs             video + inline
                                                        CTAs

  **Intro**           Stacked: text    2-col: text      Asymmetric with
                      then stats       left, stats      blur bg
                                       right            

  **Services**        Stacked          2-col service    Alternating
                      full-width rows  cards            image/text bands

  **Methods**         Stacked blocks   2 per row +      3-col interactive
                      (accordion)      expand           blocks

  **Projects**        Swipe carousel   Swipe (1.5 cards Drag slider (2--3
                      (1 card)         visible)         visible)

  **Testimonials**    Single quote +   Single quote +   Large quote
                      nav dots         nav dots         carousel

  **Contact CTA**     Stacked text +   Side-by-side     Full-width split
                      button                            band

  **Partners**        Slower marquee,  Marquee, 1 row   Marquee, 1--2
                      1 row                             rows

  **Footer**          Stacked single   2-column grid    4-column grid
                      column                            
  ------------------- ---------------- ---------------- -----------------

**6. Suggested React Component Architecture**

The following component breakdown is recommended for the home page based
on the layout plan above. This is a starting reference for the
development team:

-   pages/HomePage.jsx --- root page component, renders all sections in
    order

-   components/layout/Navbar.jsx --- sticky navigation with scroll-aware
    styling

-   sections/HeroSection.jsx --- video hero with overlay and animated
    text

-   sections/IntroSection.jsx --- blur background intro with stat
    counters

-   sections/ServicesOverview.jsx --- alternating image/text service
    strips

-   sections/MethodsSection.jsx --- interactive dark-themed construction
    methods

-   sections/ProjectsSlider.jsx --- horizontal drag carousel

-   sections/TestimonialsSection.jsx --- quote carousel

-   sections/ContactCTA.jsx --- full-width CTA teaser band

-   sections/PartnersMarquee.jsx --- auto-scroll logo strip

-   components/layout/Footer.jsx --- 4-column footer

-   components/ui/AnimatedCounter.jsx --- reusable scroll-triggered
    number counter

-   components/ui/SectionLabel.jsx --- reusable eyebrow/tag component

**7. Next Steps**

The following items are recommended before development begins on the
Home Page:

1.  Asset Gathering: Collect hero video footage, project photography,
    team images, partner logos

2.  Colour Token Setup: Define Tailwind config with brand colours (navy,
    red, yellow, grey)

3.  Font Selection: Choose primary and secondary typefaces (suggest:
    Inter or Plus Jakarta Sans for body; Clash Display or Syne for
    headings)

4.  Project Repository Setup: Initialise React + Vite project with
    Tailwind CSS configured

5.  Design Phase Planning: Schedule wireframe/mockup creation based on
    this layout plan (Phase 2 of planning)

6.  Other Pages Planning: Once home page layout is approved, plan
    Services, Projects, About Us, and Contact Us pages

*GR Extra Space --- Website Layout Plan v1.0*

*This document is a planning reference only. Design and visual styling
to follow in Phase 2.*
