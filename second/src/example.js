/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {ingredients: new Set()};
    this.options = ingredientList.map(option => {
      const firstLetter = option.title[0].toUpperCase();
      return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
      };
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // VALUE IS THE INPUT, DONT DELETE VALUE AS A PARAM
  handleChange(event, value) {
    this.props.onIngredientChange(event, value);
  }

  handleSubmit(event) {
    this.props.onIngredientSubmit(event);
    event.preventDefault();
  }

  render() {
    // const ingredients = this.props.ingredients;
    return (
      <form onSubmit={this.handleSubmit}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={this.options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={option => option.firstLetter}
          getOptionLabel={option => option.title}
          filterSelectedOptions
          onChange={this.handleChange}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Choose Ingredients"
              placeholder="Beef"
              fullWidth
            />
          )}
        />
        <br></br>
        <Button type="submit" variant="contained" color="primary" disableElevation>
          Get Recipes!
        </Button>
      </form>
    );
  }
}

export default IngredientForm;


const ingredientList = [
  { title: 'Chicken'},
  { title: 'Kielbasa'},
  { title: 'Noodles'},
  { title: 'Sausage'},
  { title: 'Milk'},
  { title: 'Eggs'},
  { title: 'Corn Meal'},
  { title: 'Vegetarian'},
  { title: 'Potatoes'},
  { title: 'Rice'},
  { title: 'Beans'},
  { title: 'Marinara Sauce'},
  { title: 'Cheese'},
  { title: 'Beef'},
  { title: 'Pork'},
  { title: 'Ham'},
  { title: 'Bacon'},
  { title: 'Turkey'},
  { title: 'Beets'},
  { title: 'Breadcrumbs'},
  { title: 'Lentils'},
  { title: 'Carrots'},
  { title: 'Onion'},
  { title: 'Buckwheat'},
  { title: 'Flour'},
  { title: 'Yeast'},
  { title: 'Peas'},
  { title: 'Apple'},
  { title: 'Tomatoes'},
  { title: 'Fish'},
  { title: 'Yogurt'},
  { title: 'Butter'},
  { title: 'Sour Cream'},
  { title: 'Parsnips'},
  { title: 'Chocolate Chips'},
  { title: 'Chickpeas'},
  { title: 'Coconut milk'},
  { title: 'Broccoli'},
  { title: 'Asparagus'},
  { title: 'Quinoa'},
  { title: 'Brussels Sprouts'},
  { title: 'Sweet Potato'},
  { title: 'Cabbage'},
  { title: 'Peanut'},
  { title: 'Orzo'},
  { title: 'Spinach'},
  { title: 'Salmon'},
  { title: 'Chia'},
  { title: 'Tomatillo'},
  { title: 'Lime'},
  { title: 'Garlic'},
  { title: 'Squash'},
  { title: 'Cilantro'},
  { title: 'Wine'},
  { title: 'Soy Sauce'},
  { title: 'Dijon Mustard'},
  { title: 'Ginger'},
  { title: 'Mango'},
  { title: 'Raisins'},
  { title: 'Bell Pepper'},
  { title: 'Jalopeno Pepper'},
  { title: 'celery'},
  { title: 'Baking Powder'},
  { title: 'gnocchi'},
  { title: 'Water chestnuts'},
  { title: 'Tuna'},
  { title: 'Capers'},
  { title: 'Adobo Chile'},
  { title: 'Basil'},
  { title: 'Kale'},
  { title: 'Red onion'},
  { title: 'Sardine'},
  { title: 'Shallots'},
  { title: 'Lemon'},
  { title: 'Parsley'},
  { title: 'Prosciutto'},
  { title: 'Cucumber'},
  { title: 'Dill'},
  { title: 'Couscous'},
  { title: 'Green Onion'},
  { title: 'Tilapia'},
  { title: 'Pesto'},
];

