// ================ Bài tập 1 ====================
// Tìm n nhỏ nhất sao cho: sum = 1 + 2 + 3 + ... + n > 10000
    function baitap1() {
      // B1: Xác định đầu vào: input số nguyên
      var n = +document.getElementById("txtNum").value;
      // B2: Kiểm tra n có phải là số nguyên dương chẵn hay không
      if (n < 0) {
        alert("N không phải là số nguyên dương");
        return; // Kết thúc hàm => Không chạy tiếp những câu lệnh phía dưới
      }
      // B3: Xử lý  n cho sum += n và xuất kết quả ra màn hình cho đến khi sum <= 10000
      var notiDiv = document.getElementById("noti");
      notiDiv.style.display = "block";
      var n = 1;
      var sum = 1
      while (sum <= 10000) {
        sum += n;
        n++;
        if(sum> 10000){
          break;
        }
        // Xử lý in kết quả ra giao diện
        notiDiv.innerHTML += `<p>Sum: ${sum} - num: ${n}</p>`;
      }
      console.log(n);
    }