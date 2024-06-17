<script setup>
import { ref, computed } from "vue";
import { defineProps } from "vue"
import ContentBlockIngredient from "./ContentBlockIngredient.vue"

const props = defineProps({
  drinks: Array,
  selectedDrink: Object
})

const ingredients = computed(() => {
  const ingredientsNames = ref([]);
  const measure = ref([]);
    for (let key in props.selectedDrink) {
      if (key.indexOf('Ingredient') != -1 && props.selectedDrink[key]) {
        ingredientsNames.value.push(props.selectedDrink[key]);
      }
      if (key.indexOf('Measure') != -1 && props.selectedDrink[key]) {
        measure.value.push(props.selectedDrink[key]);
      }
    }
    let newIngredients = {};
    for (let index = 0; index < ingredientsNames.value.length; index++) {
      newIngredients[ingredientsNames.value[index]] = measure.value[index]; 
    }
    return newIngredients
})
</script>

<template>
  <div v-if="props.selectedDrink" class="content-block">
    <h2 class="content-block__header">
      {{props.selectedDrink.strDrink}}
    </h2>
    <div class="content-block__body">
      <div class="text-block">
        <span class="row">{{props.selectedDrink.strCategory}}</span>
        <span class="row">{{props.selectedDrink.strAlcoholic}}</span>
        <span class="row">{{props.selectedDrink.strGlass}}</span>

        <h4 class="row">Instructions:</h4>
        <span class="row">{{props.selectedDrink.strInstructions}}</span>
        <h4 class="row">Ingredients</h4>
        <content-block-ingredient
          :v-if="ingredients"
          :ingredients="ingredients"
        />
      </div>
      <div class="img-block">
        <img :src="props.selectedDrink?.strDrinkThumb" alt="img" />
      </div>
    </div>
  </div>
</template>

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