# Bài 3 – Bt02: Tạo Web Server với Node.js

**Sinh viên:** Rah Lan Thiên  
**Lớp:** CNTT18A  
**Mã sinh viên:** CHƯA CẬP NHẬT (cần điền mã thật trong `bai02.js` và README)

## Mục tiêu
Sử dụng module `http` tích hợp trong Node.js để tạo Web Server chạy tại cổng 3000, xử lý đường dẫn `/`, `/about` và trả mã 404 cho đường dẫn không tồn tại.

## Các bước thực hiện
1. Mở VS Code và mở thư mục `NodeJS/Bai03/Bt02`.
2. Mở Terminal, kiểm tra Node.js: `node -v`.
3. Chạy chương trình: `node bai02.js`.
4. Giữ Terminal chạy, mở trình duyệt và kiểm tra:
   - `http://localhost:3000` – trang chủ, lời chào và mã sinh viên (HTTP 200).
   - `http://localhost:3000/about` – giới thiệu bản thân (HTTP 200).
   - `http://localhost:3000/khong-ton-tai` – trang báo lỗi (HTTP 404).
5. Kiểm tra mã trạng thái trong PowerShell (Terminal khác): `curl.exe -I http://localhost:3000/khong-ton-tai` (hoặc xem tab Network trong Developer Tools). Lưu ý lệnh `curl.exe -I` gửi HEAD; server trả mã 404 cho đường dẫn này.
6. Dừng server bằng `Ctrl+C`.

Không cần `npm install` vì chương trình chỉ dùng module `http` có sẵn.

## Ảnh minh chứng cần chụp
Sau khi chạy trên máy, chụp và đặt các ảnh sau trong thư mục `images`:
- `01-terminal.png`: Terminal hiển thị lệnh `node bai02.js` và thông báo server chạy.
- `02-trang-chu.png`: Trình duyệt ở `http://localhost:3000`.
- `03-about.png`: Trình duyệt ở `http://localhost:3000/about`.
- `04-404.png`: Trình duyệt ở đường dẫn không tồn tại và tab Network thể hiện mã 404 (hoặc ảnh Terminal kiểm tra HTTP status).

**Lưu ý:** Các ảnh này phải là ảnh chụp kết quả chạy thực tế; không được coi ảnh mô phỏng là bằng chứng.

## Cấu trúc nộp GitHub
```
NodeJS/
└── Bai03/
    └── Bt02/
        ├── bai02.js
        ├── Readme.md
        └── images/
            ├── 01-terminal.png
            ├── 02-trang-chu.png
            ├── 03-about.png
            └── 04-404.png
```

## Kết quả mong đợi
Server chạy cổng 3000, `/` và `/about` trả HTTP 200 với nội dung phù hợp, đường dẫn không tồn tại trả HTTP 404.
