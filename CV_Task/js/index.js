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
  if (a_w.style.display === "none") {
    a_w.style.display = "flex";
    pf_user.style.display = "none";
    pf_user.style.animation = "profile--run-down 0.8s ease-in-out";
  } else {
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
    c_title.style.display = "flex";
  }
};
document.getElementById("accordionposts-wrap--up").onclick = function () {
  if (a_w.style.display === "none") {
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  } else {
    a_w.style.display = "none";
    pf_user.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex";
  }
};
document.getElementById("user__icon-drop-down").onclick = function () {
  if (a_w.style.display === "none") {
    a_w.style.display = "flex";
    pf_user.style.display = "none";
  } else {
    a_w.style.display = "none";
    pf_user.style.display = "block";
    r_detail.style.display = "none";
    r_title.style.display = "flex";
    p_detail.style.display = "none";
    p_title.style.display = "flex";
    t_detail.style.display = "none";
    t_title.style.display = "flex";
    c_detail.style.display = "none";
    c_title.style.display = "flex";
  }
};
document.getElementById("profile-subtitle").onclick = function () {
  document.getElementById("profile-user").style.display = "none";
  document.getElementById("accordionposts-wrap").style.display = "flex";
};
//open resume
document.getElementById("icon-resume").onclick = function () {
  if (r_title.style.display === "none") {
    r_title.style.display = "flex";
    r_detail.style.display = "none";
  } else {
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
  if (r_title.style.display === "none") {
    r_title.style.display = "flex";
    r_detail.style.display = "none";
  } else {
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
  if (p_title.style.display === "none") {
    p_title.style.display = "flex";
    p_detail.style.display = "none";
  } else {
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
    category("web");
  }
};
document.getElementById("portfolio__title").onclick = function () {
  if (p_title.style.display === "none") {
    p_title.style.display = "flex";
    p_detail.style.display = "none";
  } else {
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
document.getElementById("portfolio-detail__title").onclick = function () {
  p_title.style.display = "flex";
  p_detail.style.display = "none";
};
//open Testimonials
document.getElementById("icon-testimonials").onclick = function () {
  if (t_title.style.display === "none") {
    t_title.style.display = "flex";
    t_detail.style.display = "none";
  } else {
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
  if (t_title.style.display === "none") {
    t_title.style.display = "flex";
    t_detail.style.display = "none";
  } else {
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
  if (c_title.style.display === "none") {
    c_title.style.display = "flex";
    c_detail.style.display = "none";
  } else {
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
  if (c_title.style.display === "none") {
    c_title.style.display = "flex";
    c_detail.style.display = "none";
  } else {
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

let pieChart1 = document.getElementById("icon-resume");
let pieChart2 = document.getElementById("resume__title");
pieChart1.addEventListener("click", pieChart);
pieChart2.addEventListener("click", pieChart);
function pieChart() {
  //draw pie chart
  var myPie = new Chart(document.getElementById("chart-pie"), {
    type: "doughnut",
    data: {
      datasets: [
        {
          backgroundColor: [
            "#1bc9e4",
            "#ffc455",
            "#ff754a",
            "#f95656",
            "#3a66e6",
          ],
          data: [1, 2, 3, 4, 5],
          borderWidth: 0,
        },
      ],
    },
    options: {
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false, // <- the important part
      },
      cutoutPercentage: 65,
      responsive: false,
      animation: {
        animateScale: true,
        duration: 5000,
        ananimateRotate: true,
      },
    },
  });
}
//button back to up
document.addEventListener("scroll", function () {
  var status = "duoi150";
  var x = pageYOffset;
  var a = document.getElementById("back-to-up");
  if (x > 150) {
    if (status == "duoi150") {
      status = "tren150";
      a.style.bottom = "1.8rem";
    }
  } else {
    if (status == "duoi150") {
      a.style.bottom = "-4.8rem";
      status = "duoi150";
    }
  }
});
//filter portfolio
function category(c) {
  if (c == "all") {
    document.getElementById("wrap-portfolio__page-number").style.display =
      "flex";
  } else {
    document.getElementById("wrap-portfolio__page-number").style.display =
      "none";
  }

  switch (c) {
    case "all":
      $(".portfolio-image").isotope({ filter: ".mot" });
      break;
    case "mot":
      $(".portfolio-image").isotope({ filter: ".mot" });
      document.getElementById("wrap-portfolio__page-number").style.display =
        "flex";
      break;
    case "hai":
      $(".portfolio-image").isotope({ filter: ".hai" });
      document.getElementById("wrap-portfolio__page-number").style.display =
        "flex";
      break;
    case "web":
      $(".portfolio-image").isotope({ filter: ".web" });
      break;
    case "video":
      $(".portfolio-image").isotope({
        filter: ".video",
        transitionDuration: 1000,
        hiddenStyle: {
          opacity: 0,
        },
        visibleStyle: {
          opacity: 1,
        },
      });
      break;
    case "photo":
      $(".portfolio-image").isotope({ filter: ".photo" });
      break;
    case "graphic":
      $(".portfolio-image").isotope({ filter: ".graphic" });
      break;
  }
}

var btnContainer1 = document.getElementById("portfolio-nav");
var btns1 = btnContainer1.getElementsByClassName("filter-item");
var btnContainer2 = document.getElementById("wrap-portfolio__page-number");
var btns2 = btnContainer2.getElementsByClassName("portfolio__page");

for (let i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function () {
    if (i == 0) {
      btns2[0].className += " active__page";
      btns2[1].className = "portfolio__page portfolio__page2";
    }

    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
for (let i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active__page");
    current[0].className = current[0].className.replace(" active__page", "");
    this.className += " active__page";
  });
}

//filter Testimonials
catogory__testimonials("page__one");
function catogory__testimonials(c) {
  let x = document.getElementsByClassName("wrap-blogger-item");
  let pageOne = document.getElementsByClassName("p__one");
  let pageTwo = document.getElementsByClassName("p__two");
  if (c == "page__two" || c == "page__next") {
    document.getElementById("p__back").style.display = "flex";
    document.getElementById("p__next").style.display = "none";
    pageOne[0].style.color = "#86888f";
    pageTwo[0].style.color = "var(--black-color--text)";
  }
  if (c == "page__one" || c == "page__back") {
    document.getElementById("p__back").style.display = "none";
    document.getElementById("p__next").style.display = "flex";
    pageOne[0].style.color = "var(--black-color--text)";
    pageTwo[0].style.color = "#86888f";
  }
  for (let i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    }
  }
}
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function removeClass(element, name) {
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


//change background color
document.addEventListener("DOMContentLoaded", function (event) {
  document.documentElement.setAttribute("data-theme", "light");

  // Get our button switcher
  var themeSwitch = document.getElementById("theme-switch");
  // When our button gets clicked
  let a = true;
  themeSwitch.onclick = function () {
    if (a) {
      document.querySelectorAll(".icon--white").forEach((a) => {
        a.style.display = "inline-block";
      });
      document.querySelectorAll(".icon--black").forEach((a) => {
        a.style.display = "none";
      });
      document.querySelector("#theme-switch").querySelector("span").innerHTML =
        "Default version";
      a = false;
    } else {
      document.querySelectorAll(".icon--white").forEach((a) => {
        a.style.display = "none";
      });
      document.querySelectorAll(".icon--black").forEach((a) => {
        a.style.display = "inline-block";
      });
      document.querySelector("#theme-switch").querySelector("span").innerHTML =
        "Dark version";
      a = true;
    }
    // Get the current selected theme, on the first run
    // it should be `light`
    var currentTheme = document.documentElement.getAttribute("data-theme");

    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";

    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
  };
});
// }
