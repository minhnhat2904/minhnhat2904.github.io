var array = [];
//Hàm có tham số event
function preview_image__add(event) {
  let files = event.target.files;
  let blob = URL.createObjectURL(files[0]);
  document.querySelector("#preview-image__add").src = blob;
}
function preview_image__edit(event) {
  let files = event.target.files;
  console.log(files);
  let blob = URL.createObjectURL(files[0]);
  let a = event.target.parentNode.parentNode;
  a.querySelector(".preview-image__edit").src = blob;
}
function showStudent(event) {
  event.preventDefault(); //ngăn cho trang không reload lại
  let majorInput = document.getElementById("select__add").value;
  let nameInput = document.getElementById("form__input__add").value.replace(/\s+/g,"");
  if(nameInput == "" || (nameInput.length > 10) || (nameInput.charAt(0)).search(/\d/) == 0){
    document.getElementById("name__required").style.display = "block";
  } else
    if(majorInput == "Mở để chọn chuyên ngành"){
      document.getElementById("major__required").style.display = "block";
    } else{
      document.getElementById("name__required").style.display = "none";
      document.getElementById("major__required").style.display = "none";
      saveToLocalStorage(objStudent());
      let getStudent = getStudentFromLocalStorage();
      displayStudent(getStudent);
    }
  };
function displayStudent(getStudent){
  document.querySelector("tbody").innerHTML = "";
  for (let i = 0; i < getStudent.length; i++) {
    let new_row = `<tr id="${i}">
        <td>${i+1}</td>
        <td><input type="text" readonly value="${getStudent[i].name.trim().replace(/\s+/g," ")}" class="name__input"></td>
        <td>
            <select name="" class="select__input" disabled>
                <option selected>${getStudent[i].major}</option>
                <option value="CNPM">CNPM</option> 
                <option value="HTTT">HTTT</option>
                <option value="ATTT">ATTT</option>
                <option value="HTN">HTN</option>
            </select>
        </td>
        
        <td>
            <input type="file" accept="image/*" class="input-image__edit" style="display:none">
            <img src="${getStudent[i].image}" alt="hienthihinhanh" class="preview-image__edit">
        </td>
        <td>
          <button onclick="editRow(event)" class="edit" style="display:block">Edit</button>
          <button onclick="saveRow(event,${i})" style="display:none" class="save">Save</button>
       </td>
        <td>
          <button onclick="deleteRow(${i})" class="delete" style="display:block">Delete</button>
          <button onclick="cancel(event)" style="display:none" class="cancel">Cancel</button>
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
  a.querySelector(".save").style.display = "block";
  a.querySelector(".cancel").style.display = "block";
  a.querySelector(".edit").style.display = "none";
  a.querySelector(".delete").style.display = "none";
  a.querySelector(".input-image__edit").onchange = preview_image__edit;
}
function saveRow(event,id){
  let a = event.target.parentNode.parentNode;
  let getStudent = getStudentFromLocalStorage();
  let name = a.querySelector(".name__input").value;
  let major = a.querySelector(".select__input").value;
  let image = a.querySelector(".preview-image__edit").src;
  getStudent[id].name = name;
  getStudent[id].major = major;
  getStudent[id].image = image;
  saveToLocalStorage(getStudent);
  displayStudent(getStudent);
  a.querySelector(".input-image__edit").style.display = "none";
  a.querySelector(".save").style.display = "none";
  a.querySelector(".cancel").style.display = "none";
  a.querySelector(".edit").style.display = "block";
  a.querySelector(".delete").style.display = "block";
}
function cancel(event){
  let getStudent = getStudentFromLocalStorage();
  displayStudent(getStudent);
}
function deleteRow(id__delete) {
    let getStudent = getStudentFromLocalStorage();
    getStudent.splice(id__delete,1);
    // localStorage.clear();
    array = [];
    saveToLocalStorage(getStudent);
    getStudent = getStudentFromLocalStorage();
    displayStudent(getStudent);
}
function objStudent(){
  let name = document.getElementById("form__input__add").value;
  let chuyen_nganh = document.getElementById("select__add").value;
  let anh_the = document.getElementById("preview-image__add").src;
  let obj = {
    name: name,
    major: chuyen_nganh,
    image: anh_the,
  };
  let getStudent = getStudentFromLocalStorage();
  if(getStudent != null){
    array = getStudent;
  }
  array.push(obj);
  return array;
}
function saveToLocalStorage(array) {
  const setjson = JSON.stringify(array);
  localStorage.setItem("key", setjson);
}
function getStudentFromLocalStorage(){
  const getStudent = JSON.parse(localStorage.getItem("key"));
  return getStudent;
}
window.onload = function(){
  let getStudent = getStudentFromLocalStorage();
  if(getStudent != null){
    array = getStudent;
  }
  displayStudent(getStudent);
}
document.querySelector("#form__add__student").onsubmit = showStudent;

document.querySelector("#input-image__add").onchange = preview_image__add;
