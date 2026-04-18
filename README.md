# Grafterr Landing Page Assignment

React implementation of the Grafterr landing page interview task using reusable components, custom hooks, and local JSON-driven content.

## Chosen Stack

- React 18
- Vite
- CSS Modules
- PropTypes

## Setup

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Approach

- All landing page content is loaded from `src/data/content.json`.
- `src/services/api.js` simulates API latency with delayed Promises for navigation, hero, features, and carousel config.
- `useContent` manages loading, success, error, and retry states.
- `useCarousel` handles responsive items-per-view, boundaries, buttons, and touch swipe interactions.
- UI is split into reusable React components for gradient text, CTA buttons, skeletons, floating shapes, cards, and the carousel.

## Completed Requirements

- React functional components only
- `useState`, `useEffect`, and `useCallback`
- Custom hooks for data fetching and carousel logic
- Dynamic content rendered from local JSON
- Skeleton loading states with fade-in reveal
- Error state with retry button
- Responsive carousel with mobile swipe support
- Responsive layout from mobile to desktop

## Assumptions

- The linked Figma file was not accessible from this environment, so visual decisions were derived from the PDF brief and its explicit cues: gradient headline text, coral/teal decorative shapes, CTA gradient, and the required section structure.
- Product imagery was recreated as local SVG illustrations to keep the submission self-contained.
- Anchor targets such as `#solutions` and `#contact` are included as navigational placeholders because the PDF only requires the hero and features sections.

## Screenshots

Add local screenshots or comparisons here after running the app:

- `desktop-home.png`
- `mobile-home.png`
- `comparison-figma-vs-build.png`

## Submission Notes

- Repository is ready for deployment on Vercel, Netlify, or GitHub Pages.
- If you deploy it, add the live URL here before submission.
