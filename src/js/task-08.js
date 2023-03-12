const formEl = document.querySelector(".login-form");
console.log(formEl);
formEl.addEventListener("submit", checkSubmit);
function checkSubmit(event) {
    event.preventDefault();
   const {
    elements: { email, password }
    } = event.currentTarget; 
    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }
    const result = {
        [email.name] : email.value,
        [password.name] : password.value,
    };
    console.log(result);
    event.currentTarget.reset();
};
//++++++++++++++++Variant 2++++++ result is Global object +++++++++++++++
/*const formEl = document.querySelector(".login-form");
console.log(formEl);
const result = {};
formEl.addEventListener("submit", checkSubmit);
function checkSubmit(event) {
    event.preventDefault();
   const {
    elements: { email, password }
    } = event.currentTarget; 
    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    result[email.name] = email.value;
    result[password.name] = password.value;
    event.currentTarget.reset();
};
console.log(result)*/