# GR Extra Space Frontend Foundation

This repository now contains the complete foundation layer for the GR Extra Space website redesign using React, Vite, and Tailwind CSS.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Embla Carousel
- React Router DOM
- Lucide React

## Why Vite 5 and React 18?

The local machine is currently on Node 20.17, while the latest Vite 8 template requires Node 20.19+.
To keep development unblocked and stable, the project is pinned to a Node-compatible toolchain.

## Implemented Foundation

- Routing skeleton for Home, Services, Projects, About, and Contact
- Sticky, scroll-aware navigation with mobile drawer
- Home page section architecture aligned to the PRD
- Tailwind theme tokens for brand palette, typography, and utility animations
- Shared UI primitives including animated stat counter and section labels
- Footer with dual-region layout structure

## Section Scaffolding Added

- HeroSection
- IntroSection
- ServicesOverview
- MethodsSection
- ProjectsSlider
- TestimonialsSection
- ContactCTA
- PartnersMarquee

## Project Structure

src/
	components/
		layout/
			Navbar.jsx
			Footer.jsx
		ui/
			AnimatedCounter.jsx
			SectionLabel.jsx
	data/
		homeContent.js
	pages/
		HomePage.jsx
		PlaceholderPage.jsx
	sections/
		HeroSection.jsx
		IntroSection.jsx
		ServicesOverview.jsx
		MethodsSection.jsx
		ProjectsSlider.jsx
		TestimonialsSection.jsx
		ContactCTA.jsx
		PartnersMarquee.jsx
	App.jsx
	main.jsx
	index.css

## Local Development

Install dependencies:

npm install

Start dev server:

npm run dev

Create production build:

npm run build

Run lint checks:

npm run lint

## Next Build Phase

- Replace placeholder page content with real page implementations
- Integrate real project imagery, hero video, and partner logos
- Connect live contact workflows in backend phase
