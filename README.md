# Keep It — React Notes App

A minimal local-first notes app built with React + Vite. Create, edit, and delete notes. Notes persist in **localStorage** (survive refreshes).

## Quick Start

```bash
npm install
npm run dev
# open the printed URL (e.g., http://localhost:5173)
```

## Features

- Local storage (no backend)
- Searchable left sidebar (toggle list visibility)
- Center editor with “bond paper” textarea
- Add/Save floating button (+ / ✓)
- Icon-only Exit Editing button (shown only when editing)
- Clean 3‑column layout (Left: list, Center: editor, Right: options)
- Component‑scoped CSS with small global base/layout files

## Project Structure (simplified)

```
src/
  components/
    CreateArea/        # editor
    Header/            # top bar
    LeftSidebar/       # note list + search + toggle
    RightOptions/      # placeholder options
    Note/              # single note card (if used)
    App.jsx
    Main.jsx
  hooks/
    useNotes.js        # loads/saves notes (localStorage), CRUD, selection
  styles/
    base.css           # reset + neutral globals
    layout.css         # page grid + columns
  index.jsx            # React entry (imports base/layout CSS)
notes.js               # seed data (used if localStorage empty)
```

## Commands

```json
npm run dev      # start dev server
npm run build    # build for production
npm run preview  # preview the production build
```

## Reset Notes

To clear all saved notes and re-seed from `notes.js`:

```js
localStorage.removeItem("notes");
location.reload();
```

## React Version

- **React 18 (recommended)** uses:
  ```js
  import { createRoot } from "react-dom/client";
  createRoot(document.getElementById("root")).render(<App />);
  ```
- For React 17 or lower, switch to:
  ```js
  import ReactDOM from "react-dom";
  ReactDOM.render(<App />, document.getElementById("root"));
  ```
