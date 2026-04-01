You are a senior frontend developer working on a Coffee Shop website.

## Tech Stack

- React (Functional Components) with Vite 7
- Tailwind CSS v4
- Swiper.js (for sliders)

## File Structure

- src/styles/base.css → @layer base
- src/styles/components.css → @layer components
- src/styles/layout.css → @layer components
- src/styles/utilities.css → @layer utilities
- src/App.jsx → all components written here

## CSS Architecture Rules

- NEVER use inline Tailwind classes in JSX
- ALWAYS create reusable classes in respective CSS files
- Use @apply only
- No raw @media queries — use Tailwind responsive variants only
- No duplication across files
- Non-standard pixel values format:
  .classname {
  @apply text-[10px];
  }

## Breakpoints

- sm: 320px
- md: 768px
- lg: 1152px
- xl: 1440px
- 2xl: 1920px

## Typography

for headings --font-playfair: "Playfair Display", serif;
for body --font-rubik: "Rubik", sans-serif;

## Colors

- Heading/Text → #443c28
- Secondary background → #F5F2EB

## Reusable Components Required

- section-heading (reusable)
- buttons (reusable)
- underline system (reusable)

## Card Behavior

- sm/md → 1 card visible
- lg+ → 3 or more cards visible
- Navigation moves group-wise (not one by one)

## Animation

- Use fade-in system for each section
- Classes: .fade-section and .fade-in

## Naming Convention

- layout → section, container, grid, spacing
- components → button, card, heading, navbar
- utilities → helper classes (fade, text, etc.)

## Button

- should be with padding inline & padding block with border & with animation when hover
  the text color become bg color & bg color become text-color

## Code Quality

- Clean, scalable, production-ready
- No unnecessary code
- Semantic HTML
- Mobile-first approach

---

## Coffee Shop Website Sections

Design a complete Coffee Shop website with these sections:

### 1. Navbar

- Logo (left) → "Brew & Co"
- Nav links → Home, Menu, About, Gallery, Contact
- CTA button → "Order Now"
- Mobile → hamburger menu
- Sticky on scroll with subtle shadow

### 2. Hero Section

- Full screen height
- Background → dark coffee image
- Heading → "Every Sip Tells a Story"
- Subheading → "Freshly brewed coffee made with love"
- Two buttons → "Explore Menu" (primary) + "Our Story" (outline)
- Fade-in animation on load

### 3. About Section

- Left → coffee shop image
- Right → heading, description, stats (Years, Cups Served, Locations)
- Fade-in on scroll

### 4. Menu Section

- Section heading → "Our Menu"
- Swiper.js slider
- Cards → Coffee image, name, description, price, "Order Now" button
- sm/md → 1 card | lg+ → 3 cards
- Group-wise navigation

### 5. Why Choose Us Section

- 4 feature cards
- Icon + heading + description
- Fresh Ingredients, Expert Baristas, Cozy Atmosphere, Fast Service

### 6. Gallery Section

- Masonry or grid layout
- 6+ coffee images
- Hover overlay effect

### 7. Testimonials Section

- Swiper.js slider
- Customer photo, name, rating (stars), review text
- sm/md → 1 card | lg+ → 3 cards

### 8. Contact Section

- Left → address, phone, email, opening hours
- Right → contact form (name, email, message, submit button)

### 9. Footer

- Logo + tagline
- Quick links
- Social media icons
- Copyright text

---

## Instructions

1. Write all code in App.jsx only
2. Write all base styles in base.css
3. Write all component styles in components.css
4. Write all layout styles in layout.css
5. Write all utility styles in utilities.css
6. Use placeholder images from unsplash.com or picsum.photos
7. Make every section fully responsive
8. Apply fade-in animation to every section
9. Do not create any new files or folders
10. Follow all rules strictly — no inline Tailwind in JSX
