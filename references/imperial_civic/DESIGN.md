---
name: Imperial Civic
colors:
  surface: '#f6fafe'
  surface-dim: '#d6dade'
  surface-bright: '#f6fafe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f8'
  surface-container: '#eaeef2'
  surface-container-high: '#e4e9ed'
  surface-container-highest: '#dfe3e7'
  on-surface: '#171c1f'
  on-surface-variant: '#43474f'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#edf1f5'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#005db6'
  on-secondary: '#ffffff'
  secondary-container: '#63a1ff'
  on-secondary-container: '#00376f'
  tertiary: '#002035'
  on-tertiary: '#ffffff'
  tertiary-container: '#003656'
  on-tertiary-container: '#4ea2e2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#a9c7ff'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#00468c'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#94ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004b74'
  background: '#f6fafe'
  on-background: '#171c1f'
  surface-variant: '#dfe3e7'
  imperial-blue: '#003366'
  royal-blue: '#004A99'
  sky-tint: '#E3F2FD'
  success-emerald: '#059669'
  warning-amber: '#D97706'
  error-ruby: '#DC2626'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style

The design system establishes a new standard for digital governance, blending the authority of a public institution with the polished sophistication of a high-end SaaS platform. The personality is **authoritative, premium, and forward-thinking**, designed to inspire confidence and civic pride. 

The aesthetic moves away from traditional flat government interfaces toward a **layered, modern corporate** style. It utilizes subtle glassmorphism and depth to create a sense of organized complexity that remains accessible. By prioritizing "tactile trust," the design system ensures that every interaction—from paying a utility bill to tracking a permit—feels secure, efficient, and exceptionally refined. The target audience is a modern citizenry that expects government services to be as intuitive and beautiful as their most-used private sector applications.

## Colors

The palette is anchored by **Imperial Blue**, a deep, saturated navy that replaces flat tones with a sense of architectural depth.

- **Primary (Imperial Blue):** Used for core branding, primary actions, and structural navigation. It serves as the foundation of trust.
- **Secondary (Royal Blue):** A more vibrant blue used for interactive highlights and secondary actions.
- **Semantic Blues:** A range of blues from `#003366` to `#E3F2FD` is used to create tonal layering and soft gradients.
- **Gradients:** Subtle linear gradients (e.g., Imperial Blue to Royal Blue at 135°) should be applied to primary hero sections and main action buttons to add a premium, modern dimension.
- **Surface & Background:** The background uses a crisp, cool neutral (`#F1F5F9`) to allow the white "glass" cards to pop with clarity.

## Typography

This design system uses **Plus Jakarta Sans** to achieve a modern, approachable, yet professional character. The typeface's open counters and geometric structure ensure high legibility while appearing more contemporary than traditional sans-serifs.

- **Refinement:** Headlines use tight letter-spacing (-0.02em to -0.03em) to feel cohesive and "designed," while body copy uses a slightly more generous line height (1.6) to ensure comfortable reading of long-form civic documentation.
- **Hierarchy:** Use Weight 800 (Extra Bold) for display titles to command attention. Weight 600 (Semi Bold) is preferred for labels and interactive elements to maintain a punchy, SaaS-like interface.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid with Fixed Max-Width**. The content is centered in a 1440px container on large screens to maintain focus.

- **Grid Model:** A standard 12-column grid is used for desktop. For mobile, a single-column layout is preferred for core actions, while secondary items can utilize a 2-column small card grid.
- **Rhythm:** An 8px base unit drives all spacing. Larger margins (48px) are used on desktop to create a "premium" feel with plenty of whitespace, preventing the portal from feeling cluttered with information.
- **Reflow:** Components should utilize flexbox and CSS grid to reflow seamlessly. On tablets, margins reduce to 32px, and gutters remain 24px to preserve airiness.

## Elevation & Depth

This design system uses **Layered Depth** to separate the user from the background and signify hierarchy.

- **Tonal Tiers:** The main workspace is the `neutral` background. Cards sit on top of this in pure white or a subtle glass variant.
- **Glassmorphism:** For top-level navigation bars and certain sidebar elements, use a backdrop blur (20px) with a semi-transparent white fill (80% opacity) and a 1px white inner border to create a "glass" effect.
- **Soft Shadows:** Avoid black shadows. Use tinted, diffused shadows based on the Imperial Blue palette.
  - *Standard Elev:* `0px 4px 20px rgba(0, 51, 102, 0.08)`
  - *Hover/Active:* `0px 12px 32px rgba(0, 51, 102, 0.12)`
- **Outlines:** Use very low-contrast borders (`#E2E8F0`) combined with these shadows to define shapes without creating visual harshness.

## Shapes

The design system utilizes **Rounded (Level 2)** geometry to feel friendly and modern while retaining a professional structure.

- **Standard Elements:** All buttons, input fields, and chips use a 0.5rem (8px) radius.
- **Container Elements:** Cards and large modal containers use a 1rem (16px) radius to emphasize the "layered" look.
- **Pill Elements:** Status indicators (chips) and toggle switches use a full "pill" radius for distinct visual differentiation from buttons.

## Components

### Buttons
Primary buttons should feature a subtle gradient from `#003366` to `#004A99` and a soft lift shadow. Secondary buttons are "Ghost" style with a 1px border in Royal Blue. Text should be Semi-Bold for all button states.

### Glass Cards
Cards are the primary content vessel. They must have a 16px corner radius, a subtle white border, and the Standard Elevation shadow. On hover, the shadow deepens, and the card lifts slightly (Y-axis -2px).

### Input Fields
Inputs should be clean with a light grey background (`#F8FAFC`) that transitions to a white background with a 2px Imperial Blue border on focus. Labels should be small, bold, and placed consistently above the field.

### Chips & Badges
Use high-contrast semantic colors for status (e.g., Emerald for "Completed"). Use a pill shape (full radius) and Weight 700 for the text to ensure they look like modern "app" elements rather than traditional web links.

### Navigation Header
The main header should use the Glassmorphism effect. It should remain "sticky" at the top of the viewport to provide constant access to search and account profile functions.