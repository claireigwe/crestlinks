# Create Component

## Objective

Design and implement reusable UI components that support multiple pages while maintaining consistency, accessibility, and simplicity.

Every component should solve one problem well.

Components exist to support pages—not the other way around.

---

# When to Use

Use this skill when:

- Creating a new reusable component.
- Refactoring duplicated UI.
- Improving an existing component.
- Extending component functionality.
- Building shared UI patterns.

Do not use this skill when creating complete pages.

---

# Required Context

Before implementation, review:

- design-direction.md
- content.md
- design-rules.md
- coding-rules.md
- project-rules.md

Execute the Company Understanding skill before beginning.

---

# Preconditions

Before creating a component, confirm:

- The component has a clear responsibility.
- Existing components cannot satisfy the requirement.
- The component is likely to be reused.
- The required content already exists.
- The expected behaviour is understood.

Avoid creating components "just in case."

---

# Workflow

## Step 1 — Identify the Problem

Clearly define:

- What problem does this component solve?
- Why should it exist?
- Which pages require it?
- Can an existing component be extended instead?

If an existing component solves the problem, reuse it.

---

## Step 2 — Define Responsibility

Every component should have one responsibility.

Examples:

Good:

- Product Card
- Quote Form
- Timeline
- Statistic Card
- Section Heading

Poor:

- HomeSection
- MarketingContent
- LandingComponent

If a component has multiple unrelated responsibilities, split it.

---

## Step 3 — Design the API

Before writing code, determine:

- Required props
- Optional props
- Default behaviour
- Accessibility requirements
- Responsive behaviour

The API should be simple and predictable.

---

## Step 4 — Build

Implement:

- TypeScript
- Server Component by default
- CSS Modules
- Semantic HTML
- Responsive behaviour
- Accessibility support

Avoid unnecessary complexity.

---

## Step 5 — Review Reusability

Ask:

Can this component be reused without modification?

If not, determine whether:

- The API should become more flexible.
- The component should be split.
- The implementation should be simplified.

---

## Step 6 — Review Accessibility

Confirm:

- Semantic HTML
- Keyboard accessibility
- Focus states
- Screen reader support
- Appropriate labels

Accessibility is required.

---

## Step 7 — Polish

Review:

- Naming
- Props
- Styling
- Performance
- Readability
- Maintainability

Every component should feel production-ready.

---

# Component Principles

Components should be:

- Reusable
- Focused
- Predictable
- Accessible
- Lightweight
- Easy to understand

Avoid unnecessary abstraction.

---

# Props

Props should:

- Be strongly typed.
- Be explicit.
- Use sensible defaults.
- Avoid excessive configuration.

Prefer a small API over a highly configurable one.

---

# Styling

Components should:

- Use design tokens.
- Respect layout constraints.
- Avoid hardcoded values.
- Adapt naturally to different screen sizes.

Keep styling local to the component.

---

# Composition

Prefer composition over inheritance.

Small components should combine naturally into larger experiences.

Avoid deeply nested component trees.

---

# Naming

Component names should describe purpose.

Examples:

- Hero
- ProductCard
- CTASection
- QuoteForm
- ProcessTimeline
- StatisticCard

Avoid vague names.

---

# Validation Checklist

Confirm:

✓ The component has one responsibility.

✓ The component is reusable.

✓ Props are minimal.

✓ TypeScript is correctly used.

✓ Accessibility is supported.

✓ Responsive behaviour is complete.

✓ Existing components were considered first.

✓ Styling follows project standards.

✓ Performance remains strong.

---

# Common Mistakes

Avoid:

- Building page-specific components.
- Over-configurable APIs.
- Duplicate components.
- Multiple responsibilities.
- Hardcoded content.
- Inline styling.
- Client Components without justification.
- Deep component nesting.

---

# Completion Criteria

A component is complete when:

- It solves one clearly defined problem.
- It is reusable.
- It supports accessibility.
- It performs well.
- It follows project standards.
- It uses a clean API.
- It can be confidently reused throughout the project without modification.
