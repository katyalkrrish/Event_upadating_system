document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    let lusername = JSON.parse(localStorage.getItem('uname')) || [];
    let lpassword = JSON.parse(localStorage.getItem('pwd')) || [];

    let userIndex = lusername.indexOf(username);

    if (userIndex !== -1 && lpassword[userIndex] === password) {
        window.location.href = 'facultymain.html';  
        localStorage.setItem('Key', "1");
    } else {
        alert("Invalid credentials!");
        document.querySelector('#username').value = "";
        document.querySelector('#password').value = "";
    }
});

