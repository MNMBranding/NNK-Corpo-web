const fs = require('fs'); 
const dirs = ['about', 'contact', 'news', 'packages']; 
dirs.forEach(d => { 
  const p = 'src/app/' + d + '/page.tsx'; 
  if(fs.existsSync(p)) { 
    let c = fs.readFileSync(p, 'utf8'); 
    
    // Replace <Footer /> inside the </div> wrapper
    c = c.replace(/<Footer\s*\/>\s*<\/div>/, '</div>\n      <Footer />');
    
    // Some components might wrap the whole thing in empty fragments <>...</> already, if not, we must wrap it.
    // If the file starts with export default function Contact() { return ( <div ...
    // We need to wrap it in <> ... </> if it's returning multiple siblings now!
    if (!c.includes('<>')) {
      c = c.replace(/return\s*\(\s*<div/, 'return (\n    <>\n      <div');
      c = c.replace(/<Footer \/>\s*\);/, '<Footer />\n    </>\n  );');
    }

    fs.writeFileSync(p, c); 
  } 
});
