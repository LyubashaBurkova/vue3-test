<template>
  <div
    v-for="drinkName in Object.keys(ingredients)"
    :key="drinkName"
    class="ingredient-item"
  >
    <span> {{ drinkName }}</span>
    <span> {{ ingredients[drinkName] }}</span>
  </div>
</template>
 
<script>
export default {
  name: "ContentBlockIngredient",
  props: {
    ingredients: Object
  }
};
</script>
<style scoped>
.ingredient-item {
  display: grid;
  grid-template-columns: 20% 80%;
  margin: 0.6rem 0;
}
</style>