let categories = document.querySelector(".categories");
let opt = document.querySelector(".opt");
let opt_list = Array.from(document.querySelectorAll(".opt_list"));
let close = document.querySelector(".close");
let closes = document.querySelector(".closes");
let cl = document.querySelector(".cl");

let lang = document.querySelector(".lang");
let lang_list = Array.from(document.querySelectorAll(".lang_list"));
let languages = document.getElementById("languages");
let Acnt = document.querySelector(".Acnt");
let acc_set = document.querySelector(".acc_set");
let log_set = document.querySelector(".log_set");

categories.addEventListener("click", () => {
  if (opt.style.display === "block") {
    opt.style.display = "none";
  } else {
    opt.style.display = "block";
  }
});

opt_list.forEach((ele) => {
  ele.addEventListener("click", () => {
    document.querySelector(".categories > span").textContent = ele.textContent;
    opt.style.display = "none";
  });
});

close.addEventListener("click", () => {
  opt.style.display = "none";
});

closes.addEventListener("click", () => {
  lang.style.display = "none";
});

languages.addEventListener("click", () => {
  lang.style.display = "block";
});

lang_list.forEach((ele) => {
  ele.addEventListener("click", () => {
    let str = ele.textContent;
    str = str.substring(str.length - 2);
    document.querySelector("#languages > span").textContent = str;
    lang.style.display = "none";
  });
});

Acnt.addEventListener("click", () => {
  acc_set.style.display = "block";
});

cl.addEventListener("click", () => {
  acc_set.style.display = "none";
});

/////////////////////////////////////////////
//log out

log_set.addEventListener("click", () => {
  localStorage.removeItem("credential");
  location.reload();
});
