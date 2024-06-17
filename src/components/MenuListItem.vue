<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: Object,
  activeDrinkId: String
})

</script>

<template>
  <div
    v-if="props.item"
    class="menu__list__item"
    :class="{'active': activeDrinkId == props.item.idDrink}"
  >
    <span>{{ props.item?.strDrink }}</span>
  </div>
</template>

<style scoped>
  .menu__list__item {
    padding: 0.7rem 0.3rem;
  }
  .menu__list__item.active {
    color: #fff;
    border: 0.1rem solid #fff;
    border-right: 0.3rem solid #fff;
  }
  .menu__list__item:hover {
    cursor: pointer;
    background-color: #fff;
    color: #000;
  }
</style>