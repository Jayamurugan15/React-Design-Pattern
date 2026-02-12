# React Provider Pattern – Quick Notes
## 1. What is Provider Pattern?

- A design pattern used to share global data across components

- Built using React Context API

- Avoids prop drilling (passing props through many levels)

- Data is provided at a higher level and consumed anywhere below

- Works best for app-wide state

## 2. When to Use Provider Pattern

- Use when data is needed by many components, such as:

- Authentication (user, login, logout)

- Theme (light / dark mode)

- Language (multi-language apps)

- Cart (e-commerce)


- Avoid when:

   - State is used by only one or two components

   - Local component state is sufficient


## Benefits

- Eliminates prop drilling

- Centralized state management

- Cleaner component structure

- Easy to reuse with custom hooks

- Improves scalability for medium-sized apps

## Common Real-world Providers

AuthProvider → user state

ThemeProvider → UI mode

LangProvider → translations

CartProvider → shopping cart

## Custom Hook Pattern

#### Instead of:

useContext(AuthContext)

#### Create:

useAuth()
useTheme()
useLanguage()

#### Benefits:

Cleaner components

Better reusability

Easier maintenance

## One-line Summary

Provider Pattern = Share global state across the app without prop drilling using Context + custom hooks.
