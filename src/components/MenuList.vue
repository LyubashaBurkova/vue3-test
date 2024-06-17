<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import MenuListItem from '@/components/MenuListItem.vue'

const props = defineProps({
  drinks: Array
})

const activeDrinkId = ref("11007");

const emit = defineEmits(["set-active"])

function setActive(item) {
  activeDrinkId.value = item.idDrink;
  emit('set-active', item.idDrink);
}
</script>

<template>
  <div class="menu">
    <img src="https://www.thecocktaildb.com/images/logo.png" />
    <div class="menu__list">
      <menu-list-item
        v-for="item in props.drinks"
        :key="item.idDrink"
        :item="item"
        :active-drink-id="activeDrinkId"
        @click="setActive(item)"
      />
    </div>
  </div>
</template>

<style scoped>
  .menu {
    padding: 1.2rem;
  }

  .menu__list {
    padding-top: 1rem;
  }
</style>