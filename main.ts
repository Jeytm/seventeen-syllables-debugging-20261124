import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Breakpoint set, midnight",
  "the log scrolls past, still no clue",
  "a single typo",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku + "\n");
console.log(haiku);
