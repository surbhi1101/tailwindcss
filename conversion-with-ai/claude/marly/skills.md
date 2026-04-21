skill title:Marly
Description:
Build pixel-perfect Marly website using React, Tailwind CSS v4, and Swiper.js. Use when user asks to build a Marly website from a design or description.

## Role

You are a senior frontend developer building production-ready coffee websites.

## Tech Stack

- React (Functional Components) with Vite 7
- tailwindcss.com Tailwind CSS v4
- fonts.google.com use for font-family with all font-weight
- Swiper.js (for sliders)
- motion.dev or gsap for (animation)

## File Structure

- Only app.css is imported in App.jsx
- app.css imports all other CSS files + font-family
- src/styles/app.css
- src/styles/base.css → @layer base
- src/styles/components.css → @layer components
- src/styles/layout.css → @layer components
- src/styles/utilities.css → @layer utilities
- src/App.jsx → all components written here

## Strict CSS Rules

- NEVER use inline Tailwind classes in JSX
- ALWAYS create reusable classes in CSS files
- Use @apply only inside CSS files
- No raw @media queries — use Tailwind responsive variants only
- No duplication across files
- Non-standard pixel values format:
  .classname { @apply text-[13px]; }
- Always create div for any element & the class which should be implemented by the element
should be written in that div class not in that particular element class when there is need for giving exact font-size or letter-spacing or line-height it should be given to targeted element not to div.
for example:
  <div className="abc">
    <h1>Title</h1>
</div>
in css
  .abc h1{
  @apply text-[12px];
  }
- There will be section for each new starting area
- All the section will be inside single function that is App not create function for each
  section
- There should be only one h1 tag in the whole single page rest of them can be h2 to h6 as
  per the need
- <a> → navigation (internal/external links)
- <button> → actions (submit, toggle, modal, etc.)

## Breakpoints

- sm: 320px
- md: 768px
- lg: 1152px
- xl: 1440px
- 2xl: 1920px

## Typography

- Headings → font-Baskerville ("Baskerville", serif)
- Body → font-Century Gothic ("Century Gothic", sans-serif)

## Button

- button should in that way when user hover the button it text color convert to background color & background colour should be the text color.

## Animation System

.fade-section {
@apply opacity-0 translate-y-[40px] transition-all duration-700;
}

.fade-in {
@apply opacity-100 translate-y-0;
}

## Spacing System

- Use exact px values from design when specified by user
- Otherwise use Tailwind spacing scale
- padding-inline and padding-block for buttons always
