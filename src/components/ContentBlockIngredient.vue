<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  ingredients: Object
})
</script>

<template>
  <div
    v-for="(value, name) in props.ingredients"
    :key="value"
    class="ingredient-item"
  >
    <span> {{ name }}</span>
    <span> {{ value }}</span>
  </div>
</template>

<style scoped>
.ingredient-item {
  display: grid;
  grid-template-columns: 20% 80%;
  margin: 0.6rem 0;
}
</style>