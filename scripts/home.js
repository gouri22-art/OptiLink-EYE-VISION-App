var slideImages = [
    "https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif",
    "https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif",
    "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
    "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
    "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/hooper-eye-web.jpg",
    "https://static1.lenskart.com/media/desktop/img/Nov22/trans1.gif",
    "https://static1.lenskart.com/media/desktop/img/Feb23/style/home/B1G1%20OFFER%20-%20WEB.jpg",
    "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/marble/web.gif"
];

window.addEventListener("load", function () {
    let div = document.getElementById("slideImages");
    let Img = document.createElement("img");
    Img.setAttribute("class", "Image");
    var i = 0;
    Img.src = slideImages[i];

    setInterval(function () {
        if (i < slideImages.length - 1) {
            i++;
            Img.src = slideImages[i];
        } else {
            i = 0;
            Img.src = slideImages[i];
        }
    }, 5000);

    div.append(Img);
    div.setAttribute("class", "SlideShowDiv");
    Img.setAttribute("class", "SlideShowImage");
});

// Sign In Modal
var SignInModal = document.getElementById("signInModal");
var SignInAnchor = document.getElementById("SignIn");
var spanIn = document.getElementsByClassName("close-in")[0];

SignInAnchor.onclick = function () {
    SignInModal.style.display = "block";
}

spanIn.onclick = function () {
    SignInModal.style.display = "none";
}

window.onclick = function (event) {
    event.preventDefault()
    if (event.target == SignInModal) {
        SignInModal.style.display = "none";
    }
}

// Sign Up Modal
var SignUpModal = document.getElementById("signUpModal");
var SignUpAnchor = document.getElementById("SignUp");
var spanUp = document.getElementsByClassName("close-up")[0];

SignUpAnchor.onclick = function () {
    SignUpModal.style.display = "block";
}

spanUp.onclick = function () {
    SignUpModal.style.display = "none";
}

window.onclick = function (event) {
    event.preventDefault()
    if (event.target == SignUpModal) {
        SignUpModal.style.display = "none";
    }
}

// Elements for SignUp
let Name = document.getElementById("name");
let Email = document.getElementById("email");
let Mobile = document.getElementById("mobile-number");
let Password = document.getElementById("password");
let CreateAccocunt = document.getElementById("create-account");

// Elements for SignIn
let SignInMobile = document.getElementById("Mobile-Number");
let SignInPassword = document.getElementById("Password");

// SignUp Logic
CreateAccocunt.addEventListener("click", () => {
    let name = Name.value;
    let email = Email.value;
    let mobile = Mobile.value;
    let password = Password.value;

    if (name !== "" && email !== "" && mobile !== "" && password !== "") {
        let newCustomer = { name, email, mobile, password };

        // Send data to JSON Server
        fetch(" https://beryl-ember-havarti.glitch.me/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCustomer)
        })
        .then(response => response.json())
        .then(data => {
            alert("Signed up successfully");
            window.location = "product.html";
        })
        .catch(error => {
            console.error("Error during signup:", error);
            alert("Something went wrong, please try again.");
        });
    } else {
        alert("Please fill all the details!");
    }
});

// SignIn Logic
let SignInBtn = document.getElementById("login");

SignInBtn.addEventListener("click", () => {
    let mobile = SignInMobile.value;
    let password = SignInPassword.value;

    // Validate user credentials
    fetch(" http://localhost:3000/customers")
        .then(response => response.json())
        .then(customers => {
            let userFound = customers.find(customer => customer.mobile === mobile && customer.password === password);
            if (userFound) {
                alert("You have signed in successfully");
                window.location = "product.html";
                SignInMobile.value = "";
                SignInPassword.value = "";
            } else {
                alert("Make sure you have an account or check your credentials!");
            }
        })
        .catch(error => {
            console.error("Error during sign-in:", error);
            alert("Something went wrong, please try again.");
        });
});
