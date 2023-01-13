let animeTitle = document.getElementById("animeTitle");
let celebrity = document.getElementById("celebrity");
let shoe = document.getElementById("shoe");
let adj = document.getElementById("adj");
let shoeSize = document.getElementById("shoeSize");
let emotion = document.getElementById("emotion");
let restaurant = document.getElementById("restaurant");
let food = document.getElementById("food");
let animeCharacter = document.getElementById("animeCharacter");
let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let MadLibRetrun = document.getElementById("MadLibRetrun");
let helloSubBtn = document.getElementById("helloSubBtn");

let savedAnimeCharacter = "";
let savedCelebrity = "";
let savedShoe = "";
let savedAdj = "";
let savedShoeSize = "";
let savedEmotion = "";
let savedRestaurant = "";
let savedFood = "";
let savedAnimeTitle = "";
let savedNumOne = "";
let savedNumTwo = "";
let sayHelloURL = "";

helloSubBtn.addEventListener('click', function () {
    helloApi(animeTitle, celebrity, shoe, adj, shoeSize, emotion, restaurant, food, animeCharacter, numOne, numTwo)
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            MadLibRetrun.textContent = data
            console.log(data);
        }
    )
}

function helloApi(nameInput) {
    var characters = /^[A-Za-z0-9]+$/;
    if (nameInput.value.match(characters)) {
        savedAnimeTitle = animeTitle.value;
        savedCelebrity = celebrity.value;
        savedShoe = shoe.value;
        savedAdj = adj.value;
        savedShoeSize = shoeSize.value;
        savedEmotion = emotion.value;
        savedRestaurant = restaurant.value;
        savedFood = food.value;
        savedAnimeCharacter = animeCharacter.value;
        savedNumOne = numOne.value;
        savedNumTwo = numTwo.value;
        sayHelloURL = "https://azuredemotestisaiah.azurewebsites.net/MadLib/MadLibs/" + savedAnimeTitle + "/" + savedAdj + "/" + savedShoeSize + "/" + savedEmotion + "/" + savedFood + "/" + savedRestaurant + "/" + savedCelebrity + "/" + savedAnimeCharacter + "/" + savedShoe + "/" + savedNumOne + "/" + savedNumTwo;
        urlCall(sayHelloURL);
    } else {
        MadLibRetrun.textContent = "Enter a Valid Response";
    }
}