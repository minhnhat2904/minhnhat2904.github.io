let exOneDate = document.getElementById("ex__one--date");
let exOneTime = document.getElementById("ex__one--time");
let exTwoFormatMDY = document.getElementById("ex__two__format--m-d-y");
let exTwoFormatMDYSlash = document.getElementById("ex__two__format--mdy--slash");
let exTwoFormatDMY = document.getElementById("ex__two__format--d-m-y");
let exTwoFormatDMYSlash = document.getElementById("ex__two__format--dmy--slash");
let today = new Date();
let date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
let time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
exOneDate.innerHTML += "<p>" + date + "</p>";
exOneTime.innerHTML += "<p>" + time + "</p>";
exTwoFormatMDY.innerHTML +=
  "<p> " +
  (today.getMonth() + 1) +
  "-" +
  today.getDate() +
  "-" +
  today.getFullYear() +
  "</p>";
exTwoFormatMDYSlash.innerHTML +=
  "<p> " +
  (today.getMonth() + 1) +
  "/" +
  today.getDate() +
  "/" +
  today.getFullYear() +
  "</p>";
exTwoFormatDMY.innerHTML +=
  "<p> " +
  today.getDate() +
  "-" +
  (today.getMonth() + 1) +
  "-" +
  today.getFullYear() +
  "</p>";
exTwoFormatDMYSlash.innerHTML +=
  "<p> " +
  today.getDate() +
  "/" +
  (today.getMonth() + 1) +
  "/" +
  today.getFullYear() +
  "</p>";
