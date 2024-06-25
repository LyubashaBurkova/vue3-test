<script setup>
import { useAsyncState } from "@vueuse/core";
import axios from 'axios'
import { useDrinkStore } from '@/stores/drinks'
import MenuList from '@/components/MenuList.vue'
import ContentBlock from '@/components/ContentBlock.vue';

const drinkStore = useDrinkStore()

const { state } = useAsyncState(
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(response => response.data),
  "loading...",
  {
    onError: (e) => {
      console.error("Ошибка!", e);
      state.value = "fallback";
    },
  }
);

function setActive(id) {
  drinkStore.setActiveId(id)
}
</script>

<template>
  <div v-if="state && state.drinks && state.drinks.length" class="home-page container">
    <menu-list
      :drinks="state.drinks"
      @set-active="setActive"
    />
    <content-block
      :drinks="state.drinks"
      :selected-drink="state.drinks.find(el => el?.idDrink == drinkStore.activeDrinkId)"
    />
  </div>
</template>

<style scoped>
.home-page.container {
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 0;
}
</style>