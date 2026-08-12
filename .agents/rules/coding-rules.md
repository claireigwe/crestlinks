---
trigger: always_on
---

# Coding Rules

## Purpose

This document defines the coding standards for the CrestLinks website.

The objective is to produce code that is maintainable, scalable, accessible, and easy to understand.

Every implementation should prioritise simplicity, readability, and long-term maintainability over unnecessary abstraction or cleverness.

---

# Technology Stack

The project should use:

- Next.js (App Router)
- TypeScript
- React Server Components by default
- CSS Modules
- Modern CSS
- Design Tokens
- ESLint
- Prettier

Only introduce additional technologies when there is a clear and measurable benefit.

---

# Core Principles

## Simplicity First

Always choose the simplest implementation that satisfies the requirement.

Avoid unnecessary architecture.

---

## Readability Over Cleverness

Code should be immediately understandable.

Avoid overly compact logic, complex abstractions, or patterns that reduce readability.

Future developers should understand the code without extensive explanation.

---

## Maintainability

The project should remain easy to modify as CrestLinks grows.

Organise code logically.

Avoid duplication.

Prefer composition over inheritance.

---

## Performance

Performance should be considered throughout development rather than as a final optimisation step.

Prefer:

- Server Components
- Static rendering
- Optimised images
- Lazy loading where appropriate
- Minimal JavaScript

---

# React Principles

## Server Components First

Every component should be a Server Component unless client-side interactivity is required.

Do not add `"use client"` unless necessary.

---

## Client Components

Use Client Components only when features require:

- State
- Browser APIs
- Event listeners
- Animations requiring JavaScript
- Form interactivity

---

## Component Responsibility

Each component should have a single responsibility.

Avoid components that perform multiple unrelated tasks.

---

# Component Design

Components should be:

- Reusable
- Predictable
- Accessible
- Well typed
- Self-contained

Avoid tightly coupling components to specific pages.

---

# Props

Props should be:

- Explicit
- Strongly typed
- Minimal

Avoid passing unnecessary data.

---

# Styling

Use CSS Modules.

Do not:

- Write inline styles.
- Hardcode repeated values.
- Duplicate styles.

Use design tokens wherever possible.

---

# Layout

Layouts should remain flexible.

Avoid fixed dimensions unless required.

Design for responsiveness from the beginning.

---

# File Organisation

Organise files by feature and responsibility.

Avoid deeply nested directory structures.

Keep related files together.

---

# Naming

Names should clearly describe purpose.

Avoid abbreviations.

Use consistent naming throughout the project.

---

# TypeScript

Always use strict typing.

Avoid:

- any
- unnecessary type assertions
- implicit types

Types should improve maintainability rather than increase complexity.

---

# State Management

This website requires very little client-side state.

Avoid introducing global state management libraries.

Use local state only where required.

---

# Data

Prefer static data where possible.

Keep content separate from components.

Avoid hardcoding content directly inside UI components.

---

# Images

Use the Next.js Image component.

Images should:

- Be optimised.
- Include alt text.
- Support responsive layouts.

---

# Accessibility

Every component should support:

- Keyboard navigation.
- Screen readers.
- Visible focus states.
- Semantic HTML.

Accessibility is mandatory.

---

# Error Handling

Handle errors gracefully.

Avoid exposing implementation details to users.

Provide helpful fallback behaviour.

---

# Dependencies

Before installing a dependency, ask:

1. Can this be built with native APIs?
2. Can an existing dependency solve this?
3. Does this significantly improve the project?

If the answer is no, do not install it.

---

# Code Duplication

Avoid duplication.

Before creating new code:

- Search for an existing solution.
- Extend reusable components where appropriate.
- Share utilities responsibly.

---

# Comments

Code should explain itself.

Use comments only when explaining:

- Business logic
- Non-obvious decisions
- Complex reasoning

Do not comment obvious code.

---

# Decision Framework

When multiple implementations are possible, prioritise:

1. Simplicity
2. Readability
3. Accessibility
4. Maintainability
5. Performance
6. Developer convenience

---

# Definition of Done

Code is considered complete only when it:

- Meets the business requirement.
- Follows project architecture.
- Uses TypeScript correctly.
- Is responsive.
- Is accessible.
- Reuses existing components where appropriate.
- Uses design tokens.
- Passes linting.
- Introduces no unnecessary complexity.

---

# Before Completing Any Task

Verify that the implementation:

- Aligns with the project vision.
- Follows the project rules.
- Uses Server Components where appropriate.
- Is accessible.
- Is responsive.
- Avoids duplication.
- Uses reusable components.
- Maintains performance.
- Is easy to understand.