# Wellspring Electronic Health Record System

## Implementation Details

**This project utilizes the following technologies:**

1. React
2. TypeScript (tsconfig not setup, but TS syntax was used)
3. A personal [styled-components UI library](https://github.com/jpbullalayao/ragna-lerna) to build out and style the necessary UI

Using [styled-components](https://styled-components.com) + [styled-system](https://github.com/styled-system/styled-system) to build the UI is a personal preference for my own projects, as it has been much easier and faster to build complex UIs by using a CSS-in-JS solution. However, I am fully experienced with pure HTML/CSS solutions where the styles would be in their own separate `.css` files for each component. Should Wellspring use a pure CSS solution in their projects, I would easily be able to work within that as well.

**This project uses the following note-worthy libraries / concepts as part of the implementation:**

1. react-router-dom (for page routing between the Home Page and Patients pages)
2. axios (for Network requests to fetch Patient & Appointment info)
3. React Hooks (for side effects like making Network Requests)

## Improvements

Assuming that this were to be a full production application, there improvements / additions that could be made to the project. Some of this includes:

### 1. Path alias imports

At the moment, components and assets are currently imported with relative paths, such as:

```jsx
import { Badge } from "../Badge/Badge.tsx";
```

The problem with this is that there are unnecessary keystrokes to import the Badge component, as it's currently requiring us to import the file directly with its `.tsx` extension.

To fix this, it is possible to setup a tsconfig.json to include a config like the following:

```jsx
"paths": {
  "@/*": ["src/*"]
},
```

By doing this, all imports to any necessary files become easier and more readable from a developer experience:

```jsx
import { Badge } from "@/components/Badge";
```

### 2. Analytics & Monitoring Tools (Sentry, Segment, etc) Configuration

At the moment, there are no analytics and production monitoring tools setup for the project. There are multiple tools that can be used for this,

For production monitoring, we could setup [Sentry](https://sentry.io/) on the project so that we can catch JavaScript errors in a production environment. For tracking user activity and how flows perform in the project, we could setup something like [Segment](https://segment.com/) for event and other data tracking.

### 3. Usage of theme libraries

Ideally, engineers and designers should be working off the same UI brand guidelines, and there are ways to set up a theme that engineers can easily build their UIs with.

As an example, we can create a theme object containing all the necessary colors and reference them by color names when building the UI (ex: `Gray/500` in the Figma, `gray-500` in the code), like how they are specified in the given Figma design. This would also help easily build light theme and dark theme versions of our application.

### 4. More Test Coverage

React Testing Library was automatically setup with this project, and a few test cases were added to some of the components like `Badge.tsx` and `PageTitle.tsx`. The project does not contain a comprehensive test suite, however if time permitted, we could add test coverage for all the components.

For full comprehensive end-to-end testing, we could integrate a tool like [Cypress](https://www.cypress.io/).

### 5. Gitlab CI / CD Pipeline

One of the benefits that CI pipelines helps with is ensuring that engineers / release managers don't merge PRs that broke unit and integration tests. At the same time, it saves manual steps that engineers have to do in order to deploy code. In the most basic terms, it ensures that features are deployed to production as easily, organized and quickly as possible, and also gives us confidence that we're deploying features that are as bug-free as they possibly can be.

### 6. Pre-commit hooks (like husky)

Source: [https://github.com/typicode/husky](https://github.com/typicode/husky)

This would help with ensuring that we're able to enforce Wellspring-specific coding guidelines onto the engineers, which means that the highest-quality code possible is committed to the codebase only (provided that an engineer doesn't commit with the `--no-verify` flag).

### 7. Eslint Rules & Prettier IDE setup

Eslinting tools are helpful for the codebase because again, it ensures that we enforce specific code guidelines for a long-term resilient and predictable code-base. An example of an eslint rule we can consider is the `react/jsx-max-props-per-line` rule, which helps us enforce that props should be specified on separate lines. There is also a Prettier extension that we can configure on an IDE like Visual Studio Code to further enforce a consistent coding style.

Other worthy eslint rules: `react-hooks/rules-of-hooks`, `react-hooks/exhaustive-deps`, etc.

# Contact

For any questions, please feel free to contact me at jpbullalayao@gmail.com. Thank you!
