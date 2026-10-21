// Serve the static export with compression for a representative local audit.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const root = path.resolve(__dirname, '../out');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.avif': 'image/avif', '.webp': 'image/webp', '.png': 'image/png', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.txt': 'text/plain', '.xml': 'application/xml' };
http.createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); } catch { response.writeHead(400).end(); return; }
  let file = path.resolve(root, `.${pathname}`);
  if (file !== root && !file.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
  try {
    if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    let body = fs.readFileSync(file);
    const extension = path.extname(file);
    const headers = { 'Content-Type': types[extension] || 'application/octet-stream', 'Vary': 'Accept-Encoding' };
    if (pathname.startsWith('/_next/static/')) headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    if (['.html', '.js', '.css', '.txt', '.xml'].includes(extension) && /gzip/.test(request.headers['accept-encoding'] || '')) {
      body = zlib.gzipSync(body); headers['Content-Encoding'] = 'gzip';
    }
    response.writeHead(200, headers).end(body);
  } catch { response.writeHead(404).end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log('Production preview: http://127.0.0.1:4173'));
