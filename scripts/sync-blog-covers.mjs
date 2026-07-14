import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coversDir = path.resolve(__dirname, "../public/blog/covers");
const publicDir = path.resolve(__dirname, "../public");

const legacyMap = {
  "blog-gst-ecommerce.jpg": "gst-e-commerce-india.jpg",
  "blog-gst-calendar.jpg": "gst-calendar-penalty-guide.jpg",
  "blog-nri-mutual-funds.jpg": "nri-mutual-funds-fema.jpg",
  "blog-succession-planning.jpg": "succession-planning-primer.jpg",
  "blog-nri-repatriation.jpg": "nri-repatriation-fema-guide.jpg",
  "blog-startup-compliance.jpg": "startup-compliance-checklist.jpg",
  "blog-income-tax-slabs.jpg": "income-tax-slabs-india-fy-2026-27.jpg",
  "blog-gst-registration.jpg": "gst-registration-process-india-2026.jpg",
  "blog-nri-income-tax-return.jpg": "how-nris-file-income-tax-return-india.jpg",
  "blog-fema-repatriation-rules.jpg": "fema-rules-nri-repatriation.jpg",
  "blog-roc-compliance.jpg": "roc-compliance-checklist-private-companies-india.jpg",
  "blog-indian-subsidiary.jpg": "set-up-indian-subsidiary-foreign-company.jpg",
};

for (const [legacyName, coverName] of Object.entries(legacyMap)) {
  const source = path.join(coversDir, coverName);
  const destination = path.join(publicDir, legacyName);

  if (!fs.existsSync(source)) {
    console.error(`Missing cover: ${source}`);
    process.exitCode = 1;
    continue;
  }

  fs.copyFileSync(source, destination);
  console.log(`Synced ${coverName} -> public/${legacyName}`);
}

// Remove stale SVG fallbacks if present
for (const file of fs.readdirSync(coversDir)) {
  if (file.endsWith(".svg")) {
    fs.unlinkSync(path.join(coversDir, file));
    console.log(`Removed stale ${file}`);
  }
}

console.log("Blog cover sync complete.");
