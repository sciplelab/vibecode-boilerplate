<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Workflow Rules

Follow these rules when working in this codebase. If you cannot follow any rule, suggest alternatives.

## Tools and framework
- Use pnpm as the package-manager
- Use bun or tsx to run scripts
- Use only tailwinds for styling

## Dev Environment
- Run development server: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Type check: `pnpm typecheck` or `npx tsgo`
- Format: `pnpm format`
- Do NOT use `drizzle push` command

## React Best Practices

### Component Architecture
- Use functional components with TypeScript
- Define components with `function` keyword
- Prefer server components for static/near-static data
- Use client components for dynamic data and interactivity
- Prefer composition over inheritance
- Use `children` prop and render props for reusable components
- **Avoid prop drilling**: Use Context or state management instead

### Hooks
- Follow Rules of Hooks (top-level only, React functions only)
- Implement hooks correctly: `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback`
- Create custom hooks for reusable logic
- Use cleanup functions in `useEffect` to prevent memory leaks
- **Use hooks from `usehooks-ts`** if they exist before creating new ones

### Performance
- Use `React.memo()` for component memoization when appropriate
- Use `useCallback` for memoizing functions passed as props
- Use `useMemo` for expensive computations
- Avoid inline function definitions in render
- Implement `React.lazy()` and `Suspense` for code splitting

### Best Practices
- Prefer controlled over uncontrolled components
- Use refs sparingly (mainly for DOM access)
- Implement error boundaries for graceful error handling
- Use short-circuit evaluation and ternary operators for conditional rendering

## Data Fetching
- **Server components**: Use async server component functions or server actions
- **Client components**: Always use TanStack Query
- **Server-to-server**: Use direct function calls (not HTTP requests)

## Data Mutation
- Use `react-hook-form` for form validation and submission
- Use server actions for mutations
- Use `useTransition` for optimistic updates with loading states

## Database Queries (Drizzle)
- **Avoid** Drizzle relational queries for deep nested objects
- Use CTEs (Common Table Expressions) for complex operations
- Use JavaScript logic to process and transform data after queries
- Keep queries simple and compose results in application code
- Use `db.transaction` for long/complex operations
- Compose similar operations under `db/shared-queries/**.ts`

## State Management
- **Global state**: Zustand
- **Shared state**: Lift state up or use Context (avoid prop drilling)
- **URL state**: `nuqs` for search parameters
- **Persistent/sharable state**: `nuqs` for persistence and sharable links

## Date Formatting
- Use `date-fns` for date conversion and formatting
- **Default format**: Malaysia style `dd/MM/yyyy` with 12-hour system
- Use other formats accordingly for specific cases

## Logging
- Use `@/lib/logger` for proper logging
- **Prefix messages** with operation context (e.g., `[LALAMOVE WEBHOOK]`)
- Only log necessary information
- Use verbose mode if more detail is needed

## Design
- Use specified badge components for badges - **don't create new styling on div**
- Use semantic HTML elements

## Code Style and Structure

### General Principles
- Write concise, technical TypeScript following Standard.js rules
- Use functional and declarative patterns (avoid classes)
- Prefer iteration and modularization over duplication
- Apply DRY (Don't Repeat Yourself)
- Apply SRP (Single Responsibility Principle)
- Apply KISS (Keep It Simple, Stupid)
- Apply SOC (Separation of Concerns)
- **Before adding new functions**: Always search for existing sharable functions/libraries

### Error Handling
- **Always handle errors** - never let them go unhandled
- Provide useful, informational error messages for clients/users
- **Don't throw errors to client** - catch and handle them gracefully
- Return meaningful error states instead of throwing

### Comments and Documentation
- **Use JSDoc** for complex logic that's hard to explain
- **Avoid comments** for simple, obvious code (e.g., "this does this")
- Let code be self-documenting through clear naming and structure

### File Structure
1. Exported component
2. Subcomponents
3. Helpers
4. Static content

### Code Style
- 2 space indentation, Standard.js rules
- No unused variables, always use `===`
- camelCase for variables/functions, PascalCase for components
- Directories: lowercase-with-dashes, favor named exports
- Import order: external libs, internal libs, components, types
- Use `@/` path aliases for internal imports

### Readability Rules
- No extra comments that a human wouldn't add or is inconsistent with the rest of the file
- No extra defensive checks or try/catch blocks that are abnormal for that area of the codebase (especially if called by trusted / validated codepaths)
- No casts to any to get around type issues
- **No Long or nested ternaries**: Prefer `if/else` or `switch`, or small helper functions that return the value/JSX
- **No Forms without react-hook-form**: Use `react-hook-form` with Zod and shared Form/FormField/FormItem/FormControl/FormMessage; keep schemas in `validations.ts`
- No any other style that is inconsistent with the file

Report at the end with only a 1-3 sentence summary of what you changed