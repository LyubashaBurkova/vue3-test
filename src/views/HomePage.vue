<template>
  <div class="container">
    <left-menu />
    <content-block />
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