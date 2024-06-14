<script>
import MenuListItem from '@/components/MenuListItem.vue';
export default {
  name: "MenuList",
  components: {
    MenuListItem,
  },
  props: {
    drinks: Array
  },
  data() {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      activeDrinkId: 11007,
    };
  },
  methods: {
    setActive(item) {
      this.activeDrinkId = item.idDrink;
      this.$emit('set-active', item.idDrink);
    }
  }
};
</script>

<template>
  <div class="menu">
    <img src="https://www.thecocktaildb.com/images/logo.png" />
    <div class="menu__list">
      <menu-list-item
        v-for="item in drinks"
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