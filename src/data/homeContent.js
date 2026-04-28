import img1 from '../assets/landing page/landing page 1.png';
import img2 from '../assets/landing page/landing page 2.png';
import img3 from '../assets/landing page/landing page 3.png';
import img4 from '../assets/landing page/landing page 4.png';
import img5 from '../assets/landing page/landing page 5.png';
import img6 from '../assets/landing page/landing page 6.png';

import srvImg1 from '../assets/our services/Nutech.png';
import srvImg2 from '../assets/our services/container parks and conversions.png';
import srvImg3 from '../assets/our services/Renovations.png';
import srvImg4 from '../assets/our services/jungle gym and play areas.png';
import srvImg5 from '../assets/our services/Storage units.png';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
]

export const heroSlides = [
  {
    image: img1,
    caption: 'Plans for Modern Living',
    category: 'Custom Nutec',
    bgClass: 'bg-[#E4E4E4]',
  },
  {
    image: img2,
    caption: 'Your vision fully delivered',
    category: 'Turnkey solutions',
  },
  {
    image: img3,
    caption: 'Bold, Modular, Limitless',
    category: 'Container builds',
  },
  {
    image: img4,
    caption: 'Container Spaces, Reimagined',
    category: 'Container Parks & Conversions',
  },
  {
    image: img5,
    caption: 'Strength You Can Trust',
    category: 'Specialized in Timber & Steel:',
  },
  {
    image: img6,
    caption: 'Retail, Reimagined',
    category: 'Container park',
    bgClass: 'bg-[#050A14]',
  },
]

export const introStats = [
  { label: 'Years of Experience', value: 20, suffix: '+' },
  { label: 'Projects Delivered', value: 200, suffix: '+' },
  { label: 'Countries Active', value: 2 },
  { label: 'Dedicated Team', value: 1 },
]

export const services = [
  {
    id: 'nutec',
    title: 'Nutec',
    shortLabel: 'Nutec',
    benefit: 'High-quality Nutec homes deliver durable, fire-resistant, and energy-efficient living. Built fast and cost-effective, they provide a modern, sustainable alternative to traditional construction without compromising strength, safety, or long-term value.',
    image: srvImg1,
  },
  {
    id: 'container-parks',
    title: 'Container Parks and Conversions',
    shortLabel: 'Container Parks',
    benefit: 'Transform unused spaces into vibrant destinations with custom container parks and conversions. Flexible, stylish, and fast to deploy, they create unique retail, dining, and lifestyle hubs with strong commercial appeal.',
    image: srvImg2,
  },
  {
    id: 'renovation',
    title: 'Construction Renovation (Old to New)',
    shortLabel: 'Renovation',
    benefit: 'We turn outdated properties into modern, high-value spaces. From homes to offices, our renovations maximize aesthetics, functionality, and return on investment while preserving structural integrity and unique architectural character.',
    image: srvImg3,
  },
  {
    id: 'playgrounds',
    title: 'Kids Steel Playgrounds',
    shortLabel: 'Playgrounds',
    benefit: 'Durable steel playgrounds designed for safety, creativity, and long-term use. Our play areas encourage physical activity, social interaction, and imaginative play while enhancing community spaces with vibrant, inclusive designs.',
    image: srvImg4,
  },
  {
    id: 'storage-units',
    title: 'Storage Units',
    shortLabel: 'Storage Units',
    benefit: 'Secure, scalable storage unit solutions tailored for residential and commercial needs. Designed for durability and easy access, they maximize space efficiency while providing reliable, cost-effective storage for growing businesses and homeowners.',
    image: srvImg5,
  },
]

export const methods = [
  {
    id: 'nutech',
    title: 'Nutech Systems',
    summary:
      'High-performance insulation, coatings, and structural solutions tuned for long-term reliability.',
    detail:
      'Nutech-first envelopes improve comfort, control thermal transfer, and provide premium weather resilience across UK and SA climates.',
  },
  {
    id: 'timber-steel',
    title: 'Timber and Steel',
    summary:
      'Engineered structural frames that balance speed, strength, and design flexibility.',
    detail:
      'Our teams build with precise structural planning so projects gain rigidity and efficient assembly from the earliest stage.',
  },
  {
    id: 'prefab',
    title: 'Prefabrication',
    summary:
      'Off-site manufacturing that shortens project timelines and improves quality consistency.',
    detail:
      'Factory-assembled components reduce material waste and rework, while accelerating on-site programs and improving handover certainty.',
  },
  {
    id: 'container',
    title: 'Container Builds',
    summary:
      'Modular container architecture for rapid, scalable, and adaptable spaces.',
    detail:
      'We transform shipping containers into parks, offices, and bespoke mixed-use environments with engineered comfort and premium finish options.',
  },
]

