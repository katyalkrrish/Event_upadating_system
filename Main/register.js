let lusername = [];
let lpassword = [];

function register() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#confirm-password').value;

    
    if (!username || !password || !cpassword) {
        alert("Please fill all the fields!");
        return;
    }

    
    if (password === cpassword) {
        lusername.push(username);
        lpassword.push(password); 

        saveDatatoLocal();
        alert("User saved!");
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
  
    localStorage.setItem('uname', JSON.stringify(lusername));
    localStorage.setItem('pwd', JSON.stringify(lpassword));
}

function getUsers() {
    
    lusername = JSON.parse(localStorage.getItem('uname')) || [];
    lpassword = JSON.parse(localStorage.getItem('pwd')) || [];
}


window.onload = getUsers;
