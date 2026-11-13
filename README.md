# BÀI 3 – BÀI TẬP 03: THAO TÁC TẬP TIN BẰNG FILE SYSTEM

## 1. Thông tin sinh viên

- Họ tên: Rah Lan Thiên
- Mã sinh viên: CDCNTT18A30
- Lớp: CD-CNT18A
- Môn học: Node.js và MongoDB

## 2. Mục tiêu bài thực hành

Sử dụng module `fs` trong Node.js để thực hiện các thao tác với tập tin.

## 3. Nội dung thực hiện

1. Tạo tập tin `thongtin.txt` chứa họ tên và mã sinh viên bằng `fs.writeFileSync()`.
2. Đọc và hiển thị nội dung tập tin lên Terminal bằng `fs.readFileSync()`.
3. Ghi nối thêm tên lớp bằng `fs.appendFile()`.
4. Đọc lại tập tin để kiểm tra nội dung sau khi cập nhật.

## 4. Các bước chạy chương trình

**Bước 1:** Mở thư mục `Bt03` bằng Visual Studio Code.

**Bước 2:** Mở Terminal trong VS Code.

**Bước 3:** Nhập lệnh:

```bash
node bai03.js
```

**Bước 4:** Nhấn Enter và kiểm tra kết quả.

## 5. Kết quả chạy chương trình

```text
Da tao tap tin thongtin.txt

Noi dung ban dau:
Ho ten: Rah Lan Thien
Ma sinh vien: CDCNTT18A30

Da them ten lop vao tap tin

Noi dung sau khi cap nhat:
Ho ten: Rah Lan Thien
Ma sinh vien: CDCNTT18A30
Lop: CD-CNT18A
```


## 6. Ảnh minh chứng

### Ảnh 1: Code chương trình
![Code bai03.js](IMAGES/01_code_bai03.png)

### Ảnh 2: Kết quả chạy chương trình
![Ket qua Bt03](IMAGES/02_ketqua_bt03.png)

### Ảnh 3: Nội dung tập tin thongtin.txt
![Noi dung thongtin.txt](IMAGES/03_thongtin.png)


## 7. Kết luận

Chương trình đã thực hiện thành công các thao tác tạo, đọc và ghi nối thêm nội dung tập tin bằng module File System (`fs`) của Node.js.
