<template>
  <div
    v-for="drinkName in Object.keys(ingredients)"
    :key="drinkName"
    class="drink-item"
  >
    <span> {{ drinkName }}</span>
    <span> {{ ingredients[drinkName] }}</span>
  </div>
</template>
 
<script>
export default {
  name: "IngredientItem",
  props: ['ingredients'],
};
</script>
<style scoped>
.drink-item {
  display: grid;
  grid-template-columns: 20% 80%;
  margin: 10px 0;
}
</style>