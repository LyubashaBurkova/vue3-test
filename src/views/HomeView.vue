<script>
import MenuList from '@/components/MenuList.vue'
import ContentBlock from '@/components/ContentBlock.vue';
export default {
  name: "HomeView",
  components: {
    MenuList,
    ContentBlock
  },
  data() {
    return {
      drinks: [],
      activeDrinkId: 178332
    }
  },
  mounted() {
    this.getDrinks();
  },
  methods: {
    async getDrinks() {
      const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then((response) => {
            return response.json();
        });
        this.drinks = data.drinks.map(drink => {
          let ingredients = [];
          let measure = [];
          for (let key in drink) {
            if (key.indexOf('Ingredient') != -1 && drink[key]) {
              ingredients.push(drink[key]);
            }
            if (key.indexOf('Measure') != -1 && drink[key]) {
              measure.push(drink[key]);
            }
          }
          drink.ingredients = {};
          for (let index = 0; index < ingredients.length; index++) {
            drink.ingredients[ingredients[index]] = measure[index]; 
          }
          return drink
        })
    },
    setActive(id) {
      this.activeDrinkId = id;
    }
  }
};
</script>

<template>
  <div v-if="drinks.length" class="home-page container">
    <menu-list
      :drinks="drinks"
      @set-active="setActive"
    />
    <content-block
      :drinks="drinks"
      :active-drink-id="activeDrinkId"
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