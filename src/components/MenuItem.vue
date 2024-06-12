<template>
  <div class="list-item">
    <span>{{ item.title }}</span>
  </div>
</template>
 
<script>
export default {
  name: "MenuItem",
  props: ['item'],
  data() {
    return {
      post: {}
    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>
<style scoped>
  .list-item {
    padding: 10px 0;
  }
</style>