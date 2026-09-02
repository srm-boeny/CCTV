# Monitoring
Monitoring Warning for BOENY: Manually, 

## Webmaster administration
To be tested

The forecast correction section covers today and the following two days. Each
date can override the automatic description, forecast image, or both. A disabled
correction, or an empty correction field, keeps the corresponding automatic
value. Corrections are stored by `YYYY-MM-DD` date in
`content/webmaster-content.json`; they do not modify the `const templates = [...]`
block maintained by the private forecast process.

## Automated processes

Python automation scripts live under `process/`. The marine forecast workflow
runs `python process/datascrappingMeteoMada.py` from the repository root: Done,
