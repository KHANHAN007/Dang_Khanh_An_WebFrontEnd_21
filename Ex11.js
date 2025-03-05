const day = parseInt(prompt("Nhập ngày:"));
const month = parseInt(prompt("Nhập tháng:"));
let zodiac = "";
switch (month) {
  case 1:
    zodiac = day < 20 ? "Ma Kết" : "Bảo Bình";
    break;
  case 2:
    zodiac = day < 19 ? "Bảo Bình" : "Song Ngư";
    break;
  case 3:
    zodiac = day < 21 ? "Song Ngư" : "Bạch Dương";
    break;
  case 4:
    zodiac = day < 20 ? "Bạch Dương" : "Kim Ngưu";
    break;
  case 5:
    zodiac = day < 21 ? "Kim Ngưu" : "Song Tử";
    break;
  case 6:
    zodiac = day < 21 ? "Song Tử" : "Cự Giải";
    break;
  case 7:
    zodiac = day < 23 ? "Cự Giải" : "Sư Tử";
    break;
  case 8:
    zodiac = day < 23 ? "Sư Tử" : "Xử Nữ";
    break;
  case 9:
    zodiac = day < 23 ? "Xử Nữ" : "Thiên Bình";
    break;
  case 10:
    zodiac = day < 23 ? "Thiên Bình" : "Bọ Cạp";
    break;
  case 11:
    zodiac = day < 22 ? "Bọ Cạp" : "Nhân Mã";
    break;
  case 12:
    zodiac = day < 22 ? "Nhân Mã" : "Ma Kết";
    break;
  default:
    zodiac = "Ngày tháng không hợp lệ";
}
alert(`Cung hoàng đạo của bạn là: ${zodiac}`);
