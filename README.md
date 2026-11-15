# KHRI Road Network Progress Dashboard

## Publish on GitHub Pages
1. Extract this ZIP on your computer.
2. Open your GitHub repository and choose Add file > Upload files, or copy the extracted files into your GitHub Desktop repository.
3. Upload the extracted contents, not the ZIP. index.html must be at the repository root alongside app.js, engine.js, style.css, jszip.min.js and snapshot.json.
4. Commit the files to main (and Push origin if using GitHub Desktop).
5. Open Settings > Pages. Select Deploy from a branch, main, / (root), then Save.
6. Open the published link shown in Pages settings when deployment completes.

No build command, Node installation, API key or server is required. All asset paths are relative, so repository subpath hosting works.

## Use
Open the hosted page and click Upload ZIP. ZIP structure: optional parent folder > division folders > optional subdivision folders > section .xlsx files. All processing happens in your browser. Uploaded results and adjustments stay in that browser; uploading a ZIP does not update the dashboard for other visitors.

The included snapshot.json contains the provided 12 November 2026 aggregate progress snapshot. It will be available to visitors alongside the website assets. The original Excel workbooks, ZIP and raw contact details are not bundled. This export has no ChatGPT login/access restriction.

## Current counting rules
- Listed: Single Stretch Yes or blank; No is assigned to segmented roads.
- Segmented: parent roads marked No; unique Stretch No. entries and Total Stretches determine coverage. Missing stretches remain pending.
- New roads: displayed but excluded from completion totals.
- General data: unique parent road names, including undecided listed roads, with eight fields per road.
- Maintenance: same unique-road target and name matching as General Data, using column C for road name and 12 fields per road.
- Duplicate road entries do not increase General/Maintenance credit. Unmatched names are reported.
- Section totals average applicable sheets; division and overall totals average sections.

## Local preview (optional)
Opening index.html by double-click may block JavaScript modules or snapshot loading. From the extracted folder run `python -m http.server 8000` and open http://localhost:8000 instead.

## Dependency
jszip.min.js is JSZip; its bundled copyright/license notice is preserved.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Visual dashboard update
Leading and trailing divisions and sections are shown with tie counts. Ranked horizontal bars compare current and previous division percentages; the donut summarises section completion.

### Compare reports
Upload the latest ZIP with Upload ZIP, then select Upload previous ZIP to load the desired earlier report. Subsequent current ZIP uploads automatically retain the preceding report as the baseline. No historical improvement is fabricated when no baseline exists. Changes are percentage points, computed only on matching division/subdivision/section names; scope additions and removals are shown separately. Renamed sections will appear as added/removed. Baselines and results stay in the same browser. Export comparison downloads a division CSV.

### Update an existing GitHub repository
Extract this archive and replace the existing files at the repository root, including the new insights.js. Keep index.html at root. Commit/push; retain your existing Pages main/root settings. No build step is required.
