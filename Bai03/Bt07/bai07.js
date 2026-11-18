
const http = require('http');

// Tạo Web Server tại cổng 3001
const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:3001');

    // Hiển thị tiếng Việt
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Xử lý /hello?name=Minh
    if (url.pathname === '/hello') {
        const name = url.searchParams.get('name');

        if (name === null || name.trim() === '') {
            res.statusCode = 400;
            res.end('Lỗi: Thiếu tham số name hoặc tên không hợp lệ!');
            return;
        }

        res.end(`Xin chào ${name}`);
    }

    // Xử lý /sum?a=10&b=20
    else if (url.pathname === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');

        if (a === null || b === null ||
            a.trim() === '' || b.trim() === '') {
            res.statusCode = 400;
            res.end('Lỗi: Thiếu tham số a hoặc b!');
            return;
        }

        const soA = Number(a);
        const soB = Number(b);

        if (!Number.isFinite(soA) || !Number.isFinite(soB)) {
            res.statusCode = 400;
            res.end('Lỗi: a và b phải là số hợp lệ!');
            return;
        }

        res.end(`Tổng = ${soA + soB}`);
    }

    // Đường dẫn không tồn tại
    else {
        res.statusCode = 404;
        res.end('Lỗi 404: Không tìm thấy đường dẫn!');
    }
});

// Khởi động Server
server.listen(3001, () => {
    console.log('Web Server đang chạy tại http://localhost:3001');
});
