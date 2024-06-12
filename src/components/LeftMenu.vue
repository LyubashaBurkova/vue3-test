<template>
  <div class="list">
    <h2>Карта напитков</h2>
    <div
      v-for="item in drinks"
      :key="item.idDrink"
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
  props: ['drinks'],
  data() {
    return {
      post: {},
      items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
    };
  }
};
</script>
<style scoped>
  .list {
    padding: 20px;
    background-color: antiquewhite;
  }
</style>