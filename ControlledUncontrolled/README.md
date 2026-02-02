# Controlled vs Uncontrolled Components in React – Quick Notes

## 1. Controlled Component (React-controlled / State-driven)
- Form element **value** is fully managed by **React state**
- Uses `value` prop + `onChange` handler to sync changes
- Every keystroke → updates state → React re-renders the input
- **React is the single source of truth** for the input value
- Perfect for:
  - Real-time validation & error messages
  - Input formatting/masking (phone, currency, uppercase…)
  - Conditional disabling/enabling
  - Resetting/clearing form programmatically
  - Syncing values across multiple fields or components
- Usually implemented with `useState` + event handlers
- **More code** → but **maximum control & predictability**

## 2. Uncontrolled Component (DOM-controlled)
- Form element manages its own **internal value** (like classic HTML)
- **No** `value` prop (or only `defaultValue` for initial value)
- Access value only when needed via **ref** (e.g. on form submit)
- Uses `useRef` to reference the DOM node
- **No** `onChange` required for state updates
- **Browser/DOM is the source of truth**
- Ideal for:
  - Simple forms with minimal interaction
  - File inputs (`<input type="file">`)
  - Integrating non-React / third-party libraries
  - Preserving native browser behaviors (autofill, undo, etc.)
- **Less code** → fewer re-renders → sometimes more performant

## Why Use This Pattern / Separation?

**Controlled components** give you:
- Full predictability — you always know the current value
- Instant feedback (validation, formatting, conditional UI)
- Easy form reset, clear, or sync with other state
- Better for complex / dynamic / multi-field forms

**Uncontrolled components** shine when:
- You want minimal boilerplate
- Performance matters (large forms, avoid render-per-keystroke)
- Working with file uploads or legacy code
- You only need the value at submission time


## One-line Summary

**Controlled** = "React owns and drives the input value — I know exactly what’s in there at every moment."  
**Uncontrolled** = "The browser/DOM owns the value — React just asks for it when needed (usually via ref)."


