document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userIndex = users.findIndex(user => user.username === username);

    if (userIndex !== -1 && users[userIndex].password === password) {
        if (users[userIndex].banned) {
            alert("Your account has been banned. Please contact the administrator.");
        } else {
            window.location.href = 'studentmain.html';
            localStorage.setItem('Key', "1");
        }
    } else {
        alert("Invalid credentials!");
        document.querySelector('#username').value = "";
        document.querySelector('#password').value = "";
    }
});