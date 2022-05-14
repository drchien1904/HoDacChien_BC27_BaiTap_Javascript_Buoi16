// ================ Bài tập 2 ====================
// Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2
//+ x^3 + … + x^n (Sử dụng vòng lặp và hàm)

    function baitap2(x, n) {
      // B1: Xác định đầu vào: input số nguyên
      var n = +document.getElementById("txtNum1").value;
      var x = +document.getElementById("txtNum2").value;
      // B2: Kiểm tra n có phải là số nguyên dương chẵn hay không
      if (n < 0) {
        alert("N không phải là số nguyên dương");
        return; // Kết thúc hàm => Không chạy tiếp những câu lệnh phía dưới
      }
      // B3: Xử lý  n cho sum = x + x^2 x^3 + … + x^n và xuất kết quả ra màn hình
 
      var notiDiv = document.getElementById("noti");
      notiDiv.style.display = "block";
      
      var sum = 0
      var i = 1;
      while (i <= n) {
        sum += x**i;
        i++;
        }
        // Xử lý in kết quả ra giao diện
        notiDiv.innerHTML += `<p>Sum: ${sum} - num: ${n}</p>`;
        console.log("Bài tập 3:", sum);
      }
      
    