let userVal = document.getElementById("users");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let login = document.getElementById("login");
let v1 = document.getElementById("v1");
let v2 = document.getElementById("v2");
let box1 = document.querySelector(".box");
let box2 = document.querySelector(".box2");
let amazon = document.getElementById("amazon");

//initialization of id pass
let userName = "";
let password = "";
var credential;

//checking if user signup earlier or not if signup than skip the signup process
if (localStorage.getItem("credential")) {
  var myUser = JSON.parse(localStorage.getItem("credential"));
  box1.style.display = "none";
  amazon.style.display = "block";
  userName = myUser.user;
  password = myUser.pass;
}

//password validation password length
let strlen;
let input_pass;
function passLength() {
  input_pass = document.getElementById("password1").value;
  input_pass = input_pass.trim();
  document.getElementById("password1").value = input_pass;
  strlen = input_pass.length;
  console.log(strlen);
}

//password have must be 12 ab AB
let ans = function validationPassword() {
  input_pass = document.getElementById("password1").value;
  input_pass = input_pass.trim();
  document.getElementById("password1").value = input_pass;
  if (input_pass.match(/[0-9]/i)) {
    if (input_pass.match(/[a-b]/i)) {
      if (input_pass.match(/[A-Z]/i)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// processing the signup process
login.addEventListener("click", () => {
  userName = userVal.value.trim();
  let pass11 = pass1.value.trim();
  let pass21 = pass2.value.trim();

  if (ans() === false) {
    alert("password must contain a-z, A-Z, 0-9");
    return;
  } else if (strlen < 8) {
    alert("password length should be atleast 8 char");
    return;
  } else {
    if (pass11 === pass21) {
      password = pass11;
      credential = {
        user: userName,
        pass: password,
      };
      //storing data in the local storage
      localStorage.setItem("credential", JSON.stringify(credential));
      userVal.value = "";
      pass1.value = "";
      pass2.value = "";
      box1.style.display = "none";
      box2.style.display = "block";
      console.log("password is successfully added ", password);
    } else {
      alert("please make sure your both password should be same!!!");
      console.log("unmatched password");
      pass1.value = "";
      pass2.value = "";
      return;
    }
  }
});

pass2.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    login.click();
  }
});

//used to visibility on and off
v1.addEventListener("click", () => {
  if (v1.innerHTML === "visibility") {
    v1.innerHTML = "visibility_off";
    pass1.type = "text";
    console.log(v1.innerHTML);
  } else {
    v1.innerHTML = "visibility";
    pass1.type = "password";
  }
});

v2.addEventListener("click", () => {
  if (v2.innerHTML === "visibility") {
    v2.innerHTML = "visibility_off";
    pass2.type = "text";
    console.log(v2.innerHTML);
  } else {
    v2.innerHTML = "visibility";
    pass2.type = "password";
  }
});

////////////////////////////////////////////////////////
//login form
let login_user = document.getElementById("login-users");
let login_password = document.getElementById("login-password");
let login_v1 = document.getElementById("login-v1");
let login_button = document.getElementById("login-login");

login_button.addEventListener("click", () => {
  let login_userName = login_user.value.trim();
  let login_passwords = login_password.value.trim();
  if (login_userName === userName) {
    if (login_passwords === password) {
      amazon.style.display = "block";
      box2.style.display = "none";
      console.log("you are successfully login ");
    } else {
      login_password.value = "";
      alert("please fill the correct password");
      return;
    }
  } else {
    login_user.value = "";
    login_password.value = "";
  }
});

login_password.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    login_button.click();
  }
});

login_v1.addEventListener("click", () => {
  if (login_v1.innerHTML === "visibility") {
    login_v1.innerHTML = "visibility_off";
    login_password.type = "text";
    console.log(login_v1.innerHTML);
  } else {
    login_v1.innerHTML = "visibility";
    login_password.type = "password";
  }
});

/////////////////////////////////////////////////////////////////////
//changing the password
let cha_pas = document.querySelector(".cha_pas");
let change_pass_boxes = document.querySelector(".change_pass_boxes");
let cls = document.querySelector(".cls");
let oldPass = document.getElementById("oldPass");
let newPass = document.getElementById("newPass");
let change_pass_btn = document.getElementById("change_pass_btn");

cls.addEventListener("click", () => {
  change_pass_boxes.style.display = "none";
});
cha_pas.addEventListener("click", () => {
  change_pass_boxes.style.display = "flex";
  acc_set.style.display = "none";
});

change_pass_btn.addEventListener("click", () => {
  if (localStorage.getItem("credential")) {
    var myUser = JSON.parse(localStorage.getItem("credential"));

    let oPass = oldPass.value.trim();
    let nPass = newPass.value.trim();
    console.log(oPass, nPass, myUser.user);
    if (oPass === myUser.pass) {
      myUser.pass = nPass;
      console.log(myUser);
      localStorage.setItem("credential", JSON.stringify(myUser));
      location.reload();
    }
  }
});
newPass.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    change_pass_btn.click();
  }
});
