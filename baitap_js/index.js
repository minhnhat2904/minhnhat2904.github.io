let list = document.getElementById("list");

var userArr = new Array();


function myFunction(e) {
  // ngăn chặn load trang khi bấm submit
  e.preventDefault();
  let fullname = document.getElementById("fullname__input").value;
  let age = document.getElementById("age__input").value;
  var user = {
    FullName: fullname,
    Age: age,
  };
  userArr.unshift(user);
  localStorage.setItem("userArr", JSON.stringify(userArr));
  var check = /[0-9]/;
  modal.style.display = "block";
  if (fullname == "") {
    modal_body.innerHTML = "";
    modal_body.innerHTML += "<p>Chua nhap ten</p>";
    console.log("abc");
  } else {
    if (check.test(fullname)) {
      modal_body.innerHTML = "";
      modal_body.innerHTML += "<p>Không được nhập số trong tên</p>";
      return;
    } else{
      modal_body.innerHTML = "";
      if (age == "") {
        modal_body.innerHTML = "";
        modal_body.innerHTML = "<p>Chua nhap tuoi</p>";
      } else {
        if (parseInt(age) > 100 || parseInt(age) < 10) {
          modal_body.innerHTML = "";
          modal_body.innerHTML += "<p>Tuoi khong dung</p>";
        } else{
          modal.style.display = "none";
          userArr = JSON.parse(localStorage.getItem("userArr"));
          list.innerHTML +=
            "<li>" + "Full Name: " + userArr[0].FullName + "</li>";
          list.innerHTML += "<li>" + "Age: " + userArr[0].Age + "</li>";
        }
      }
    }
  }
}


var modal = document.getElementById("myModal");

var btn = document.getElementById("add");

var span = document.getElementsByClassName("btn-danger")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
var content_model = document.getElementById("modal_body");
