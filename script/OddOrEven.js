let NumOne = document.getElementById("NumOne");
let numberReturn = document.getElementById("numberReturn");
let numberSubBtn = document.getElementById("numberSubBtn");

let savedNumOne = "";
let sayHelloURL = "";

numberSubBtn.addEventListener('click', function () {
    helloApi(NumOne);
});


NumOne.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApi(NumOne);
    }

});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            numberReturn.textContent = data;
        }
    )
}

function helloApi(nameInput) {
    var nums = /^[0-9]+$/;
    if (nameInput.value.match(nums)) {
        savedNumOne = NumOne.value;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/OddOrEven/OddOrEven/" + savedNumOne;
        urlCall(sayHelloURL);
    } else {
        numberReturn.textContent = "Enter a Valid Response";
    }
}