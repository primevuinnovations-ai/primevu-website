const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../node_modules/@opennextjs/cloudflare/dist/cli/commands/build.js');

try {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // We override args.dangerouslyUseUnsupportedNextVersion to true
    if (content.includes('args.dangerouslyUseUnsupportedNextVersion')) {
      content = content.replace(/args\.dangerouslyUseUnsupportedNextVersion/g, 'true');
      fs.writeFileSync(file, content);
      console.log('[Postinstall] Patched @opennextjs/cloudflare to bypass Next.js 14 version check.');
    }
  }
} catch (err) {
  console.error('[Postinstall] Failed to patch opennextjs-cloudflare:', err);
}
