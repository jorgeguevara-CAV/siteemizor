import { cp, readdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "emizor-principal");
const destination = path.join(root, "public");

for (const entry of await readdir(source, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".html")) {
    await cp(path.join(source, entry.name), path.join(destination, entry.name));
  }
}

await rm(path.join(destination, "assets"), { recursive: true, force: true });
await cp(path.join(source, "assets"), path.join(destination, "assets"), { recursive: true });

console.log("Principal sincronizada en public/ para la vista previa unificada.");
