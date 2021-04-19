var array = [];
//Hàm có tham số event
function preview_image__add(event) {
  // let files = event.target.files;
  // let blob = URL.createObjectURL(files[0]);
  // document.querySelector("#preview-image__add").src = blob;
  let files = event.target.files;
  let reader = new FileReader();
  reader.addEventListener("load", function () {
    document.querySelector("#preview-image__add").src = reader.result;
  }, false);
  reader.readAsDataURL(files[0]);
}
function preview_image__edit(event) {
  // let files = event.target.files;
  // let blob = URL.createObjectURL(files[0]);
  // let a = event.target.parentNode.parentNode;
  // a.querySelector(".preview-image__edit").src = blob;
  let files = event.target.files;
  let reader = new FileReader();
  reader.addEventListener("load", function () {
    event.target.parentNode.parentNode.querySelector(".preview-image__edit").src = reader.result;
  }, false);
  reader.readAsDataURL(files[0]);
}
function checkError(){
  let count = 0;
  let majorInput = document.getElementById("select__add").value;
  let nameInput = document
    .getElementById("form__input__add")
    .value.replace(/\s+/g, "");
  let imageInput = document.getElementById("input-image__add").value;

  if (nameInput == "") {
    document.getElementById("name__required").style.display = "block";
    count++;
  } else{
    if (nameInput.length > 10) {
      document.getElementById("name__required").style.display = "block";
      document.getElementById("name__required").innerHTML = "Không được nhập quá 10 kí tự";
      count++;
    } else{
        if (nameInput.charAt(0).search(/\d/) == 0) {
          document.getElementById("name__required").style.display = "block";
          document.getElementById("name__required").innerHTML = "Tên không được bắt đầu bằng số";
          count++;
        } else{
          document.getElementById("name__required").style.display = "none";
        }
      }
    }
  if (majorInput == "Mở để chọn chuyên ngành") {
    document.getElementById("major__required").style.display = "block";
    count++;
  } else{
    document.getElementById("major__required").style.display = "none";
  }
  if(imageInput == ""){
    document.getElementById("image__required").style.display = "block";
    count++;
  } else{
    let fsize = document.querySelector("#input-image__add").files[0].size;
    let ftype = document.querySelector("#input-image__add").files[0].type;
    if(fsize > 17000){
      document.getElementById("image__required").style.display = "block";
      document.getElementById("image__required").innerHTML = "Dung lượng file vượt quá giới hạn";
      count++;
    } else{
      console.log(ftype);
      if(ftype != 'image/png' && ftype != 'image/jepg'){
        document.getElementById("image__required").style.display = "block";
        document.getElementById("image__required").innerHTML = "File nhập không đúng";
        count++;
      }
      else{
        document.getElementById("image__required").style.display = "none";
      }
    } 
  }


    if(count == 0){
      return true;
    } else{
      return false;
    }
}
function checkErrorEdit(event){
  let count = 0;
  let a = event.target.parentNode.parentNode;
  let majorInput = a.querySelector(".select__input").value;
  let nameInput = a.querySelector(".name__input").value.replace(/\s+/g, "");
  let imageInput = a.querySelector(".input-image__edit").value;
  let imagePreview = a.querySelector(".preview-image__edit").src;
  if (nameInput == "") {
    a.querySelector(".name__required__edit").style.display = "block";
    count++;
  } else{
    if (nameInput.length > 10) {
      a.querySelector(".name__required__edit").style.display = "block";
      a.querySelector(".name__required__edit").innerHTML = "Không được nhập quá 10 kí tự";
      count++;
    } else{
        if (nameInput.charAt(0).search(/\d/) == 0) {
          a.querySelector(".name__required__edit").style.display = "block";
          a.querySelector(".name__required__edit").innerHTML = "Tên không được bắt đầu bằng số";
          count++;
        } else{
          a.querySelector(".name__required__edit").style.display = "none";
        }
      }
    }
  if (majorInput == "Mở để chọn chuyên ngành") {
    a.querySelector(".major__required__edit").style.display = "block";
    count++;
  } else{
    a.querySelector(".major__required__edit").style.display = "none";
  }
  // if(imagePreview != ""){
    
  // }
  if(imageInput == ""){
    
  } else{
    let fsize = a.querySelector(".input-image__edit").files[0].size;
    let ftype = a.querySelector(".input-image__edit").files[0].type;
    if(fsize > 17000){
      a.querySelector(".image__required__edit").style.display = "block";
      a.querySelector(".image__required__edit").innerHTML = "Dung lượng file vượt quá giới hạn";
      count++;
    } else{
      if(ftype != 'image/png' && ftype != 'image/jepg'){
        a.querySelector(".image__required__edit").style.display = "block";
        a.querySelector(".image__required__edit").innerHTML = "File nhập không đúng";
        count++;
      }
      else{
        a.querySelector(".image__required__edit").style.display = "none";
      }
    } 
  }
  if(count == 0){
    return true;
  } else{
    return false;
  }
}
function showStudent(event) {
  event.preventDefault(); //ngăn cho trang không reload lại
  if(checkError() == true){
    saveToLocalStorage(objStudent());
    let getStudent = getStudentFromLocalStorage();
    displayStudent(getStudent);
  }
}
function displayStudent(getStudent) {
  document.querySelector("tbody").innerHTML = "";
  for (let i = 0; i < getStudent.length; i++) {
    let new_row = `<tr id="${i}">
        <td>${i + 1}</td>
        <td><input type="text" readonly value="${getStudent[i].name
          .trim()
          .replace(/\s+/g, " ")}" class="name__input">
          <p class="name__required__edit" style="display: none;color: red;">Name is required</p>
        </td>
        <td>
            <select name="" class="select__input" disabled>
                <option selected>${getStudent[i].major}</option>
                <option value="CNPM">CNPM</option> 
                <option value="HTTT">HTTT</option>
                <option value="ATTT">ATTT</option>
                <option value="HTN">HTN</option>
            </select>
            <p class="major__required__edit" style="display: none;color: red;">Major is required</p>
        </td>
        
        <td>
            <input type="file" accept="image/*" class="input-image__edit" style="display:none">
            <img src="${
              getStudent[i].image
            }" alt="hienthihinhanh" class="preview-image__edit">
            <p class="image__required__edit" style="display: none;color: red;">Image is required</p>
        </td>
        <td id="edit_delete">
          <button onclick="editRow(event)" class="edit">Edit</button>
          <button onclick="deleteRow(${i})" class="delete">Delete</button>
        </td>
        <td id="save_cancel">
          <button onclick="saveRow(event,${i})" class="save">Save</button>
          <button onclick="cancel(event)" class="cancel">Cancel</button>
        </td>
    </tr>`;
    document.querySelector("tbody").innerHTML += new_row;
  }
}
function editRow(event) {
  let a = event.target.parentNode.parentNode;
  a.querySelector("input").readOnly = false;
  a.querySelector("select").disabled = false;
  a.querySelector(".input-image__edit").style.display = "block";
  a.querySelector("#save_cancel").style.display = "flex";
  a.querySelector("#edit_delete").style.display = "none";
  a.querySelector(".input-image__edit").onchange = preview_image__edit;
}
function saveRow(event, id) {
  let a = event.target.parentNode.parentNode;
  let getStudent = getStudentFromLocalStorage();
  let name = a.querySelector(".name__input").value;
  let major = a.querySelector(".select__input").value;
  let image = a.querySelector(".preview-image__edit").src;
  getStudent[id].name = name;
  getStudent[id].major = major;
  getStudent[id].image = image;
  if(checkErrorEdit(event) == true){
    saveToLocalStorage(getStudent);
    displayStudent(getStudent);
    a.querySelector(".input-image__edit").style.display = "none";
    a.querySelector(".save").style.display = "none";
    a.querySelector(".cancel").style.display = "none";
    a.querySelector(".edit").style.display = "block";
    a.querySelector(".delete").style.display = "block";
  }
  
}
function cancel(event) {
  let getStudent = getStudentFromLocalStorage();
  displayStudent(getStudent);
}
function deleteRow(id__delete) {
  let getStudent = getStudentFromLocalStorage();
  getStudent.splice(id__delete, 1);
  // localStorage.clear();
  array = [];
  saveToLocalStorage(getStudent);
  getStudent = getStudentFromLocalStorage();
  displayStudent(getStudent);
}
function objStudent() {
  let name = document.getElementById("form__input__add").value;
  let chuyen_nganh = document.getElementById("select__add").value;
  let anh_the = document.getElementById("preview-image__add").src;
  let obj = {
    name: name,
    major: chuyen_nganh,
    image: anh_the,
  };
  let getStudent = getStudentFromLocalStorage();
  if (getStudent != null) {
    array = getStudent;
  }
  array.push(obj);
  return array;
}
function saveToLocalStorage(array) {
  const setjson = JSON.stringify(array);
  localStorage.setItem("key", setjson);
}
function getStudentFromLocalStorage() {
  const getStudent = JSON.parse(localStorage.getItem("key"));
  if(getStudent == null){
    return [];
  }
  return getStudent;
}
window.onload = function () {
  let getStudent = getStudentFromLocalStorage();
  if (getStudent != null) {
    array = getStudent;
  }
  displayStudent(getStudent);
};
document.querySelector("#form__add__student").onsubmit = showStudent;

document.querySelector("#input-image__add").onchange = preview_image__add;
