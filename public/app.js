let ingredients = [];

const addIngredient = (ev)=>{
  ev.preventDefault();
  let ingrdnt = {
    id: Date.now(),
    title: document.getElementById('title').value
  }
  ingredients.push(ingrdnt);
  document.forms[0].reset();

  console.warn('added' , {ingredients} );
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(ingredients, '\t', 2);

}

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById('btn').addEventListener('click', addIngredient);

  /*
  const app = firebase.app();
  const db = firebase.firestore();
  const myPost = db.collection(`posts`).doc(`firstpost`)
  myPost.onSnapshot(doc => {
      const data = doc.data();
      document.querySelector('#title').innerHTML = data.title;
    })
  */
  //var tempRef = firebase.database().ref("temp");

  //tempRef.orderByChild("Prep Time").limitToFirst(1).on("child_added", (snap) =>{
  //  console.log(snap.val());
  //})
});



//console.log('fire', firebase)
database = firebase.database();
var ref = database.ref('temp')
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

function errData(err){
  console.log('Error! himomb');
  console.log(err);
}

/*
function googleLogin(){
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
      console.log(user);
    })
    .catch(console.log)
}
*/
