let NumOne = document.getElementById("NumOne");
let NumTwo = document.getElementById("NumTwo");
let numberReturn = document.getElementById("numberReturn");
let numberSubBtn = document.getElementById("numberSubBtn");


//Variables we will be saving our input values too.
let savedNumOne = "";
let savedNumTwo = "";
let sayHelloURL = "";

// 1st Key Press function that calls our *hellApi* function
NumOne.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApi(NumOne, NumTwo);
    }
});

// 2nd Key Press function that calls our *hellApi* function
NumTwo.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        helloApi(NumOne, NumTwo);
    }
});

// The submit button if the user doesn't press down enter on the keyboard after fill out the input forms.
numberSubBtn.addEventListener('click', function () {
    helloApi(NumOne, NumTwo);
});

// our fetch function that fetches the data in text format
function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            numberReturn.textContent = data;
        }
    )
}

// our helloApi function that 
function helloApi(nameInput) {
    savedNumOne = NumOne.value;
    savedNumTwo = NumTwo.value;
    sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/AddingNumbers/Adding/" + savedNumOne + "/" + savedNumTwo;
    urlCall(sayHelloURL);

}