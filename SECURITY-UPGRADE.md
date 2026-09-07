# Security dependency update — 2026-09-07

Use Node.js 22.12 or newer in the 22.x line, or Node.js 24+. Install with `npm ci` so the patched dependency versions in the lockfile are used.

Angular is updated to 21.2.22, the build tools to 21.2.23, and TypeScript to 5.9.3. The application keeps Zone-based change detection. The application builder replaces the old Webpack build dependencies. `qs` is pinned to 6.16.0 because the Karma dependency tree otherwise resolves a vulnerable version.

Validation: `npm ci`, `npm run build`, `npm test -- --watch=false --browsers=ChromeHeadless`, and `npm audit`. The dependency audit includes development dependencies and does not suppress advisories.

PrimeNG and ngx-mask are updated together with Angular. The Calendar module import is replaced with DatePicker. The GitHub Pages deployment tool is updated to 3.1.0; the existing deployment target and base URL are retained.
