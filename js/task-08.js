const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
    event.preventDefault();
   const {
    elements: { email, password }
    } = event.currentTarget; 
    if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
    }
    const result = {
        [email.name] : email.value.trim(),
        [password.name] : password.value.trim(),
    };
    console.log(result);
    event.currentTarget.reset();
};

//++++++++++++++++Variant 2++++++ result is Global object +++++++++++++++
/*const formEl = document.querySelector(".login-form");

const result = {};
formEl.addEventListener("submit", checkSubmit);
function checkSubmit(event) {
    event.preventDefault();
   const {
    elements: { email, password }
    } = event.currentTarget; 
    if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }
    result[email.name] = email.value.trim();
    result[password.name] = password.value.trim();
    event.currentTarget.reset();
};
console.log(result)*/