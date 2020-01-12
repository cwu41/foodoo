
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

console.log('fire', firebase)
database = firebase.database();
var ref = database.ref('temp')
ref.once('value', gotData, errData)

function gotData(data){
  var recipes = data.val();
  for (var i = 0; i < recipes.length; i++){
    var Name = recipes[i].Name;
    var Ingredients = recipes[i].Ingredients;
    //var PrepTime = recipes[i].PrepTime;
    console.log(Name, Ingredients);
  }
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