export const processTimeline = [
  'Design',
  'Material Selection',
  'Prefabrication',
  'On-Site Assembly',
  'Handover',
]

import port1 from '../assets/portfolio/Kids play areas.png';
import port2 from '../assets/portfolio/Classrooms for underprivileged children.png';
import port3 from '../assets/portfolio/Container feeding kitchens.png';
import port4 from '../assets/portfolio/Nutech classrooms.png';
import port5 from '../assets/portfolio/Office renovations.png';
import port6 from '../assets/portfolio/Nutech offices.png';
import port7 from '../assets/portfolio/Container kitchens.png';
import port8 from '../assets/portfolio/Medical suite Redesigned.png';

export const projects = [
  {
    name: 'Kids play areas',
    summary: 'Vibrant durable steel playground for safety and fun, featuring slides, climbing elements, and weather-resistant construction, enhancing community spaces for children.',
    image: port1,
  },
  {
    name: 'Classrooms for underprivileged children',
    summary: 'Empowering communities through impactful educational infrastructure, delivered in collaboration with corporate social responsibility initiatives.',
    image: port2,
  },
  {
    name: 'Container feeding kitchens',
    summary: 'Container feeding kitchen for impoverished areas built in partnership with Vivian Reddy Sibaya Community Trust',
    image: port3,
  },
  {
    name: 'Nutech classrooms',
    summary: 'Delivering durable Nutec classrooms that enhance learning environments through fast, sustainable construction and impactful community-focused infrastructure development.',
    image: port4,
  },
  {
    name: 'Office renovations',
    summary: 'Delivering sophisticated workspace transformations that optimize professional flow through premium structural and interior upgrades.',
    image: port5,
  },
  {
    name: 'Nutech offices',
    summary: 'Sustainable Nutec structural solutions providing durable, high-performance modular office environments designed for modern business agility.',
    image: port6,
  },
  {
    name: 'Container kitchens',
    summary: 'Customized container kitchen conversions providing durable, scalable, and efficient mobile culinary hubs for commercial demands.',
    image: port7,
  },
  {
    name: 'Precision Refurbishment: Modern Medical Suite',
    summary: 'A complete transformation focused on care, compliance, and comfort, blending functionality with a clean, modern aesthetic.',
    image: port8,
  },
]

export const testimonials = [
  {
    quote:
      'GR Extra Space delivered excellent craftsmanship and professionalism throughout our project. Their ability to solve challenges quickly stood out.',
    client: 'Thor Christian',
    detail: 'Impande, Norway',
  },
  {
    quote:
      'The team handled everything from structural work to finishing with care. Communication was clear and timelines were respected.',
    client: 'Jane Pillay',
    detail: 'Private Residential Client',
  },
  {
    quote:
      'Two separate properties, one reliable team. Their carpentry and finishing quality made a real difference to both sites.',
    client: 'Balraj Burnham',
    detail: 'Residential Portfolio Owner',
  },
  {
    quote:
      'From planning to completion, the shed works were smooth and well-executed. I would confidently work with them again.',
    client: 'Dr Andre',
    detail: 'Private Client',
  },
  {
    quote:
      'I\'ve worked with Viky and GR Extra Space on many projects. His professionalism and work are executed exceptionally well — reliable and consistently outstanding.',
    client: 'Vivian Reddy',
    detail: 'Business Leader & Developer',
  },
  {
    quote:
      'The team is so good,such a pleasure to work with. Polite,neat and reliable.',
    client: 'KERRY',
    detail: 'Upperhighway baby home, SA',
  },
]

export const partnersPrimary = [
  'Nutech',
  'BuildSafe',
  'SteelWorks Co',
  'TimberCraft',
  'PrimeInsulate',
  'ModularPro',
]

export const partnersSecondary = [
  'SiteGuard',
  'CivCon',
  'RapidFrame',
  'ProFinish',
  'UrbanPlay',
  'Structura',
]

import contactImg from '../assets/contact/img1.png';

export const contactImage = contactImg;
