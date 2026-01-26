# Container-Presenter Pattern – Quick Notes

1. **Container** (Smart component)  
   - Handles **data** and **logic**  
   - Talks to APIs (axios/fetch)  
   - Manages state (useState, useEffect, etc.)  
   - Makes decisions and business rules  
   - **Does NOT** care about how things look  
   - Usually has **very little or no JSX**  
   - Only prepares data + callback functions and passes them down

2. **Presenter** (Dumb / Presentational component)  
   - **Only renders UI**  
   - Receives everything via **props**  
   - No application-level state (only local UI state like toggles if needed)  
   - **No API calls**, **no business logic**, **no side effects**  
   - Purely concerned with **how things look and feel**  
   - Focuses on markup, styling, conditional rendering, mapping lists

## Why Use This Separation?

- Easier to **understand** code at a glance  
  (one file = data & logic, another = markup & styling)
- **High reusability** — same presenter can work with different containers / data sources
- **Better testability**  
  - Presenters → easy snapshot / unit tests (just render with props)  
  - Containers → integration tests with mocked data
- True **separation of concerns**  
  - Logic changes don't break UI  
  - UI/styling changes don't touch business rules
- Great for **teamwork**  
  - Designers / frontend stylists → presenters  
  - Logic / API / state developers → containers

## One-line Summary

**Container** = "What data do we have and what happens when the user does something?"  
**Presenter**  = "How should it look and be laid out on the screen?"
