import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const JOKE =
  "I left the family group chat for some peace and quiet. My wife added me back in five minutes and renamed it 'Peace and Quiet'.";
// One line, one groan: the wish becomes the label.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, JOKE, "utf8");
chmodSync(target, 0o644);
