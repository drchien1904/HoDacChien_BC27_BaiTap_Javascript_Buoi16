// ================ Bài tập 4 ====================
// chương trình khi click vào button sẽ in ra 10 thẻ div.
//Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
//background màu xanh.
function baitap4() {
  // B1:tạo biến

  var divNoti = document.getElementById("noti");
  // B2: xử dụng vòng lặp
  for (var i = 1; i <= 10; i++) {
    // Tạo một div xong rồi gán giá trị cho biến content
    var content = document.createElement("div");

    // Chỉnh css cho biến content
    content.style.height = "20px";
    content.style.color = "white";
    // Gắn biến content vào divNoti
    divNoti.appendChild(content);

    if (i % 2 == 0) {
      // B3: Xử lý  n cho kết quả ra màn hình cho đến khi n <= 10
      var text = document.createTextNode("Đây là biến chẵn");
      content.appendChild(text);
      // text.style.color = "white";
      content.style.background = "red";
    } else {
      // B3: Xử lý  n cho kết quả ra màn hình cho đến khi n <= 10
      var text = document.createTextNode("Đây là biến lẽ");
      content.appendChild(text);
      // text.style.color = "white";
      content.style.background = "blue";
    }
  }
}
