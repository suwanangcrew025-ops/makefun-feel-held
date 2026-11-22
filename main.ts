// main.ts — writes one short text to /output/entry.txt.
// Node 22, standard library only, no network.
//
// The text is a slow scene, not an instruction: a father carrying his
// sleeping child home the long way, past shuttered shops in the rain.
// Nobody is told to relax and nothing is explained; the calm is shown by
// the scene itself — a cheek on a shoulder, a coat smelling of rain, a
// blanket pulled up to the chin — and the last line turns the dark from
// something to fear into a room that knows the child's name. The lines
// are kept short, one breath each, so the reading itself slows down.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "My father carried me home the long way,\npast the shuttered shops,\nmy cheek on his shoulder, his coat smelling of rain.\nHe did not wake me at the door.\nHe laid me in my bed, shoes still on,\npulled the blanket to my chin,\nand the dark, for once, felt like a room that knew my name.";

const count = [...TEXT].length;
if (count < 1 || count > 280) {
  throw new Error(`entry text is ${count} code points, outside the 1-280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote entry.txt (${count} code points)`);
