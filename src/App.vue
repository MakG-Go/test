<script >
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            page: 1,
        };
    },
    computed: {
        showBtn() {
            return this.page + 1 <= this.$navData.total && this.page !== NaN;
        },
    },
    watch: {
        $route() {
            this.page = parseInt(
                this.$router.currentRoute._rawValue.path
                    .match(/\/([^/]+)$/)
                    .map((match) => match.slice(1))[0]
            );
            console.log(this.page);
        },
    },
};
</script>

<template>
    <div class="wrapper">
        <Header></Header>
        <div class="dividing"></div>
        <div class="container mb-red">
            <h1 class="news_title h1">Новости</h1>
            <router-view :key="$route.path"></router-view>
            <div class="row jf-center" v-show="showBtn">
                <router-link
                    :to="{
                        name: 'home',
                        params: { id: this.page + 1 },
                    }"
                >
                    <button class="btn news_btn">Загрузить ещё</button>
                </router-link>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
</style>
