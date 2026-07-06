const css = require('fs').readFileSync('lunarc.css', 'utf8');
const classes = ['\\.section', '\\.section-[a-z-]+', '\\.hero', '\\.container', '\\.padding-global'];
classes.forEach(c => {
  const match = css.match(new RegExp(c + '\\s*{[^}]*}', 'gi'));
  if(match) console.log(match.join('\n'));
});
