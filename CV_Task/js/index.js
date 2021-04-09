var a_w = document.getElementById("accordionposts-wrap");
var pf_user = document.getElementById("profile-user");
var r_title = document.getElementById("resume__title");
var r_detail = document.getElementById("resume__detail");
var resume_detail_title = document.getElementById("resume__detail__title");
var p_title = document.getElementById("portfolio__title");
var p_detail = document.getElementById("portfolio-detail");
var t_title = document.getElementById("testimonials__title");
var t_detail = document.getElementById("testimonials-detail");
var c_title = document.getElementById("contacts__title");
var c_detail = document.getElementById("contacts-detail");

//open profile
document.getElementById("button__left__1").onclick = function () {
  if(a_w.style.display === "none"){
    a_w.style.display = "flex";
    pf_user.style.display = "none";
    pf_user.style.animation = "profile--run-down 0.8s ease-in-out";
  }
  else{
    a_w.style.display = "none";
    pf_user.style.display = "block";
    pf_user.style.animation = "profile--run-up 0.8s ease-in-out";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex"
  }
};
document.getElementById("accordionposts-wrap--up").onclick = function () {
  if(a_w.style.display === "none"){
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
  else{
    a_w.style.display = "none";
    pf_user.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex"
  }
};
document.getElementById("user__icon-drop-down").onclick = function () {
  if(a_w.style.display === "none"){
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
  else{
    a_w.style.display = "none";
    pf_user.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex"
  }
};
document.getElementById("profile-subtitle").onclick = function () {
  document.getElementById("profile-user").style.display = "none";
  document.getElementById("accordionposts-wrap").style.display = "flex";
};
//open resume
document.getElementById("icon-resume").onclick = function () {
  if(r_title.style.display === "none"){
    r_title.style.display = "flex";
    r_detail.style.display = "none";
  }
  else{
    r_title.style.display = "none";
    r_detail.style.display = "block";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex";
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
};
document.getElementById("resume__title").onclick = function () {
  if(r_title.style.display === "none"){
    r_title.style.display = "flex";
    r_detail.style.display = "none";
  }
  else{
    r_title.style.display = "none";
    r_detail.style.display = "block";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex";
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
};
document.getElementById("resume__detail__title").onclick = function () {
    r_title.style.display = "flex";
    r_detail.style.display = "none";
};

//open portfolio
document.getElementById("icon-portfolio").onclick = function () {
  if(p_title.style.display === "none"){
    p_title.style.display = "flex";
    p_detail.style.display = "none";
  }
  else{
    p_title.style.display = "none";
    p_detail.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex";
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
};
document.getElementById("portfolio__title").onclick = function(){
  if(p_title.style.display === "none"){
    p_title.style.display = "flex";
    p_detail.style.display = "none";
  }
  else{
    p_title.style.display = "none";
    p_detail.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex";
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
};
document.getElementById("portfolio-detail__title").onclick = function(){
  p_title.style.display = "flex";
  p_detail.style.display = "none";
}
//open Testimonials
document.getElementById("icon-testimonials").onclick = function () {
  if(t_title.style.display === "none"){
    t_title.style.display = "flex";
    t_detail.style.display = "none";
  }
  else{
    t_title.style.display = "none";
    t_detail.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex";
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
};
document.getElementById("testimonials__title").onclick = function () {
  if(t_title.style.display === "none"){
    t_title.style.display = "flex";
    t_detail.style.display = "none";
  }
  else{
    t_title.style.display = "none";
    t_detail.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex";
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
};

document.getElementById("testimonials-detail__title").onclick = function () {
  document.getElementById("testimonials__title").style.display = "flex";
  document.getElementById("testimonials-detail").style.display = "none";
};

//open contacts
document.getElementById("icon-contacts").onclick = function () {
  if(c_title.style.display === "none"){
    c_title.style.display = "flex";
    c_detail.style.display = "none";
  }
  else{
    c_title.style.display = "none";
    c_detail.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
};
document.getElementById("contacts__title").onclick = function () {
  if(c_title.style.display === "none"){
    c_title.style.display = "flex";
    c_detail.style.display = "none";
  }
  else{
    c_title.style.display = "none";
    c_detail.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  }
};

document.getElementById("contacts-detail__title").onclick = function () {
  document.getElementById("contacts__title").style.display = "flex";
  document.getElementById("contacts-detail").style.display = "none";
};

//draw pie chart
var myPie = new Chart(document.getElementById("chart-pie"), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          backgroundColor: ["#1bc9e4", "#ffc455","#ff754a","#f95656","#3a66e6"],
          data: [1,2,3,4,5],
          borderWidth: 0,
        }
      ]
    },
    options: {
        tooltips: {
             enabled: false
        },
        legend: {
            display: false  // <- the important part
        },
        cutoutPercentage: 65,
        responsive: false,
        animation: {
            animateScale: true,
            duration: 3000,
        },
        events: []
    }

});

//button back to up
document.addEventListener("scroll", function(){
  var status = "duoi150";
  var x = pageYOffset;
  var a = document.getElementById("back-to-up");
  if(x > 150){
    if(status == "duoi150")
    {
      status="tren150";
      a.style.bottom = "1.8rem";
    }
  }
  else{
    if(status == "duoi150"){
      a.style.bottom = "-4.8rem";
      status = "duoi150";
    }
  }
});
//gallery portfolio
var check = true;

    geeksportal("all");
		function geeksportal(c) {
      var x, i, j;			
      x = document.getElementsByClassName("mot");
      var y = document.getElementsByClassName("hai");
      if(check == true){
        if (c == "all" || c == "page-mot"){
          c = "";
        }
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          
          if (x[i].className.indexOf(c) > -1)
            w3AddClass(x[i], "show");
        }
        check = false;
      } else{
        // if (c == "page-hai"){
        //   c = "";
        // }
        // for (j = 0; j < y.length; j++) {
        //   w3RemoveClass(y[j], "show");
          
        //   if (y[j].className.indexOf(c) > -1)
        //     w3AddClass(y[j], "show");
        // }
        // check = true;
      }
      // if (c == "all" || c == "page-mot"){
      //   c = "";
      // }
			// for (i = 0; i < x.length; i++) {
			// 	w3RemoveClass(x[i], "show");
				
			// 	if (x[i].className.indexOf(c) > -1)
			// 		w3AddClass(x[i], "show");
      // }
    }
	
		function w3AddClass(element, name) {
			var i, arr1, arr2;
			arr1 = element.className.split(" ");
      arr2 = name.split(" ");
			
			for (i = 0; i < arr2.length; i++) {
				if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
				}
			}
		}
	
		function w3RemoveClass(element, name) {
			var i, arr1, arr2;
			arr1 = element.className.split(" ");
			arr2 = name.split(" ");
			for (i = 0; i < arr2.length; i++) {
				while (arr1.indexOf(arr2[i]) > -1) {
					arr1.splice(arr1.indexOf(arr2[i]), 1);
				}
			}
			element.className = arr1.join(" ");
		}
		// Add active class to the current
		// button (highlight it)
    var btnContainer = document.getElementById("portfolio-nav");
    console.log(btnContainer);
    var btns = btnContainer.getElementsByClassName("filter-item");
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function() {
				var current =
          document.getElementsByClassName("active");				
				current[0].className =
					current[0].className.replace(" active", "");
				
				this.className += " active";
			});
		}