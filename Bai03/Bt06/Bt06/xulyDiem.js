
function tinhDiemTrungBinh(toan, van, anh) {
    return (toan + van + anh) / 3;
}

function xepLoai(diemTB) {
    if (diemTB >= 8) {
        return "Giỏi";
    } else if (diemTB >= 6.5) {
        return "Khá";
    } else if (diemTB >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

module.exports = {
    tinhDiemTrungBinh,
    xepLoai
};