function checkBaiTapBa(e) {
  e.preventDefault();
  let soNguyen = document
    .getElementById("ex__three__form__input")
    .value.toString();
  let count = 0;
  if (soNguyen.length == 1) {
    document.getElementById("ex__three__result").innerHTML = "<p></p>";
    document.getElementById("ex__three__result").innerHTML +=
      "<p>Hãy nhập nhiều hơn 1 số</p>";
  } else {
    for (let i = 0; i < soNguyen.length; i++) {
      if (soNguyen.charAt(i) < soNguyen.charAt(i + 1)) {
        count++;
      }
      if (count == soNguyen.length - 1) {
        document.getElementById("ex__three__result").innerHTML = "<p></p>";
        document.getElementById("ex__three__result").innerHTML +=
          "<p>Chuỗi chữ số tăng</p>";
      } else {
        document.getElementById("ex__three__result").innerHTML = "<p></p>";
        document.getElementById("ex__three__result").innerHTML +=
          "<p>Không phải chuỗi chữ số tăng</p>";
      }
    }
  }
}
function checkBaiTapBon(e) {
  e.preventDefault();
  let chuoiCu = document.getElementById("ex__four__form__input").value.trim();
  let chuoiMoi = "";
  var check = /[0-9]/;
  if (check.test(chuoiCu)) {
    alert("Chỉ được nhập kí tự từ A->Z và a->z");
  } else {
    for (let i = 0; i < chuoiCu.length; i++) {
      if (chuoiCu[i] != " ") {
        chuoiMoi += String.fromCharCode(chuoiCu.charCodeAt(i) + 1);
      } else {
        chuoiMoi += chuoiCu.charAt(i);
      }
    }
    document.getElementById("ex__four__result").innerHTML = "<p></p>";
    document.getElementById("ex__four__result").innerHTML +=
      "<p>" + chuoiMoi + "</p>";
  }
}
function checkBaiTapNam(e) {
  e.preventDefault();
  let chuoiCu = document.getElementById("ex__five__form__input").value;
  let chuoiMoi = "";
  if (chuoiCu.length < 3) {
    alert("Chuỗi phải có độ dài lớn hơn 3");
  } else {
    if (chuoiCu.length % 2 == 0) {
      alert("Chuỗi phải có độ dài lẻ");
    } else {
      chuoiMoi += chuoiCu.charAt(Math.floor(chuoiCu.length / 2 - 1));
      chuoiMoi += chuoiCu.charAt(Math.floor(chuoiCu.length / 2));
      chuoiMoi += chuoiCu.charAt(Math.floor(chuoiCu.length / 2 + 1));
      document.getElementById("ex__five__result").innerHTML = "<p></p>";
      document.getElementById("ex__five__result").innerHTML +=
        "<p>" + "Chuỗi mới là : " + chuoiMoi + "</p>";
    }
  }
}
function addElement(e) {
  e.preventDefault();
  let arrElement = document.getElementById("arr__element");
  let a = document.getElementById("ex__six__form__input");
  if (a.value == "" || a.value <= 1) {
    alert("Chưa nhập mảng");
  } else {
    if(a.value > 100){
      alert("Nhập nhiều quá máy chạy không nổi + điền mệt");
    }else{
      arrElement.innerHTML =
      '<p style="margin-right: 15px;" id="arr__element__title">Nhập mảng : </p>';
      for (let i = 0; i < a.value; i++) {
        arrElement.innerHTML += '<input type="number" name="array[]" value="">';
      }
    }
  }
}
function checkBaiTapSau(e) {
  e.preventDefault();
  let exSixResult = document.getElementById("ex__six__result");
  let a = new Array();
  let b = new Array();
  let c = new Array();
  let d = new Array();
  let max = 0;
  let input = document.getElementsByName("array[]");
  for (let i = 0; i < input.length; i++) {
    a[i] = input[i].value;
  }
  b = a;
  for (let i = 0; i < a.length - 1; i++) {
    let count = 0;
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        count++;
      }
    }
    if (count >= max) {
      max = count;
      c[0] = a[i];
      c[1] = max;
    }
  }
  if (c[1] > 1) {
    exSixResult.innerHTML = "";
    exSixResult.innerHTML +=
      "<p>Phần tử " +
      c[0] +
      " xuất hiện nhiều nhất với " +
      c[1] +
      " lần xuất hiện</p>";
  } else {
    exSixResult.innerHTML = "<p>Không tìm thấy</p>";
  }
}
function checkBaiTapBay(e) {
  e.preventDefault();
  let a = document.getElementById("ex__seven__form__input").value;
  if (a.toLowerCase().indexOf("java") == -1) {
    document.getElementById("ex__seven__result").innerHTML = "";
    document.getElementById("ex__seven__result").innerHTML +=
      "<p>Không tìm thấy</p>";
  } else {
    document.getElementById("ex__seven__result").innerHTML = "";
    document.getElementById("ex__seven__result").innerHTML +=
      "<p>Có chứa 'java'</p>";
  }
}
function checkBaiTapTam(e) {
  e.preventDefault();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();

  let a = document.getElementById("ex__eight__form__input").value;
  if (a > 0 && a < 13) {
    document.getElementById("ex__eight__result").innerHTML = "";
    document.getElementById("ex__eight__result").innerHTML +=
      "<p>" + "Tên tháng là: " + monthNames[a - 1] + "</p>";
  } else {
    alert("Vui lòng nhập đúng tháng");
  }
}
function checkBaiTapChin(e) {
  e.preventDefault();
  let arr = new Array();
  let arrElementLongest = new Array();
  let a = document.getElementById("ex__nine__form__input").value;
  let b = findLongestWord(a);
  arr = a.trim().replace(/\s+/g, " ").split(" ");
  document.getElementById("ex__nine__result").innerHTML = "";
  document.getElementById("ex__nine__result").innerHTML +=
    "<p> Từ dài nhất trong chuỗi là : </p>";
  arr.forEach((element) => {
    if (element.length == b) {
      document.getElementById("ex__nine__result").innerHTML +=
        "<p>" + element + "</p>";
    }
  });
}
function findLongestWord(str) {
  return str.split(" ").reduce(function (acc, cur) {
    return Math.max(acc, cur.length);
  }, 0);
}
function checkBaiTapMuoi(e) {
  e.preventDefault();
  let firstNum = document.getElementById("ex__ten__form__input__first__num")
    .value;
  let secondNum = document.getElementById("ex__ten__form__input__second__num")
    .value;
  let count = 0;
  if(firstNum === secondNum){
    alert("Bạn phải nhập 2 số khác nhau");
  }
  if (Number(firstNum) > Number(secondNum)) {
    [firstNum, secondNum] = [secondNum, firstNum];
  }
  document.getElementById("ex__ten__result").innerHTML = "";
  document.getElementById("ex__ten__result").innerHTML += '<p> Các số nguyên tố giữa ' + firstNum + " và " + secondNum + " là :</p>"
  for (let i = Number(firstNum) + 1; i < Number(secondNum); i++) {
    if (checkSoNguyenTo(i)) {
      document.getElementById("ex__ten__result").innerHTML += i + "\t";
      count++;
    }
  }
  if (count == 0) {
    document.getElementById("ex__ten__result").innerHTML += "<p>Không có số nguyên tố </p>";
  }
}

function checkSoNguyenTo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
