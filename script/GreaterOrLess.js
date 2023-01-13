let NumOne = document.getElementById("NumOne");
let NumTwo = document.getElementById("NumTwo");
let numberReturn = document.getElementById("numberReturn");
let numberSubBtn = document.getElementById("numberSubBtn");


let savedNumOne = "";
let savedNumTwo = "";


let sayHelloURL = "";

numberSubBtn.addEventListener('click', function () {
    helloApi(NumOne, NumTwo);
});

NumTwo.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApi(NumOne, NumTwo);
    }

});

NumOne.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApi(NumOne, NumTwo);
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
    var nums = /^\d+$/;
    if (nameInput.value.match(nums)) {
        savedNumOne = NumOne.value;
        savedNumTwo = NumTwo.value;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/GreaterThanLessThan/GreaterThanorLessThan/" + savedNumOne + "/" + savedNumTwo;
        urlCall(sayHelloURL);
    } else {
        numberReturn.textContent = "Enter a Valid Response";
    }
}