# React Custom Hooks

## What is a Custom Hook?

A **Custom Hook** is a reusable JavaScript function in React that starts with `use` and allows you to extract and reuse stateful logic across multiple components.

> Custom hooks help you share logic, not UI.

---

## Why use Custom Hooks?

- **Reuse logic** across components
- Keep components **clean and readable**
- **Avoid code duplication**
- Improve **project structure**
- Follow **separation of concerns**

Instead of writing the same logic in multiple components, you write it once and reuse it.

---

## When to create a Custom Hook?

Create a custom hook when:

- The same logic is used in **multiple places**
- Component becomes **too large**
- Logic is **unrelated to UI**
- You want **reusable state or side effects**

### Common examples:

- API calls (`useFetch`)
- Local storage (`useLocalStorage`)
- Clipboard (`useClipboard`)
- Click outside detection (`useClickOutside`)
- Dark mode / theme handling

---

## Naming Convention

Custom hooks must:

- Start with **`use`**
- Use **camelCase**

---

## One-line Summary

**Custom Hook = Reusable stateful logic for React components.**