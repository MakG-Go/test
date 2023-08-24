<script >
import Header from "@/components/Header.vue";

import News from "@/components/News.vue";
export default {
    components: {
        Header,
        News,
    },
};
</script>

<template>
    <div>
        <Header></Header>
        <div class="dividing"></div>
        <div class="container">
            <h2 class="news_title">Новости</h2>
            <News></News>
        </div>
    </div>
</template>

<style scoped>
</style>
