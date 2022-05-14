// ================ Bài tập 3 ====================
// Nhập vào n. Tính giai thừa 1*2*...n
    function baitap3() {
      // B1: Xác định đầu vào: input số nguyên
      var n = +document.getElementById("txtNum").value;
      // B2: Kiểm tra n có phải là số nguyên dương chẵn hay không
      if (n < 0) {
        alert("N không phải là số nguyên dương");
        return; // Kết thúc hàm => Không chạy tiếp những câu lệnh phía dưới
      } else{
        
      }
      // B3: Xử lý  n cho giai thừa (factorial) 1*2*...n và xuất kết quả ra màn hình cho đến khi sum <= 10000
      var notiDiv = document.getElementById("noti");
      notiDiv.style.display = "block";
      var i = 1;
      var fact = 1
      for (var i=1; i <= n; i++) {
        fact = fact*i
        
      
        }
        // Xử lý in kết quả ra giao diện
        notiDiv.innerHTML += `<p>fact: ${fact} - num: ${n}</p>`;
      }
      console.log(fact);
    