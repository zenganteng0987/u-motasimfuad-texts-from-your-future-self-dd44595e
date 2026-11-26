import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Hey, it's you from 2046. Good news: we finally start the diet Monday. Bad news: it's been Monday for 20 years. Also stop Googling symptoms at 2am. Spoiler: it's just the chair. Love, Future You";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
