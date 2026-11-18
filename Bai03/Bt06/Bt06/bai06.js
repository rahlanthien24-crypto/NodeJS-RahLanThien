
const {
    tinhDiemTrungBinh,
    xepLoai
} = require("./xulyDiem");

const danhSachSinhVien = [
    {
        hoTen: "Rah Lan Thiên",
        toan: 9,
        van: 8,
        anh: 8.5
    },
    {
        hoTen: "Nguyễn Văn An",
        toan: 7,
        van: 6,
        anh: 7.5
    },
    {
        hoTen: "Trần Thị Bình",
        toan: 4,
        van: 5,
        anh: 4.5
    }
];

console.log("===== KẾT QUẢ HỌC TẬP =====");

danhSachSinhVien.forEach((sv, index) => {
    const diemTB = tinhDiemTrungBinh(
        sv.toan,
        sv.van,
        sv.anh
    );

    const loai = xepLoai(diemTB);

    console.log(`\nSinh viên ${index + 1}`);
    console.log(`Họ tên: ${sv.hoTen}`);
    console.log(`Điểm trung bình: ${diemTB.toFixed(2)}`);
    console.log(`Xếp loại: ${loai}`);
});

console.log("\n===== HOÀN THÀNH =====");
