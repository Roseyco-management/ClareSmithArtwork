const fs = require('fs');
const path = require('path');

// Simple CSV parser that handles quoted fields
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

// Read CSV and parse products
const csvPath = '/Users/baileybarry/ClareSmithArtwork/public/ClareSmithArtwork Products.csv';
const imagesDir = '/Users/baileybarry/ClareSmithArtwork/public/images';

let csvContent = fs.readFileSync(csvPath, 'utf-8');

// Remove BOM if present
if (csvContent.charCodeAt(0) === 0xFEFF) {
  csvContent = csvContent.slice(1);
}

const lines = csvContent.split('\n');

// Parse CSV header
const header = parseCSVLine(lines[0]);
const handleIdIndex = header.indexOf('handleId');
const fieldTypeIndex = header.indexOf('fieldType');
const nameIndex = header.indexOf('name');
const imageUrlIndex = header.indexOf('productImageUrl');
const collectionIndex = header.indexOf('collection');

console.log('Header indices:', { handleIdIndex, fieldTypeIndex, nameIndex, imageUrlIndex, collectionIndex });

// Build mapping: wix image ID -> { slug, collection, name }
const imageMap = {};

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim()) continue;

  const parts = parseCSVLine(line);
  const fieldType = parts[fieldTypeIndex];

  // Only process Product rows (not Variant rows)
  if (fieldType !== 'Product') continue;

  const handleId = parts[handleIdIndex];
  const name = parts[nameIndex];
  const imageUrl = parts[imageUrlIndex];
  const collection = parts[collectionIndex];

  if (!imageUrl || !handleId) {
    console.log(`Skipping row - missing data: handleId=${handleId}, imageUrl=${imageUrl}`);
    continue;
  }

  // Extract the wix image ID (without extension)
  // CSV format: 86cb05_81383aafdeee4290b1d92a7bb502eb99~mv2.jpg
  // Downloaded as: 86cb05_81383aafdeee4290b1d92a7bb502eb99-mv2.jpg (~ replaced with -)
  const wixId = imageUrl
    .replace('~mv2', '-mv2')  // Replace tilde with dash
    .replace(/\.[^.]+$/, ''); // Remove extension

  // Determine collection folder
  let folder = 'fine-art'; // default
  if (collection && collection.toLowerCase().includes('dreamscape')) {
    folder = 'dreamscapes';
  }

  imageMap[wixId] = {
    slug: handleId,
    name: name,
    folder: folder,
    collection: collection,
    originalExt: path.extname(imageUrl)
  };

  console.log(`Mapped: ${wixId} -> ${handleId} (${folder})`);
}

console.log(`\nTotal products mapped: ${Object.keys(imageMap).length}\n`);

// Now process files in images directory
const files = fs.readdirSync(imagesDir);

let moved = 0;
let skipped = 0;

for (const file of files) {
  const filePath = path.join(imagesDir, file);

  // Skip directories
  if (fs.statSync(filePath).isDirectory()) continue;

  // Skip non-wix files (logo, video, etc.)
  if (!file.startsWith('86cb05_')) continue;

  // Extract wix ID from filename
  const ext = path.extname(file);
  const wixId = file.replace(ext, '');

  const mapping = imageMap[wixId];

  if (!mapping) {
    console.log(`No mapping found for: ${file}`);
    skipped++;
    continue;
  }

  // Create new filename and destination
  const newFilename = `${mapping.slug}${ext}`;
  const destFolder = path.join(imagesDir, mapping.folder);
  const destPath = path.join(destFolder, newFilename);

  // Ensure destination folder exists
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  // Move and rename file
  fs.renameSync(filePath, destPath);
  console.log(`Moved: ${file} -> ${mapping.folder}/${newFilename}`);
  moved++;
}

console.log(`\n--- Summary ---`);
console.log(`Moved & renamed: ${moved}`);
console.log(`Skipped (no mapping): ${skipped}`);
