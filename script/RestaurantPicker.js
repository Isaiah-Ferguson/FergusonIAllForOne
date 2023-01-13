let restaurantTypeBtn = document.getElementById("restaurantTypeBtn");
let foodType = document.getElementById("foodType");
let inputReturn = document.getElementById("inputReturn");
let numberSubBtn = document.getElementById("numberSubBtn");
let asianDropdown = document.getElementById("asianDropDown");
let fastDropdown = document.getElementById("fastDropDown");
let sitdownDropdown = document.getElementById("sitdownDropDown");
let randomBtn = document.getElementById("randomBtn");
let restaurantType = "";
let foodName = "";


let savedInputOne = "";
let savedInputTwo = "";




//Asian catagory drop downs

asianDropdown.addEventListener('change', function () {
    foodType = asianDropdown.value;
    helloApi(restaurantType, foodType);
});

fastDropdown.addEventListener('change', function () {
    foodType = fastDropdown.value;
    helloApi(restaurantType, foodType);
});

sitdownDropdown.addEventListener('change', function () {
    foodType = sitdownDropdown.value;
    helloApi(restaurantType, foodType);
});



let sayHelloURL = "";

restaurantTypeBtn.addEventListener("change", function () {
    restaurantType = restaurantTypeBtn.value;
    if (restaurantType === "asian") {
        asianDropdown.classList.remove("hide");
        asianDropdown.classList.add("reveal");
        fastDropdown.classList.remove("reveal");
        sitdownDropdown.classList.remove("reveal");
        fastDropdown.classList.add("hide");
        sitdownDropdown.classList.add("hide");
        foodType = "pho";
    } else if (restaurantType === "fast") {
        fastDropdown.classList.remove("hide");
        fastDropdown.classList.add("reveal");
        sitdownDropdown.classList.remove("reveal");
        asianDropdown.classList.remove("reveal");
        sitdownDropdown.classList.add("hide");
        asianDropdown.classList.add("hide");
        foodType = "burgers";
    } else {
        sitdownDropdown.classList.remove("hide");
        sitdownDropdown.classList.add("reveal");
        asianDropdown.classList.remove("reveal");
        fastDropdown.classList.remove("reveal");
        asianDropdown.classList.add("hide");
        fastDropdown.classList.add("hide");
        foodType = "dinner";
    }
})




randomBtn.addEventListener('click', function () {
    let mainArray = ["asian", "fast", "sit down"];
    let asianArray = ["pho", "sushi"];
    let fastArray = ["burgers", "pizza"];
    let sitdownArray = ["dinner", "breakfast"];
    let num = Math.floor(Math.random() * 3);
    let numtwo = Math.floor(Math.random() * 2);

    if (num === 0) {
        restaurantType = mainArray[num];
        foodType = asianArray[numtwo];
    } else if (num === 1) {
        restaurantType = mainArray[num];
        foodType = fastArray[numtwo];
    } else {
        restaurantType = mainArray[num];
        foodType = sitdownArray[numtwo];
    }
    helloApi(restaurantType, foodType);
    console.log(num, numtwo);
    console.log(restaurantType, foodType);
});

numberSubBtn.addEventListener('click', function () {
    helloApi(restaurantType, foodType);
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



function helloApi(restaurantType, foodName) {

    if (restaurantType && foodName) {
        savedInputOne = restaurantType;
        savedInputTwo = foodType;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/RestaurantPicker/RestaurantPicker/" + savedInputOne + "/" + savedInputTwo;
        urlCall(sayHelloURL);
    } else {
        inputReturn.textContent = "Enter a Valid Response";
    }
}