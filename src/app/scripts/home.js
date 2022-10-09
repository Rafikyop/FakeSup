const userRaw = localStorage.getItem("user");
console.log("Carlos Me da;o el trabajo XD");
let user;

const validationSession = () => {
  if (!userRaw) {
    location.href = "http://127.0.0.1:5500/src/home.html";
  } else {
    user = JSON.parse(userRaw);
  }
};

validationSession();

const handleCloseSession = () => {
  localStorage.clear();
  location.href = "http://127.0.0.1:5500/src/index.html";
};

const btnCloseSession = document.getElementById("btnCloseSession");

btnCloseSession.addEventListener("click", handleCloseSession);

const textUserName = document.getElementById("nameUser");

textUserName.innerHTML += ` ${user.name}`;
