
const fs = require('fs');

const file = 'thongtin.txt';

// 1. Tạo tập tin
fs.writeFileSync(file, 'Ho ten: Rah Lan Thien\nMa sinh vien: CDCNTT18A30\n', 'utf8');
console.log('Da tao tap tin thongtin.txt');

// 2. Đọc tập tin lần đầu
console.log('\nNoi dung ban dau:');
console.log(fs.readFileSync(file, 'utf8'));

// 3. Ghi nối thêm tên lớp
fs.appendFile(file, 'Lop: CD-CNT18A\n', 'utf8', (err) => {
    if (err) {
        console.log('Loi ghi file:', err);
        return;
    }

    console.log('Da them ten lop vao tap tin');

    // 4. Đọc lại tập tin sau khi cập nhật
    console.log('\nNoi dung sau khi cap nhat:');
    console.log(fs.readFileSync(file, 'utf8'));
});
