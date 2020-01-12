import React from 'react';
import IngredientForm from './example';
import * as Firebase from 'firebase';

const header = new Headers();
header.append('Access-Control-Allow-Origin', '*');

const firebaseConfig = {
    apiKey: "AIzaSyC6fiemjMHEvvHG37NeorbUsZX1eBumA18",
    authDomain: "foodoo-project.firebaseapp.com",
    databaseURL: "https://foodoo-project.firebaseio.com",
    projectId: "foodoo-project",
    storageBucket: "foodoo-project.appspot.com",
    messagingSenderId: "256411486158",
    appId: "1:256411486158:web:eb4ddbd4b971d27687cd9f",
    measurementId: "G-QBBT57PHNX"
};


class FirebaseApp extends React.Component {
  constructor(props){
    super(props);
    Firebase.initializeApp(firebaseConfig);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleIngredientSubmit = this.handleIngredientSubmit.bind(this);

    this.state = { ingredients: new Set(), recipes: new Set() };
    
    // console.log("constructor state", this.state);
    localStorage.removeItem('firebase:previous_websocket_failure');
  }

  gotData(data, state) {
    var recipes = data.val().zfIsIZGVBSp7mcSKzkNE;
    let ingrdntMap = {};
    // console.log("gotData state arg",state)

    // console.log("gotData state", this.state)

    // console.log("gotData ingredient set", this.state.ingredients)
    for (var i = 0; i < recipes.length; i++){
        var ingredients = recipes[i].Ingredients.split(",");
        // console.log(ingredients);
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
        }
    }
    console.log(ingrdntMap);
    var ingredientSet = this.state.ingredients;
    var count = 1;
    for (var ingredient of ingredientSet) {
        console.log(ingredient, '*');
        for (var recipe of ingrdntMap[ingredient]) {
            console.log(count++, recipe.Name);
        }
    }
  }

  errData(err){
    console.log('Error! himomb');
    console.log(err);
  }

  handleIngredientChange(event, value) {
    console.log("value from handleChange", value);
    for (var ingredient of value) {
      this.state.ingredients.add(ingredient.title);
    }
    console.log("ingredients in IngredientChange", this.state.ingredients);
  }

  handleIngredientSubmit(event) {
    console.log("state: ", this.state);
    console.log("state.ingredients: ", this.state.ingredients);
    const ref = Firebase.database().ref('temp')
    ref.once('value', snapshot => (this.gotData(snapshot, this.state)), this.errData)
    
    event.preventDefault();
  }

  render() {
    return(
        <IngredientForm 
            onIngredientChange={this.handleIngredientChange}
            onIngredientSubmit={this.handleIngredientSubmit}/>

    )
  }
}

export default FirebaseApp;



