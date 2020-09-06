var recipes = (soup.tomato);

var newRecipes = Object.assign({}, soup);

newRecipes = (salad.carrot);

function destructivelyUpdateObjectWithKeyValue(recipes, soup, tomato){
recipes(salad, carrot);
}