<template>
  <div
    class="menu__list__item"
    :class="{'active': activeDrinkId == item.idDrink}"
  >
    <span>{{ item.strDrink }}</span>
  </div>
</template>
 
<script>
export default {
  name: "MenuItem",
  props: {
    item: Object,
    activeDrinkId: Number
  }
};
</script>
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