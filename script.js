var searchInput = 'cheeseburger';
var giphyApiKey = 'Nu17pPTvnHN3CycPBGJ7k9FxfSLOYlE5&q';
var requestGif = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '=' + searchInput;

var recipeApiKey = 'b97299a838b54c0dbefea5c381461067';
var requestFood = 'https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=' + recipeApiKey;

function getGifApi(){
    fetch(requestGif)
    .then(function (response){
        return response.json();
    })

    .then(function (data){
        console.log(data.data[0].images.original.url);
    })
}

getGifApi();

function getRecipeApi(){
    fetch(requestFood)
        .then( function (response){
            return response.json();
    })
        .then(function (data){
            console.log(data.recipes[0].instructions)
        })



};

getRecipeApi();