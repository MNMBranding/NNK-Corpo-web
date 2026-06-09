import fs from 'fs';
import https from 'https';
import path from 'path';

const htmlFile = 'lunarc.html';
const assetsDir = 'public/assets';

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const html = fs.readFileSync(htmlFile, 'utf8');

// Regex to find URLs like https://cdn.prod.website-files.com/...
const urlRegex = /https:\/\/cdn\.prod\.website-files\.com\/[^\s"'<>]+/g;
const matches = html.match(urlRegex) || [];
const uniqueUrls = [...new Set(matches)];

console.log(`Found ${uniqueUrls.length} unique URLs to download.`);

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => {});
        resolve(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const url of uniqueUrls) {
    const fileName = path.basename(url);
    const dest = path.join(assetsDir, fileName);
    
    // We can also modify the HTML to use local path
    // But since we are converting it to React components, we will just download the images
    // and refer to them from public/assets/...
    
    console.log(`Downloading ${fileName}...`);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(`Error downloading ${url}:`, e);
    }
  }
  console.log('Download complete.');
}

run();
