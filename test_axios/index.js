let list = document.getElementById("list");

var userArr = new Array();
async function getData() {
  try {
    let result = await axios.get("https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users");
    for(let i = 0; i < result.data.length; i++){
      list.innerHTML += "<li>" + "Full Name: " + result.data[i].name + "</li>";
    }
    return result.data;
  } catch (error) {
    // console.error(error);
    alert("Lôĩ : " + error);
  }
}
getData();

function myFunction(e) {
  // ngăn chặn load trang khi bấm submit
  e.preventDefault();

  let fullname = document.getElementById("fullname__input").value.trim().replace(/\s+/g, ' ');

  var user = {
    FullName: fullname,
  };
  
  userArr.unshift(user);
  localStorage.setItem("userArr", JSON.stringify(userArr));
  var check = /[0-9]/;
  modal.style.display = "block";
  if (fullname == "") {
    modal_body.innerHTML = "";
    modal_body.innerHTML += "<p>Chua nhap ten</p>";
  } else {
    if (check.test(fullname)) {
      modal_body.innerHTML = "";
      modal_body.innerHTML += "<p>Không được nhập số trong tên</p>";
      return;
    } else {
      modal_body.innerHTML = "";
      modal.style.display = "none";
  
      async function setData() {
        try {
          let new_user = {
            "name": fullname,
          }
          let result = axios.post( "https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users",new_user);
          list.innerHTML += "<li>" + "Full Name: " + fullname + "</li>";
          return true;

        } catch (error) {
          alert("Lỗi" + error);
          return false;
        } 
      }
      setData();
      
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
