<template>
  <div class="list">
    <h3>Карта напитков</h3>
    <div
      v-for="item in items"
      :key="item.title"
      @click="setActive"
      class="list-item"
    >
      <menu-item :item="item"  />
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue';
export default {
  name: "LeftMenu",
  components: {
    MenuItem,
  },
  data() {
    return {
      post: {},
      items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
    };
  },
  methods: {
    async fetchPosts() {
      const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then((response) => {
            return response.json();
        });
        console.log('data', data.drinks)
    },
    setActive() {

    }
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>
<style scoped>
  .list {
    padding: 20px;
    background-color: antiquewhite;
  }
</style>