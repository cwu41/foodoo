
const ref = firebase.database().ref('temp')
ref.once('value', gotData, errData)

function gotData(data){
  var recipes = data.val().zfIsIZGVBSp7mcSKzkNE;
  let ingrdntMap = {};

  for (var i = 0; i < recipes.length; i++){
    var ingredients = recipes[i].Ingredients.split(",");

    for (var j = 0; j < ingredients.length; j++) {
      var keySet = new Set(Object.keys(ingrdntMap));
      if (ingredients[j] === "") {
        break;
      }
      if (!keySet.has(ingredients[j])) {
        ingrdntMap[ingredients[j]] = new Set();
        ingrdntMap[ingredients[j]].add(recipes[i]);
      } else {
        ingrdntMap[ingredients[j]].add(recipes[i]);
      }

      //OUTPUT RECIPE
      //var li = document.createElement('li', ingrdntMap[ingredients[j]]);
      //$()
      //li.parent('recipelist');
      //$("#recipelist").append($("<li name=ingrdntMap>"+ingrdntMap[ingredients[j]]+"</li>"));

    }
}


}
// ingrdntMap maps each ingredient to every recipe in the database

console.log(ingrdntMap);
var keySet = new Set(Object.keys(ingrdntMap));
for (ingredient of keySet) {
  $("#recipelist").append($("<li name=ingrdnt>"+ingredient+"</li>"));
  for (recipe of ingrdntMap[ingredient]) {
    $("#recipelist").append($("<li name=ingrdntMap>  "+recipe.Name+"</li>"));
  }
  $("#recipelist").append($("<br>"));
}

//console.log(ingrdntMap);
console.log(Object.keys(ingrdntMap))

}