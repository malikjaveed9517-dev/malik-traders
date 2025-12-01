// SIGNUP
function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Fill all fields!");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password,
        balance: 10000   // demo money
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created!");
    window.location.href = "index.html";
}

// LOGIN
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No account found. Signup first!");
        return;
    }

    if (email === user.email && password === user.password) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect email or password");
    }
}

// DASHBOARD LOAD
function loadDashboard() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    document.getElementById("username").innerHTML = user.name;
    document.getElementById("balance").innerHTML = user.balance;
}

// INVEST
function invest(amount, profitPercent) {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user.balance < amount) {
        document.getElementById("message").innerHTML = "Not enough balance!";
        return;
    }

    user.balance -= amount;

    let profit = (amount * profitPercent) / 100;
    user.balance += profit;

    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("message").innerHTML = 
        "Investment successful! You earned PKR " + profit;

    document.getElementById("balance").innerHTML = user.balance;
}

