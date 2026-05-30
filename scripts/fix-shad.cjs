#!/usr/bin/env node
// Usage: node scripts/fix-shad.js src/data/<fichier>.ts

const fs = require("fs");
const SHAD = "།";

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node scripts/fix-shad.js <fichier.ts>");
  process.exit(1);
}

const SKIP_TYPES = [
  "mantra", "image", "image-row", "nav-btn", "repeat-btn",
  "no-translation", "mantra-main", "nav-back",
];
const SKIP_CHARS = ["༄", "༈", "ༀ", "༔"];

let lines = fs.readFileSync(filePath, "utf8").split("\n");
let addCount = 0, removeCount = 0;
let currentType = "";

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Track phrase type (10-space indent)
  const typeMatch = line.match(/^          type: "([^"]+)"/);
  if (typeMatch) currentType = typeMatch[1];

  // ── PHRASE tibetan, single line (10 spaces) ──
  const phraseOne = line.match(/^(          tibetan: ")([^"]*)(",?)(\s*)$/);
  if (phraseOne) {
    const [, pre, tib, post, trail] = phraseOne;
    if (tib && !tib.startsWith(SHAD) && !SKIP_CHARS.some((c) => tib.startsWith(c)) && !SKIP_TYPES.includes(currentType)) {
      lines[i] = pre + SHAD + tib + post + trail;
      addCount++;
    }
    continue;
  }

  // ── PHRASE tibetan, multiline (value on next line at 12 spaces) ──
  if (line.match(/^          tibetan:\s*$/) && i + 1 < lines.length) {
    const next = lines[i + 1];
    const nextMatch = next.match(/^(            ")([^"]*)(",?)(\s*)$/);
    if (nextMatch) {
      const [, pre, tib, post, trail] = nextMatch;
      if (tib && !tib.startsWith(SHAD) && !SKIP_CHARS.some((c) => tib.startsWith(c)) && !SKIP_TYPES.includes(currentType)) {
        lines[i + 1] = pre + SHAD + tib + post + trail;
        addCount++;
      }
      i++;
      continue;
    }
  }

  // ── WORD tibetan compact: { tibetan: "།..." ──
  if (line.includes('{ tibetan: "' + SHAD)) {
    lines[i] = line.replace('{ tibetan: "' + SHAD, '{ tibetan: "');
    removeCount++;
    continue;
  }

  // ── WORD tibetan expanded (14 spaces) ──
  const wordExp = line.match(/^(              tibetan: ")(།)([^"]*",?\s*)$/);
  if (wordExp) {
    lines[i] = wordExp[1] + wordExp[3];
    removeCount++;
    continue;
  }
}

fs.writeFileSync(filePath, lines.join("\n"), "utf8");
console.log(`${filePath}: +${addCount} shads ajoutés, -${removeCount} retirés`);

// ── Rapport des ། en milieu de vers ──
const midShad = [];
lines = fs.readFileSync(filePath, "utf8").split("\n");
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^          tibetan: "([^"]+)"/);
  if (!m) continue;
  const tib = m[1];
  const inner = tib.replace(/^།+/, "").replace(/[།༎༈༄༔ ]+$/, "");
  if (inner.includes(SHAD)) {
    midShad.push(`  L${i + 1}: ${tib.slice(0, 70)}`);
  }
}
if (midShad.length) {
  console.log("\n⚠ ། en milieu de vers (à vérifier manuellement) :");
  midShad.forEach((l) => console.log(l));
} else {
  console.log("Aucun ། en milieu de vers.");
}
