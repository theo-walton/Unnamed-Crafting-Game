# Electron + React + TypeScript (Bun)

Basic scaffold using Vite for the renderer and Electron for the shell. Works with `npm` (or Bun if you prefer).

Quick start:

1. Install dependencies with `npm`:

```bash
npm install
```

2. In terminal A, start the renderer dev server:

```bash
npm run dev:renderer
```

3. In terminal B, start Electron (this will load the dev server):

```bash
npm run start
```

Build renderer for production:

```bash
npm run build:renderer
```

Then run the Electron app (it will load the built files):

```bash
npm run start
```

Notes:
- If your environment requires a single-command dev launcher, consider installing `concurrently` or writing a small spawn script.
- This scaffold keeps the Electron main process in `src/main` and the renderer in `src/renderer`.

Files of interest:
- [src/main/main.js](src/main/main.js)
- [src/main/preload.js](src/main/preload.js)
- [src/renderer/main.tsx](src/renderer/main.tsx)
- [src/renderer/App.tsx](src/renderer/App.tsx)
- [vite.config.ts](vite.config.ts)
- [tsconfig.json](tsconfig.json)

Enjoy!

Build a single Windows executable (.exe)

1. Install dependencies (if you haven't):

```bash
npm install
```

2. Build and produce a Windows installer/exe (uses `electron-builder`):

```bash
npm run build:app
```

The produced artifacts will be in the output folder created by `electron-builder` (by default `dist` or similar). Adjust `package.json` `build` settings if you need custom targets or signing.

If `electron-builder` fails due to code-sign helper extraction (requires privilege to create symlinks on Windows), you can use the included `electron-packager` script which creates a packaged application folder containing an `.exe` without requiring code-sign tools.

Package without admin privileges (creates `dist/packaged/...`):

```bash
npm run package:win
```

Notes:
- `package:win` uses `electron-packager` to create a platform folder that includes the `.exe` (not an installer). This is often sufficient for distribution or for creating a portable ZIP.
- To produce a signed Windows installer (`.exe`/`.msi`) with `electron-builder`, run the `build:app` script as Administrator or enable Developer Mode so the unpacking of code-sign tools can succeed:

```bash
# As Administrator
npm run build:app
```

- If Bun becomes available on your machine later, you can still use the `bun` scripts; otherwise use `npm` as shown above.
