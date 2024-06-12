<template>
  <div v-if="drinks.length" class="container">
    <left-menu :drinks="drinks" />
    <content-block :drinks="drinks" />
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
import ContentBlock from '@/components/ContentBlock.vue';
export default {
  name: "HomePage",
  components: {
    LeftMenu,
    ContentBlock
  },
  data() {
    return {
      drinks: []
    }
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
  },
  mounted() {
    this.getDrinks();
  }
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 0;
}
</style>