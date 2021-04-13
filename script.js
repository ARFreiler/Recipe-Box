// Input 
var searchInput;

const recipeSuggestions = ['Asparagus', 'Bruscetta', 'Babaganoush', 'Baked Beans', 'Cabbage', 'Carrots', 'Celery', 'Chicken', 'Chimichnaga', 'Curry', 'Duck', 'Dumplings', 'Enchilada', 'Edamame', 'Fajita', 'Falafel', 'Gnocchi', 'Guacamole', 'Gumbo', 'Halibut', 'Huevos Rancheros', 'Hummus', 'Jumbalaya', 'Kabobs', 'Linguini', 'Lasagna', 'Mahimahi', 'Mackerel', 'Meatballs', 'Naan', 'Nachos', 'Nuggets', 'Oatmeal', 'Onigiri', 'Osumashi', 'Pancakes', 'Pizza', 'Polenta', 'Quesadilla', 'Quiche', 'Ramen', 'Ratatouille', 'Reuben', 'Sashimi', 'Souvlaki', 'Sushi', 'Tilapia', 'Tiramisu', 'Tofu', 'Udon', 'Umami', 'Venison', 'Vermicelli', 'Wasabi', 'Xocolatl', 'Yogurt', 'Ziti'];

var giphyApiKey = 'Nu17pPTvnHN3CycPBGJ7k9FxfSLOYlE5&q';
var recipeApiKey = 'b97299a838b54c0dbefea5c381461067';


// Event listener
$('#btn').on('click', function(event){
    event.preventDefault();
    searchInput = $("#search-input").val();
    console.log(searchInput);

    getRecipeApi(searchInput); 
    getGifApi(searchInput); 
});

// Giphy API
function getGifApi(searchInput){
    var requestGif = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}=${searchInput}`
    fetch(requestGif)
    .then(function (response){
        return response.json();
    })

    .then(function (data){
        console.log(data.data[0].images.original.url);
    })
}
// getGifApi();


// Recipe API
function getRecipeApi(searchInput){
    var requestFood = `https://api.spoonacular.com/recipes/random?number=1&tags=${searchInput}&apiKey=${recipeApiKey}`;
    fetch(requestFood)
        .then( function (response){
            return response.json();
    })
        .then(function (data){
            console.log(data.recipes[0].title)
            console.log(data.recipes[0].instructions)
            for(var i=0; i<data.recipes[0].extendedIngredients.length; i++ ){
                console.log(data.recipes[0].extendedIngredients[i].originalString);
            }
        })

     

};
// getRecipeApi();






