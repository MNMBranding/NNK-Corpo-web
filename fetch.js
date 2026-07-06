const https = require('https');
https.get('https://lunarc-template.webflow.io/', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const m = d.match(/href="([^"]+\.css)"/);
    if (m) {
      console.log('Found CSS:', m[1]);
      https.get(m[1], r2 => {
        let c2 = '';
        r2.on('data', c => c2 += c);
        r2.on('end', () => require('fs').writeFileSync('lunarc.css', c2));
      });
    }
  });
});
