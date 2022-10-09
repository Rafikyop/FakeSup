const URL_API = "https://chatappdata-production.up.railway.app/";

class UI {
  constructor(targetID) {
    this.target = document.getElementById(targetID);
  }

  getValue() {
    return this.target.value;
  }

  get getItem() {
    return this.target;
  }
}

const phone = new UI("phone");
const password = new UI("password");
const form = new UI("form__login");
console.log(form.getItem);

const handleSubmit = async (e) => {
  e.preventDefault();
  //new object from values
  const user = {
    phone: phone.getValue(),
    password: password.getValue(),
  };
  //validations
  for (const key in user) {
    const element = user[key];
    if (element === "") {
      alert(`Falta llenar el campo ${key}`);
      return;
    }
  }
  //send to back
  try {
    let response = await axios.get(
      `${URL_API}users?phone=${user.phone}&password=${user.password}`
    );
    if (response.status === 200) {
      if (response.data.length) {
        //save localStorage session
        localStorage.setItem("user", JSON.stringify(response.data[0]));

        location.href = "http://127.0.0.1:5500/src/home.html";
      } else {
        Swal.fire("Oops!", "Usuario o contraseña incorrecta!", "error");
      }
    }
  } catch (error) {
    console.log(error);
    Swal.fire("Oops!", "Se ha presentado un error!", "error");
  }
};

const validationSession = () => {
  const user = localStorage.getItem("user");
  if (user) {
    location.href = "http://127.0.0.1:5500/src/home.html";
  }
};

// validationSession();

form.getItem.addEventListener("submit", (e) => {
  handleSubmit(e);
});
