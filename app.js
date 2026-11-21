/* ==========================================================================
   Frontier Labs Index — filtering, search and the detail sheet
   ========================================================================== */

(function () {
  "use strict";

  var LABS = window.LABS || [];
  var PAPERS = (window.PAPERS || []).slice();
  var LAB_BY_ID = {};

  LABS.forEach(function (lab, i) {
    lab._order = i;
    LAB_BY_ID[lab.id] = lab;
  });

  var state = { lab: "all", topic: "all", year: "all", query: "", sort: "new" };
  var lastFocused = null;

  var $ = function (sel) { return document.querySelector(sel); };

  function norm(text) {
    return String(text).toLowerCase().replace(/\s+/g, " ").trim();
  }

  /* "Yuntao Bai, Saurav Kadavath, et al." -> "Yuntao Bai et al." */
  function shortAuthors(authors) {
    if (!authors) return "";
    if (authors.indexOf(",") === -1) return authors;
    return authors.split(",")[0].trim() + " et al.";
  }

  function uniqueTopics() {
    var seen = {};
    var out = [];
    PAPERS.forEach(function (p) {
      if (!seen[p.cat]) {
        seen[p.cat] = true;
        out.push(p.cat);
      }
    });
    return out.sort();
  }

  var listBox = $("#list");
  var chipBox = $("#chips");
  var emptyBox = $("#empty");
  var countBox = $("#resultCount");
  var searchInput = $("#search");
  var yearSelect = $("#yearSelect");
  var topicSelect = $("#topicSelect");
  var sortSelect = $("#sortSelect");
  var modal = $("#modal");
  var modalBody = $("#modalBody");

  /* ---------- static chrome ---------- */

  function countOf(labId) {
    return PAPERS.filter(function (p) { return p.lab === labId; }).length;
  }

  function renderStatic() {
    var years = [];
    PAPERS.forEach(function (p) {
      if (years.indexOf(p.year) === -1) years.push(p.year);
    });

    $("#stats").textContent =
      PAPERS.length + " papers · " +
      LABS.length + " labs · " +
      uniqueTopics().length + " topics";

    $("#mastheadNote").textContent = PAPERS.length + " papers";

    var chips = [
      '<button class="chip is-active" type="button" data-lab="all">All <span>' +
        PAPERS.length + "</span></button>"
    ];
    LABS.forEach(function (lab) {
      chips.push(
        '<button class="chip" type="button" data-lab="' + lab.id + '">' +
          lab.name + " <span>" + countOf(lab.id) + "</span>" +
        "</button>"
      );
    });
    chipBox.innerHTML = chips.join("");

    years.sort(function (a, b) { return b - a; });
    yearSelect.innerHTML =
      '<option value="all">All years</option>' +
      years.map(function (y) {
        return '<option value="' + y + '">' + y + "</option>";
      }).join("");

    topicSelect.innerHTML =
      '<option value="all">All topics</option>' +
      uniqueTopics().map(function (t) {
        return '<option value="' + t + '">' + t + "</option>";
      }).join("");

    $("#footerLabs").innerHTML = LABS.map(function (lab) {
      return '<a href="' + lab.url + '" target="_blank" rel="noopener">' + lab.name + "</a>";
    }).join("");
  }

  /* ---------- filtering and sorting ---------- */

  function matches(p) {
    if (state.lab !== "all" && p.lab !== state.lab) return false;
    if (state.topic !== "all" && p.cat !== state.topic) return false;
    if (state.year !== "all" && String(p.year) !== state.year) return false;

    var q = norm(state.query);
    if (!q) return true;

    var lab = LAB_BY_ID[p.lab] || { name: "" };
    var haystack = norm(
      [p.title, p.summary, p.cat, p.authors, p.tags.join(" "), lab.name, p.year].join(" ")
    );
    return q.split(" ").every(function (word) {
      return haystack.indexOf(word) !== -1;
    });
  }

  function sortList(items) {
    var byYear = function (a, b) { return b.year - a.year; };

    if (state.sort === "old") {
      return items.sort(function (a, b) {
        return a.year - b.year || a.title.localeCompare(b.title);
      });
    }
    if (state.sort === "lab") {
      return items.sort(function (a, b) {
        return (LAB_BY_ID[a.lab]._order - LAB_BY_ID[b.lab]._order) || byYear(a, b);
      });
    }
    if (state.sort === "az") {
      return items.sort(function (a, b) { return a.title.localeCompare(b.title); });
    }
    return items.sort(function (a, b) {
      return byYear(a, b) || a.title.localeCompare(b.title);
    });
  }

  /* ---------- list ---------- */

  function itemHTML(p) {
    var lab = LAB_BY_ID[p.lab];

    return (
      '<article class="item" tabindex="0" role="button" data-id="' + p.id + '">' +
        '<h2 class="item-title">' + p.title + "</h2>" +
        '<p class="item-note">' + p.summary + "</p>" +
        '<p class="item-meta">' +
          "<span>" + lab.name + "</span>" +
          "<span>" + shortAuthors(p.authors) + "</span>" +
          "<span>" + p.year + "</span>" +
          "<span>" + p.cat + "</span>" +
        "</p>" +
      "</article>"
    );
  }

  function render() {
    var items = sortList(PAPERS.filter(matches));

    listBox.innerHTML = items.map(itemHTML).join("");
    listBox.hidden = items.length === 0;
    emptyBox.hidden = items.length > 0;

    var text = "<b>" + items.length + "</b> papers";
    if (state.lab !== "all") text += " from " + LAB_BY_ID[state.lab].name;
    if (state.topic !== "all") text += " on " + state.topic.toLowerCase();
    if (state.year !== "all") text += " in " + state.year;
    if (state.query.trim()) text += ' matching "' + state.query.trim() + '"';
    countBox.innerHTML = text;

    Array.prototype.forEach.call(chipBox.querySelectorAll(".chip"), function (chip) {
      chip.classList.toggle("is-active", chip.dataset.lab === state.lab);
    });
  }

  /* ---------- detail sheet ---------- */

  function paperLinks(p, lab) {
    var links = [];

    if (p.arxiv) {
      links.push({ label: "arXiv:" + p.arxiv, url: "https://arxiv.org/abs/" + p.arxiv });
    }
    if (p.doi) {
      links.push({ label: "DOI: " + p.doi, url: "https://doi.org/" + p.doi });
    }
    if (p.url) {
      links.push({ label: "Read the paper", url: p.url });
    }

    links.push({
      label: "Google Scholar",
      url: "https://scholar.google.com/scholar?q=" + encodeURIComponent(p.title)
    });
    links.push({ label: lab.name + " research", url: lab.url });

    return links;
  }

  function openSheet(id) {
    var p = null;
    for (var i = 0; i < PAPERS.length; i++) {
      if (PAPERS[i].id === id) { p = PAPERS[i]; break; }
    }
    if (!p) return;

    var lab = LAB_BY_ID[p.lab];
    lastFocused = document.activeElement;

    var links = paperLinks(p, lab).map(function (link) {
      return '<a href="' + link.url + '" target="_blank" rel="noopener">' + link.label + "</a>";
    }).join("");

    modalBody.innerHTML =
      '<p class="sheet-meta">' + lab.name + " · " + p.year + " · " + p.cat + "</p>" +
      '<h2 class="sheet-title" id="sheetTitle">' + p.title + "</h2>" +
      '<p class="sheet-authors">' + p.authors + "</p>" +
      '<p class="sheet-text">' + p.summary + "</p>" +
      '<div class="sheet-links">' + links + "</div>" +
      '<p class="sheet-note">Links go to the paper itself: the arXiv record, the publisher DOI, or the page that hosts it. The summaries are written for this index and are not the authors\' abstracts.</p>';

    modal.hidden = false;
    document.body.classList.add("is-locked");

    var closeBtn = modal.querySelector(".sheet-close");
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  }

  function closeSheet() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("is-locked");
    modalBody.innerHTML = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus({ preventScroll: true });
  }

  /* ---------- project archive ---------- */

  /* The site fetches its own source files and packs them into a stored
     (uncompressed) ZIP, so the download needs no library and no build step. */

  var ZIP_FILES = ["index.html", "styles.css", "app.js", "data.js", "README.md"];

  var CRC_TABLE = (function () {
    var table = new Uint32Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      table[i] = c >>> 0;
    }
    return table;
  })();

  function crc32(bytes) {
    var c = 0xffffffff;
    for (var i = 0; i < bytes.length; i++) {
      c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function buildZip(files) {
    var encoder = new TextEncoder();
    var entries = files.map(function (file) {
      var dataBytes = encoder.encode(file.text);
      return {
        nameBytes: encoder.encode(file.name),
        dataBytes: dataBytes,
        crc: crc32(dataBytes)
      };
    });

    var offset = 0;
    entries.forEach(function (entry) {
      entry.offset = offset;
      offset += 30 + entry.nameBytes.length + entry.dataBytes.length;
    });

    var cdOffset = offset;
    var cdSize = 0;
    entries.forEach(function (entry) {
      cdSize += 46 + entry.nameBytes.length;
    });

    var buffer = new ArrayBuffer(cdOffset + cdSize + 22);
    var view = new DataView(buffer);
    var bytes = new Uint8Array(buffer);
    var pointer = 0;

    function u16(value) { view.setUint16(pointer, value, true); pointer += 2; }
    function u32(value) { view.setUint32(pointer, value >>> 0, true); pointer += 4; }
    function raw(array) { bytes.set(array, pointer); pointer += array.length; }

    var dosTime = 0;
    var dosDate = ((2025 - 1980) << 9) | (1 << 5) | 1; /* fixed stamp: 2025-01-01 */

    entries.forEach(function (entry) {
      u32(0x04034b50);
      u16(20);
      u16(0x0800);
      u16(0);
      u16(dosTime);
      u16(dosDate);
      u32(entry.crc);
      u32(entry.dataBytes.length);
      u32(entry.dataBytes.length);
      u16(entry.nameBytes.length);
      u16(0);
      raw(entry.nameBytes);
      raw(entry.dataBytes);
    });

    entries.forEach(function (entry) {
      u32(0x02014b50);
      u16(20);
      u16(20);
      u16(0x0800);
      u16(0);
      u16(dosTime);
      u16(dosDate);
      u32(entry.crc);
      u32(entry.dataBytes.length);
      u32(entry.dataBytes.length);
      u16(entry.nameBytes.length);
      u16(0);
      u16(0);
      u16(0);
      u16(0);
      u32(0);
      u32(entry.offset);
      raw(entry.nameBytes);
    });

    u32(0x06054b50);
    u16(0);
    u16(0);
    u16(entries.length);
    u16(entries.length);
    u32(cdSize);
    u32(cdOffset);
    u16(0);

    return new Blob([buffer], { type: "application/zip" });
  }

  var zipBtn = $("#zipBtn");
  var zipNote = $("#zipNote");
  var zipLink = $("#zipLink");

  function setZipNote(text) { if (zipNote) zipNote.textContent = text; }

  function downloadArchive() {
    if (!zipBtn || zipBtn.disabled) return;
    zipBtn.disabled = true;
    setZipNote("Collecting files…");

    var requests = ZIP_FILES.map(function (name) {
      return fetch(name, { cache: "no-store" })
        .then(function (res) { return res.ok ? res.text() : null; })
        .then(function (text) { return text === null ? null : { name: name, text: text }; })
        .catch(function () { return null; });
    });

    Promise.all(requests)
      .then(function (results) {
        var files = results.filter(Boolean);
        if (!files.length) throw new Error("no files");

        var blob = buildZip(files);
        var url = URL.createObjectURL(blob);

        /* A direct link as well: some embedded browsers ignore the download
           attribute on a synthetic click, and then this is the way through. */
        if (zipLink) {
          zipLink.href = url;
          zipLink.hidden = false;
        }

        var link = document.createElement("a");
        link.href = url;
        link.download = "ai-research-atlas.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(function () { URL.revokeObjectURL(url); }, 600000);

        var skipped = ZIP_FILES.length - files.length;
        setZipNote(
          files.length + " files · " + Math.max(1, Math.round(blob.size / 1024)) + " KB" +
          (skipped ? " · " + skipped + " could not be read" : "") +
          ". If nothing was saved, tap “Save the ZIP”."
        );
        zipBtn.disabled = false;
      })
      .catch(function () {
        setZipNote("The browser would not hand over the site's own files. Open the preview link in Safari and try again.");
        zipBtn.disabled = false;
      });
  }

  if (zipBtn) zipBtn.addEventListener("click", downloadArchive);

  /* ---------- events ---------- */

  listBox.addEventListener("click", function (e) {
    var item = e.target.closest(".item");
    if (item) openSheet(item.dataset.id);
  });

  listBox.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var item = e.target.closest(".item");
    if (!item) return;
    e.preventDefault();
    openSheet(item.dataset.id);
  });

  chipBox.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    state.lab = chip.dataset.lab;
    render();
  });

  searchInput.addEventListener("input", function () {
    state.query = searchInput.value;
    render();
  });

  yearSelect.addEventListener("change", function () {
    state.year = yearSelect.value;
    render();
  });

  topicSelect.addEventListener("change", function () {
    state.topic = topicSelect.value;
    render();
  });

  sortSelect.addEventListener("change", function () {
    state.sort = sortSelect.value;
    render();
  });

  $("#resetBtn").addEventListener("click", function () {
    state.lab = "all";
    state.topic = "all";
    state.year = "all";
    state.query = "";
    state.sort = "new";
    searchInput.value = "";
    yearSelect.value = "all";
    topicSelect.value = "all";
    sortSelect.value = "new";
    render();
  });

  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) closeSheet();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSheet();
      return;
    }
    if (e.key !== "/" || !modal.hidden) return;

    var tag = document.activeElement ? document.activeElement.tagName : "";
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;

    e.preventDefault();
    searchInput.focus();
  });

  /* ---------- start ---------- */

  renderStatic();
  render();
})();
