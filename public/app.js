
document.addEventListener("DOMContentLoaded",event =>{
  /*
  const app = firebase.app();
  const db = firebase.firestore();
  const myPost = db.collection(`posts`).doc(`firstpost`)
  myPost.onSnapshot(doc => {
      const data = doc.data();
      document.querySelector('#title').innerHTML = data.title;
    })
  */
  var tempRef = firebase.database().ref("temp");

  tempRef.orderByChild("Prep Time").limitToFirst(1).on("child_added", (snap) =>{
    console.log(snap.val());
  })


});

/*
function updatePost(e){
  const db = firebase.firestore();
  const myPost = db.collection('posts').doc('firstpost');
  myPost.update({title: e.target.value})
}
*/

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
      if (!keySet.has(ingredients[j])) {
        ingrdntMap[ingredients[j]] = new Set();
        ingrdntMap[ingredients[j]].add(recipes[i]);
      } else {
        ingrdntMap[ingredients[j]].add(recipes[i]);
      } 
    }
    
  }
  // ingrdntMap maps each ingredient to every recipe in the database
  //console.log(ingrdntMap);
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
