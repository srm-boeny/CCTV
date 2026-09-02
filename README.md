# Monitoring
Monitoring Warning for BOENY

## Webmaster administration

The public page reads webmaster-managed alert settings and slides from
`content/webmaster-content.json`. Use the gear icon in the public header to
open `admin/`.

The admin page authenticates directly with the GitHub API using a fine-grained
personal access token. It never requests the GitHub account password and keeps
the token only in browser memory for the current page session.

Create the token from GitHub **Settings > Developer settings > Personal access
tokens > Fine-grained tokens** with these limits:

- Resource owner: the owner of `srm-boeny/CCTV`.
- Repository access: only `CCTV`.
- Repository permission: `Contents` set to `Read and write`.
- Use a short expiration date and renew it when required.

After connecting, the webmaster can set the alert level and hazard type, add or
remove slides, upload PNG/JPEG images, edit titles and descriptions, reorder
slides, and publish the changes to `main`. Uploaded files are stored under
`assets/uploads/` and the associated text is stored in
`content/webmaster-content.json`.

The publishing account must be allowed to write directly to `main`. If branch
protection requires pull requests, the admin publishing flow must be changed to
create a branch and pull request instead.

## Automated processes

Python automation scripts live under `process/`. The marine forecast workflow
runs `python process/datascrappingMeteoMada.py` from the repository root.
