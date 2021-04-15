//  Input 
var searchInput;

const recipeSuggestions = ['Asparagus', 'Bruscetta', 'Babaganoush', 'Baked Beans', 'Cabbage', 'Carrots', 'Celery', 'Chicken', 'Chimichnaga', 'Curry', 'Duck', 'Dumplings', 'Enchilada', 'Edamame', 'Fajita', 'Falafel', 'Gnocchi', 'Guacamole', 'Gumbo', 'Halibut', 'Huevos Rancheros', 'Hummus', 'Jumbalaya', 'Kabobs', 'Linguini', 'Lasagna', 'Mahimahi', 'Mackerel', 'Meatballs', 'Naan', 'Nachos', 'Nuggets', 'Oatmeal', 'Onigiri', 'Osumashi', 'Pancakes', 'Pizza', 'Polenta', 'Quesadilla', 'Quiche', 'Ramen', 'Ratatouille', 'Reuben', 'Sashimi', 'Souvlaki', 'Sushi', 'Tilapia', 'Tiramisu', 'Tofu', 'Udon', 'Umami', 'Venison', 'Vermicelli', 'Wasabi', 'Xocolatl', 'Yogurt', 'Ziti'];

var giphyApiKey = 'Nu17pPTvnHN3CycPBGJ7k9FxfSLOYlE5&q';
var recipeApiKey = 'a9fa952927f248ee87d292041c30840d';

// list of Recipe API we can use 
// 'b97299a838b54c0dbefea5c381461067';


// Giphy API
function getGifApi(searchInput){
    
    
    var requestGif = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}=${searchInput}`
    fetch(requestGif)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            var imgCard = document.getElementById('img-card');
            imgCard.innerHTML = '';

            var giphyImg = document.createElement('img');
            var randomizer = Math.floor(Math.random() * 40);

            giphyImg.setAttribute('src', data.data[randomizer].images.original.url)
            imgCard.appendChild(giphyImg);
        })
}


// Recipe API
function getRecipeApi(searchInput){
    var requestFood = `https://api.spoonacular.com/recipes/random?number=1&tags=${searchInput}&apiKey=${recipeApiKey}`
    fetch(requestFood)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            // recipe title
            var titleCard = document.getElementById('title-card');
            var title = document.getElementById('title');
            title.textContent = data.recipes[0].title;
            titleCard.appendChild(title);

            // recipe instructions
            console.log(data.recipes[0].instructions);
            var recipeCard = document.getElementById('recipe-card');
            var instructions = document.getElementById('instructions');
            instructions.innerHTML = data.recipes[0].instructions;
            recipeCard.appendChild(instructions);

            var ingredients = document.getElementById('ingredients');
            ingredients.innerHTML = '';
            for(var i=0; i<data.recipes[0].extendedIngredients.length; i++ ){
            // recipe ingredients
                var li = document.createElement('li');
                li.textContent = data.recipes[0].extendedIngredients[i].originalString;
                ingredients.appendChild(li);
            }
        })
};

// Event listener
$('#btn').on('click', function(event){
    event.preventDefault();
    searchInput = $("#search-input").val();
    document.getElementById('display').style.display = 'block';

    getRecipeApi(searchInput); 
    getGifApi(searchInput); 
});

