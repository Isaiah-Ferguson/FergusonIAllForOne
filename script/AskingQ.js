let nameInput = document.getElementById("nameInput");
let yesOrNo = document.getElementById("yesOrNo");
let inputReturn = document.getElementById("inputReturn");
let numberSubBtn = document.getElementById("numberSubBtn");

let savedInputOne = "";
let savedInputTwo = "";


let sayHelloURL = "";

numberSubBtn.addEventListener('click', function () {
    helloApi(nameInput, yesOrNo);

});

yesOrNo.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApi(nameInput, yesOrNo);
    }

});

nameInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApi(nameInput, yesOrNo);
    }

});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            inputReturn.textContent = data;
        }
    )
}

function helloApi(nameInput) {
    var letters = /^[A-Za-z]+$/;
    if (nameInput.value.match(letters)) {
        savedInputOne = nameInput.value;
        savedInputTwo = yesOrNo.value;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/AskingQuestion/Question/" + savedInputOne + "/" + savedInputTwo;
        urlCall(sayHelloURL);
    } else {
        helloReturn.textContent = "Enter a Valid Response";
    }
}