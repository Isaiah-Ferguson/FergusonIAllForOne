let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let slackName = document.getElementById("slackName");
let email = document.getElementById("email");
let injectHere = document.getElementById("injectHere");
let studentDirectoryBtn = document.getElementById("studentDirectoryBtn");
let studentNames = ["Isaiah", "Kent", "Jessie", "Andrea", "Daniel", "Pedro", "Jeremy", "Jacob", "Kenneth", "Fernando", "Jovann", "Andrew", "N. Harrison", "Madeline", "Manuel", "Elizar", "Mark", "Chris", "Samuel", "John", "Reed", "Amar", "Marcel", "Richard", "Ulises", "Caroline", "Aisha", "Shaun", "Griffin"];
let num = studentNames.length;
let nameDropDown = document.getElementById("nameDropDown");
let randomBtn = document.getElementById("randomBtn");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let SlackName = document.getElementById("SlackName");
let Email = document.getElementById("Email");
let Hobbies = document.getElementById("Hobbies");

let arrayNum = studentNames[Math.floor(Math.random() * num)]

let savedName = ""
let sayHelloURL = "";
let randomName = "";
let selectedName = ""

firstName.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApi(firstName);
    }
});

lastName.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        LastNameApi(lastName);
    }
});

email.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        EmailApi(email);
    }
});

slackName.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        SlackNameApi(slackName);
    }
});

nameDropDown.addEventListener('change', function () {
    selectedName = this.value;
    helloApiThree(selectedName);
})

studentDirectoryBtn.addEventListener('click', function () {
    if (firstName.value.match(/[a-zA-Z]/)) {
        helloApi(firstName);
    }else if(lastName.value.match(/[a-zA-Z]/)){
        LastNameApi(lastName)
    }else if (slackName.value.match(/[a-zA-Z]/)) {
        SlackNameApi(slackName);
    }else{ EmailApi(email);}
});

randomBtn.addEventListener('click', function () {
    randomName = studentNames[Math.floor(Math.random() * num)]
    helloApiTwo(randomName);
    console.log(randomName);
});

function urlCall(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            FirstName.textContent = "First Name: " + data.firstName;
            LastName.textContent = "Last Name: " + data.lastName;
            SlackName.textContent = "Slack Name: " + data.slackName;
            Email.textContent = "Email: " + data.email;
            Hobbies.textContent = data.hobbies;
        }
    )
}

function helloApi(nameInput) {
    var letters = /^[A-Za-z]+$/;
    if (nameInput.value.match(letters)) {
        savedName = firstName.value;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/StudentDirectory/GetSTudentByFirstName/" + savedName;
        urlCall(sayHelloURL);
    } else {
        injectHere.textContent = "Enter a Valid Response";
    }
}
function helloApiTwo(randomName) {

    if (randomName) {
        savedName = randomName;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/StudentDirectory/GetSTudentByFirstName/" + savedName;
        urlCall(sayHelloURL);
    } else {
        injectHere.textContent = "Enter a Valid Response";
    }
}

function helloApiThree(randomName) {

    if (selectedName) {
        savedName = selectedName;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/StudentDirectory/GetSTudentByFirstName/" + savedName;
        urlCall(sayHelloURL);
    } else {
        injectHere.textContent = "Enter a Valid Response";
    }
}


function LastNameApi(nameInput) {
    var letters = /^[A-Za-z-]+$/;
    if (nameInput.value.match(letters)) {
        savedName = lastName.value;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/StudentDirectory/GetSTudentByLastName/" + savedName;
        urlCall(sayHelloURL);
    } else {
        injectHere.textContent = "Enter a Valid Response";
    }
}

function EmailApi(nameInput) {
    savedName = email.value;
    sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/StudentDirectory/GetSTudentByEmail/" + savedName;
    urlCall(sayHelloURL);
}

function SlackNameApi(nameInput) {
    savedName = slackName.value;
    sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/StudentDirectory/GetSTudentBySlackName/" + savedName;
    urlCall(sayHelloURL);
}

//Jeremy Helped Me :)