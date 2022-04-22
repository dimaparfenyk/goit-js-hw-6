const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget.elements;

    if (form.email.value === "" || form.password.value === "") {
        return alert('Все поля должны быть заполнены')
    };

        const userEmail = event.currentTarget.elements.email.value;
        const userPass = event.currentTarget.elements.password.value;
 
        const userData = {
        userEmail,
        userPass,
      };
        console.log(userData)

    event.currentTarget.reset();
}
