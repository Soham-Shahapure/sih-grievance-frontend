---
name: Civic Integrity
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#424751'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737783'
  outline-variant: '#c2c6d3'
  surface-tint: '#255dad'
  primary: '#00346f'
  on-primary: '#ffffff'
  primary-container: '#004a99'
  on-primary-container: '#9bbdff'
  inverse-primary: '#abc7ff'
  secondary: '#0b6d3b'
  on-secondary: '#ffffff'
  secondary-container: '#9ef6b6'
  on-secondary-container: '#177341'
  tertiary: '#532b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#743e00'
  on-tertiary-container: '#ffa95b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#00458f'
  secondary-fixed: '#9ef6b6'
  secondary-fixed-dim: '#83d99c'
  on-secondary-fixed: '#00210e'
  on-secondary-fixed-variant: '#00522a'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77a'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for the Pimpri-Chinchwad Municipal Corporation (PCMC) to facilitate efficient, transparent, and accessible digital governance. The personality is **institutional, reliable, and civic-minded**, ensuring that every citizen—regardless of digital literacy—feels confident navigating municipal services.

The design style follows a **Modern Corporate** aesthetic with a focus on **Structural Clarity**. It utilizes a card-based architecture to modularize complex data, generous whitespace to reduce cognitive load during administrative tasks, and a strict adherence to accessibility standards (WCAG 2.1 AA). The interface avoids decorative trends in favor of utilitarian elegance, ensuring longevity and trust.

## Colors

The palette is rooted in civic tradition while maintaining high digital performance.

*   **Primary (Official PCMC Blue):** Used for header backgrounds, primary action buttons, and active states. It represents stability and authority.
*   **Secondary (Deep Green):** Reserved for success states, environmental services, and secondary navigation elements. It symbolizes growth and municipal prosperity.
*   **Tertiary (Saffron/Yellow):** A high-contrast accent used exclusively for alerts, critical warnings, and urgent civic notifications. 
*   **Neutral:** A range of cool grays (from `#F8F9FA` to `#212529`) provides the scaffolding for content, ensuring the primary colors remain impactful without overwhelming the user.

## Typography

This design system utilizes **Inter** for its exceptional legibility and comprehensive support for multi-script environments, specifically optimizing for English and Marathi pairings. 

- **Scale:** A typographic scale of 1.25 (Major Third) is used to create a clear hierarchy between administrative headers and dense informational text.
- **Weights:** Use Bold (700) for primary headings to convey authority, Semi-Bold (600) for sub-sections, and Regular (400) for all body copy to maximize readability.
- **Marathi Pairing:** When displaying Marathi text alongside English, ensure the line-height is increased by 10-15% to accommodate the Devanagari script's distinctive ascenders and descenders.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for desktop and a **4-column grid** for mobile.

- **Grid Logic:** Use a 24px gutter to maintain clear separation between service cards. 
- **Margins:** 32px safe-zones on desktop prevent content from feeling cramped; these reduce to 16px on mobile to maximize screen real estate.
- **Rhythm:** An 8px base unit (linear scale) governs all padding and margin decisions. Component heights (buttons, inputs) should always be multiples of 8px.
- **Service Hubs:** Group related civic services (e.g., Property Tax, Water Bill) into modular card grids that reflow from 3 columns on desktop to 1 column on mobile.

## Elevation & Depth

To maintain a professional and trustworthy feel, this design system avoids heavy drop shadows. Instead, it utilizes **Tonal Layering** and **Low-Contrast Outlines**.

1.  **Level 0 (Surface):** The main background (`#F8F9FA`).
2.  **Level 1 (Cards):** Pure white (`#FFFFFF`) with a subtle 1px border (`#DEE2E6`).
3.  **Level 2 (Interactive):** When hovered, cards should lift slightly using a very soft, diffused shadow (0px 4px 12px rgba(0,0,0,0.05)) to indicate interactivity.
4.  **Level 3 (Modals/Overlays):** A more pronounced shadow to focus attention on critical forms or search interfaces.

Avoid background blurs or frosted glass effects, as they can detract from the authoritative nature of a government portal.

## Shapes

The design system employs a **Soft** shape language. 

- **Standard Elements:** Buttons, input fields, and small UI components use a 0.25rem (4px) radius. This provides a modern touch without appearing overly "casual" or "playful."
- **Containers:** Service cards and large notification banners use a 0.5rem (8px) radius to create a distinct visual boundary for content modules.
- **Form Controls:** Checkboxes and radio buttons follow the 4px rounding rule to ensure consistency across the UI.

## Components

### Buttons
- **Primary:** Solid PCMC Blue with White text. High contrast, used for the main action (e.g., "Pay Now").
- **Secondary:** Outline PCMC Blue with 1px border. Used for navigation or less critical actions.
- **Alert:** Solid Saffron with Dark Grey text for high-importance warnings.

### Service Cards
Cards are the primary vehicle for PCMC services. They must feature a 24px icon in PCMC Blue, a Headline-MD title, and a short 1-line description. The entire card surface is clickable.

### Inputs & Forms
Forms must be clear and labeled on top. Fields use a 1px `#CED4DA` border that thickens and changes to PCMC Blue on focus. Error states must use a dedicated Red (`#D32F2F`) and include an icon for accessibility.

### Navigation
A "Mega Menu" approach is recommended for the desktop header to organize the vast array of municipal departments. For mobile, a bottom-tab bar should house the four most used actions: Home, Services, Track Status, and Profile.

### Status Indicators
Small, pill-shaped chips with Semi-Bold text.
- `Pending`: Light Gray background / Dark Gray text.
- `Approved`: Light Green background / Deep Green text.
- `Action Required`: Light Saffron background / Dark Brown text.