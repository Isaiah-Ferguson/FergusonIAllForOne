let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("helloSubBtn");

let savedInput = "";
let sayHelloURL = "";

helloSubBtn.addEventListener('click', function () {
    helloApit(nameInput)
});

nameInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApit(nameInput)
    }
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data
            console.log(data);
        }
    )
}

function helloApit(nameInput) {
    var letters = /^[A-Za-z]+$/;
    if (nameInput.value.match(letters)) {
        savedInput = nameInput.value;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/SayHello/Hello/" + savedInput;
        urlCall(sayHelloURL);
    } else {
        helloReturn.textContent = "Enter a Valid Response";
    }
}