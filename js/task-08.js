const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('Все поля должны быть заполнены')
    };

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log(name, value)
    })

    //     const userEmail = event.currentTarget.elements.email.value;
    //     const userPass = event.currentTarget.elements.password.value;
 
    //     const userData = {
    //     userEmail,
    //     userPass,
    //   };
    //     console.log(userData)

    event.currentTarget.reset();
}
