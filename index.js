var recipes = (soup.tomato);

function updateObjectWithKeyAndValue(){
var newRecipes = Object.assign({}, soup);
}

newRecipes = (salad.carrot);

function destructivelyUpdateObjectWithKeyValue(recipes, soup, tomato){
recipes(salad, carrot);
}
function deleteFromObjectByKey(object, key){
    delete newRecipes.soup; 
}

function destructivelyDeleteFromObjectByKey(){
  delete recipes.soup;
}