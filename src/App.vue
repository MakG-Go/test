<script >
import Header from "@/components/Header.vue";

export default {
  props: {
    isHomePage: Boolean,
  },
  components: {
    Header,
  },
};
</script>

<template>
  <div>
    <Header></Header>
    <div class="dividing"></div>
    <div class="container">
      <h2 class="news_title">Новости</h2>
      <router-view :isHomePage="isHomePage"></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>
