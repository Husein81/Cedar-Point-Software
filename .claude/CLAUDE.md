# Cedar Point Software — Agent Constitution

## Company Identity

| Field        | Value                          |
| ------------ | ------------------------------ |
| Company      | Cedar Point                    |
| Domain       | www.cedarpoint.software        |
| Phone        | +961 76 008 957                |
| Primary email | contact@cedarpoint.software   |
| Secondary email | contact@cedarpoint.tech     |

### Products & Services
- **POS System** — point-of-sale for restaurants and retail
- **Inventory Management System** — stock tracking, multi-location
- **Digital Menu** — QR-based interactive menus
- **Driver Tracking System** — real-time delivery logistics
- **Custom Digital Solutions** — bespoke software for any vertical

---

## Design Source of Truth

Always reference the Figma file before writing any UI:
**https://www.figma.com/design/0blc5kTom0BZDEmE0Mc8qS/Cedar-Point-Software?node-id=0-1&t=IYmWaD845W1UB6XG-1**

Rules:
- Match spacing, typography, colors, and component anatomy from Figma exactly.
- If Figma and these instructions conflict, Figma wins on visual decisions; these instructions win on code decisions.
- Never invent design decisions not present in Figma or explicitly requested.

---

## Tech Stack

| Layer         | Technology                        |
| ------------- | --------------------------------- |
| Framework     | Next.js 16 (App Router)           |
| Language      | TypeScript 5 (strict mode)        |
| Styling       | Tailwind CSS 4                    |
| Animation     | Framer Motion 12                  |
| UI primitives | shadcn/ui + Radix UI              |
| Icons         | Lucide React                      |
| Slider/Swipe  | Swiper 12                         |
| Variant util  | class-variance-authority (cva)    |
| Class merge   | tailwind-merge + clsx             |

### Next.js Version Warning
This project uses **Next.js 16** — a version with breaking changes from what most training data covers. Before writing any routing, rendering, metadata, or data-fetching code, **read `node_modules/next/dist/docs/`** and respect all deprecation notices.

---

## Engineering Standards

### 1. Clean Code
- Names are self-documenting. No abbreviations unless universal (`id`, `url`, `px`).
- Functions do one thing. If a function needs a comment to explain what it does, rename it or split it.
- Max file length: ~200 lines. Split if longer.
- No dead code, no commented-out blocks, no `TODO` left in shipped code.

### 2. SOLID
- **S** — Every component/module has a single reason to change.
- **O** — Extend via props/composition, never by modifying a shared base component.
- **L** — Subtypes (e.g., specialized card variants) must be substitutable for the base type.
- **I** — Props interfaces are minimal. Never force a consumer to pass props it doesn't need.
- **D** — Components depend on abstractions (props, context, hooks), not on concrete implementations.

### 3. DRY
- Extract any logic or markup used more than once into a shared component, hook, or util.
- Data (copy, links, config) lives in `config.ts` co-located with the feature, never hardcoded inline.
- Design tokens (colors, spacing) live in Tailwind config or CSS vars, not scattered across files.

### 4. TypeScript
- `strict: true` — no exceptions.
- No `any`. Use `unknown` and narrow it, or define the proper type.
- Colocate types with their feature. Only promote to `src/types/` when shared across 3+ features.
- Use `satisfies` over `as` whenever possible.

### 5. Performance
- Prefer React Server Components (RSC) by default. Add `"use client"` only when interactivity or browser APIs are needed.
- Images: always use `next/image` with explicit `width`/`height` or `fill` + `sizes`.
- Fonts: loaded via `next/font` only — never `<link>` tags.
- Animations: use `framer-motion` `LazyMotion` + dynamic features to tree-shake unused motion code.
- No layout shifts: reserve space for images, fonts, and async-loaded content.
- Bundle: avoid importing entire libraries. Use named imports only.

### 6. Accessibility
- Semantic HTML first (`nav`, `main`, `section`, `article`, `aside`, `header`, `footer`).
- Every interactive element is keyboard-reachable and has a visible focus ring.
- Images have meaningful `alt`. Decorative images have `alt=""`.
- Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text.

---

## File & Folder Conventions

```
src/
  app/                        # Next.js App Router pages and layouts
    (marketing)/              # Route group for public marketing pages
  components/
    <feature>/
      index.tsx               # Public export / page-section component
      config.ts               # All static data for this feature
      <sub-component>.tsx     # Focused child components
  hooks/                      # Shared custom React hooks
  lib/
    utils.ts                  # cn(), formatting helpers
  types/                      # Shared TypeScript types (promote only when needed)
```

- One React component per file.
- `index.tsx` is the only file that re-exports; sub-components are imported directly when used internally.
- Co-locate `config.ts` with the feature it feeds.

---

## Component Authoring Rules

```tsx
// Correct: typed props, no default export magic, clean return
type HeroProps = {
  title: string;
  subtitle?: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
```

- Always type component props explicitly — never use `React.FC`.
- Use named exports for hooks and utils; default exports for page/layout/section components.
- Prefer `const` arrow functions for small pure utilities; regular `function` declarations for components.

---

## Styling Rules

- Tailwind utility classes only. No inline `style={{}}` unless setting a CSS custom property.
- Use `cva` for components that have multiple visual variants (size, intent, state).
- Use `cn()` (`clsx` + `tailwind-merge`) for conditional class merging.
- Responsive design: mobile-first. Base styles are mobile; `sm:`, `md:`, `lg:` override upward.
- Do not use arbitrary values (`[42px]`) when a Tailwind token exists.

---

## Animation Rules (Framer Motion)

- Use `LazyMotion` + `domAnimation` or `domMax` features to control bundle size.
- Prefer `variants` objects over inline `initial`/`animate` props for reusability.
- Respect `prefers-reduced-motion` — wrap animations in a motion check or use `useReducedMotion()`.
- Animations must not block interactivity. Use `layout` prop carefully; avoid it on large DOM trees.

---

## Senior Workflow (How to Handle Every Task)

```
1. READ    → Read Figma + relevant source files before writing a single line.
2. PLAN    → Identify components needed, data shape, RSC vs client boundary.
3. BUILD   → Implement following all standards above.
4. VERIFY  → Run tsc, eslint, and manually review against Figma after building.
5. SHIP    → Code is production-ready: no console.log, no placeholder text, no stub functions.
```

Never skip step 1 or step 4. Never ship stubs.

---

## Quality Gate (Run After Every Feature)

After finishing any feature or page, self-review against this checklist before reporting done:

- [ ] TypeScript compiles with zero errors (`tsc --noEmit`)
- [ ] ESLint passes with zero errors
- [ ] No `any`, no `// @ts-ignore`, no `eslint-disable`
- [ ] All static data is in `config.ts`, not hardcoded in JSX
- [ ] No prop is passed through more than 2 component layers (extract context or restructure)
- [ ] Every image uses `next/image`
- [ ] All `"use client"` directives are justified (comment the reason if non-obvious)
- [ ] No layout shift on first load
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Component names match their file names exactly
- [ ] No unused imports or variables

---

## What NOT to Do

- Do not add comments that describe what the code does — names should do that.
- Do not wrap everything in `useEffect` — reach for RSC data fetching first.
- Do not use `<a>` tags for internal links — always use `next/link`.
- Do not use `<img>` — always use `next/image`.
- Do not use string concatenation to build class names — use `cn()`.
- Do not create a new abstraction for something used only once.
- Do not leave placeholder copy (`Lorem ipsum`, `Coming soon`, `TODO`).
- Do not add features not explicitly requested.
