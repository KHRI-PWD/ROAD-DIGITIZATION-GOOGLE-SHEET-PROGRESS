# Shared Road Digitization Progress Dashboard

## Install this update
Replace the files at the root of KHRI-PWD/ROAD-DIGITIZATION-GOOGLE-SHEET-PROGRESS, including shared-report.js. Commit to main. Keep the existing GitHub Pages configuration. This update has not itself been deployed by the ZIP download.

## Everyday publishing
1. Open the dashboard after GitHub Pages deploys this update.
2. Upload the latest ZIP. This is an unpublished preview.
3. If needed, upload the earlier ZIP for comparison.
4. Click Publish for everyone. Review the section count/source.
5. Enter a fine-grained GitHub personal access token limited to this repository, with Contents: Read and write. Create it in your own GitHub settings, never in chat. Organisation approval may be required; branch protection may prevent direct main commits.
6. Click Publish report to GitHub. Wait for GitHub Pages deployment. The app distinguishes saved-to-GitHub from confirmed-live.

The token is not placed in files, URLs or browser storage. It is sent only to api.github.com and cleared from the input immediately. Do not commit tokens. Publishing is enforced by GitHub repository permissions; merely seeing the button does not grant access.

All visitors fetch snapshot.json on page load and check again every minute while the page is visible. Existing local drafts no longer override the published report. Drafts are recoverable with Restore local draft. Uploading/preparing a draft pauses shared refresh so work is not overwritten. Load published report exits the draft.

Only calculated reports and comparison data are committed, not the uploaded Excel ZIP. Published report data and repository history are public. The included snapshot is the existing report from your repository; your newer browser-only ZIP has not been supplied here.

Current calculation rules, rankings and charts are preserved. Publishing stores one current and one previous report without recursively nesting historical reports.

API reference: https://docs.github.com/en/rest/repos/contents#create-or-update-file-contents
