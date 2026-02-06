# Higher-Order Components (HOC) Pattern in React – Quick Notes

## 1. Higher-Order Component (HOC)

- Advanced pattern (not part of React API) for reusing component  logic
- A pure function that takes a component and returns a new   enhanced component
- Syntax: const EnhancedComponent = withSomeLogic(OriginalComponent);
- Wraps the original component → adds behavior (props, state, lifecycle, etc.)
- Common use cases:
   - Inject data (e.g., auth user, fetched data)
   - Add loading spinners / error handling
   - Conditional rendering
   - Prop manipulation / default props
   - Logging / analytics tracking
   - Styling wrappers

- Does not modify the original component — creates a new one

## 2. How It Works (Core Idea)

- HOC receives a component (WrappedComponent)
- Returns a new class/function component
- Usually passes down original props + adds extra props/logic

# Why Use the HOC Pattern?
## HOCs give you:

- Code reusability — share logic across many components without duplication
- Separation of concerns — keep UI clean, move cross-cutting logic (auth, data fetching, permissions) to HOCs
- Composability — chain multiple HOCs (withAuth(withLoading(MyComponent)))
- Non-invasive — original component stays unchanged & reusable
- Powerful for cross-cutting concerns (logging, error boundaries, theme, i18n)


## One-line Summary
**Higher Order Component** = "A function that takes a component and returns a supercharged version with extra powers — great for reuse, but can make things nested and tricky to debug."
