let users = [];

function register() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#confirm-password').value;

    if (!username || !password || !cpassword) {
        alert("Please fill all the fields!");
        return;
    }

    if (password === cpassword) {
        let newUser = { username: username, password: password, banned: false };
        users.push(newUser);
        saveDatatoLocal();
        alert("User saved!");
        clearFields();
    } else {
        alert("Passwords do not match. Try again.");
        clearFields();
    }
}

function clearFields() {
    document.querySelector('#username').value = "";
    document.querySelector('#password').value = "";
    document.querySelector('#confirm-password').value = "";
}

function saveDatatoLocal() {
    localStorage.setItem('users', JSON.stringify(users));
}

function getUsers() {
    users = JSON.parse(localStorage.getItem('users')) || [];
}

window.onload = getUsers;