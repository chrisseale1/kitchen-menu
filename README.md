# Kitchen Menu & Recipe Board

A standalone, smart-display-inspired visual menu board and recipe chooser that connects live to your Google Sheet (`Formatted Weekly Menu`).

## How It Works
- The web app reads the **Menu Display** tab of your Google Sheet directly via Google's lightweight `gviz` endpoint.
- Whenever you add a dish, update an ingredient, or paste a photo link in the spreadsheet, refreshing the web page immediately updates the visual menu.
- Works in any browser, tablet, or smart kitchen display screen.

## Deployment to GitHub Pages (Under 2 Minutes)
1. In your GitHub account, click the **+** (top right) -> **New repository**.
2. Name it `kitchen-menu` (or whatever you prefer) and ensure it is set to **Public**.
3. Under "Quick setup", click **uploading an existing file**.
4. Drag and drop `index.html`, `style.css`, and `app.js` into GitHub and click **Commit changes**.
5. Go to **Settings** (tab inside your repo) -> **Pages** (in the left sidebar).
6. Under **Build and deployment > Branch**, select `main` (or `master`) and `/root`, then click **Save**.
7. In about 60 seconds, your site is live at: `https://<your-username>.github.io/kitchen-menu/`!
