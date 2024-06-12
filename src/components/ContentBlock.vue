<template>
  <div class="content-block">
    <h2 class="content-block__header">
      {{selectedDrink.strDrink}}
    </h2>
    <div class="content-block__body">
      <div class="text-block">
        <span class="row">{{selectedDrink.strCategory}}</span>
        <span class="row">{{selectedDrink.strAlcoholic}}</span>
        <span class="row">{{selectedDrink.strGlass}}</span>

        <h4 class="row">Instructions:</h4>
        <span class="row">{{selectedDrink.strInstructions}}</span>
        
        <h4 class="row">Ingredients</h4>

        <content-block-ingredient
          :ingredients="selectedDrink.ingredients"
        />
      </div>
      <div class="img-block">
        <img :src="selectedDrink.strDrinkThumb" alt="img" />
      </div>
    </div>
    
  </div>
</template>
 
<script>
import ContentBlockIngredient from "./ContentBlockIngredient.vue";
export default {
  name: "ContentBlock",
  components: {
    ContentBlockIngredient
  },
  props: {
    drinks: Array,
    activeDrinkId: Number
  },
  computed: {
    selectedDrink() {
      return this.drinks.find(el => el.idDrink == this.activeDrinkId);
    }
  }
};
</script>

<style scoped>
.content-block {
  padding: 0.5rem;
}

.content-block__body {
  display: grid;
  grid-template-columns: 70% 30%;
}

.content-block__body .row {
  display: grid;
  grid-template-columns: 100%;
  margin: 0.8rem 0;
}

.content-block__body h4 {
  padding-top: 2rem;
}

.content-block__body .img-block img {
  width:100%;
}
</style>