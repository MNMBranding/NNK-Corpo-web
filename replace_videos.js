const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let c = fs.readFileSync(p, 'utf8');
      const orig = c;
      c = c.replace(/https?:\/\/[^\s"'`]+?\.(mp4|webm)/g, 'https://www.w3schools.com/html/mov_bbb.mp4');
      if (c !== orig) {
        fs.writeFileSync(p, c);
        console.log('Updated ' + p);
      }
    }
  });
}

walk('src');
