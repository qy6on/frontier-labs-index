# Frontier Labs Index

A minimal single-page index of influential AI research papers from seven labs: Anthropic, OpenAI, Google DeepMind, NVIDIA, DeepSeek, Moonshot AI and Zhipu AI.

## Features

- Filter by lab, topic and year; live search over titles, summaries, topics and authors
- Sort by newest, oldest, lab or A to Z
- Detail sheet per paper with authors, the arXiv identifier or publisher DOI, and direct links
- Minimal black-on-white design, responsive, respects reduced motion
- "Download project as ZIP" in the footer: packs the site's own source files in the browser

## Files

| File | Role |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | Minimal styling and layout |
| `data.js` | Labs and 59 papers |
| `app.js` | Filtering, search, sorting and the detail sheet |

## Adding a paper

Add an object to `window.PAPERS` in `data.js`:

```js
{
  id: "an-09",                       // unique
  lab: "anthropic",                  // a lab id from window.LABS
  title: "Paper title",
  authors: "First Author, Second Author, et al.",
  year: 2025,
  cat: "Safety & alignment",         // becomes a topic filter option
  tags: ["Alignment"],
  arxiv: "2501.00000",               // or doi: "10.1038/..." or url: "https://..."
  summary: "A short plain-English summary."
}
```

Counts, lab chips, topic options and year options update automatically.

## Links

Each paper points at its own record: `arxiv` becomes `https://arxiv.org/abs/<id>`, `doi` becomes `https://doi.org/<doi>`, and `url` is used only for papers that have neither, such as Anthropic's Transformer Circuits publications and model cards.

Identifiers were checked against arXiv abstract pages and, where relevant, publisher records. A title search is not good enough here: AlphaFold has no arXiv version at all, and a search for "Video generation models as world simulators" returns unrelated papers.

## Running

The site has no build step. Open `index.html`.

## Downloading a ZIP

The footer button fetches `index.html`, `styles.css`, `app.js`, `data.js` and `README.md` from the
site itself and writes them into an uncompressed ZIP (`buildZip` in `app.js`), so no library and no
server are involved. It only works when the page is served over http(s): a `file://` page cannot
read its own sibling files, and the button reports that instead of failing silently.
