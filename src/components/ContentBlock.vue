<template>
  <div class="content-block">
    <h2 class="">
      {{drinks[0].strDrink}}
    </h2>
    <div class="container">
      <div class="text-block">
        <span class="row">{{drinks[activeDrinkIndex].strCategory}}</span>
        <span class="row">{{drinks[activeDrinkIndex].strAlcoholic}}</span>
        <span class="row">{{drinks[activeDrinkIndex].strGlass}}</span>

        <h4 class="row">Instructions:</h4>
        <span class="row">{{drinks[activeDrinkIndex].strInstructions}}</span>
        
        <h4 class="row">Ингридиенты</h4>

        <ingredient-item
          :ingredients="drinks[activeDrinkIndex].ingredients"
        />
      </div>
      <div class="img-block">
        <img :src="drinks[activeDrinkIndex].strImageSource" alt="Картинка напитка">
      </div>
    </div>
    
  </div>
</template>
 
<script>
import IngredientItem from "./IngredientItem.vue";
export default {
  name: "ContentBlock",
  components: {
    IngredientItem
  },
  props: ['drinks'],
  data() {
    return {
      activeDrinkIndex: 0,
    }
  }
};
</script>

<style>
.content-block {
  padding: 20px;
}

.container {
  display: grid;
  grid-template-columns: 70% 30%;
}

.row {
  display: grid;
  grid-template-columns: 100%;
  margin: 10px 0;
}
</style>