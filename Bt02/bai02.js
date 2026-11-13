const http = require('http');
const PORT = 3000;
const hoTen = 'Rah Lan Thiên';
const maSinhVien = 'CHUA_CAP_NHAT'; // Thay bằng mã sinh viên thật
const lop = 'CNTT18A';

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const page = (title, content) => `<!doctype html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>body{font-family:Arial,sans-serif;max-width:760px;margin:60px auto;padding:0 20px;line-height:1.7;background:#f6f8fc;color:#1f2937}main{background:white;border-radius:14px;padding:30px;box-shadow:0 5px 25px #0001}a{color:#2563eb}</style></head><body><main>${content}</main></body></html>`;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.url === '/') {
    res.writeHead(200);
    res.end(page('Trang chủ - Bài 3', `<h1>Xin chào!</h1><h2>Bài thực hành Node.js - Bài 3</h2><p>Họ tên: ${escapeHtml(hoTen)}</p><p>Mã sinh viên: ${escapeHtml(maSinhVien)}</p><p>Lớp: ${escapeHtml(lop)}</p><a href="/about">Giới thiệu bản thân</a>`));
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end(page('Giới thiệu bản thân', `<h1>Giới thiệu bản thân</h1><p>Họ tên: ${escapeHtml(hoTen)}</p><p>Mã sinh viên: ${escapeHtml(maSinhVien)}</p><p>Lớp: ${escapeHtml(lop)}</p><p>Ngành: Công nghệ thông tin</p><p>Đang học Node.js và MongoDB.</p><a href="/">Quay về trang chủ</a>`));
  } else {
    res.writeHead(404);
    res.end(page('404 - Không tìm thấy', '<h1>404 - Không tìm thấy trang</h1><a href="/">Quay về trang chủ</a>'));
  }
});
server.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`));
