<script >
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    props: {
        isHomePage: Boolean,
    },
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            pageCouter: 1,
        };
    },
    methods: {
        goNext() {
            this.pageCouter + 1 <= this.$navData.total ? this.pageCouter++ : "";
        },
    },
    computed: {
        showBtn() {
            return this.pageCouter + 1 > this.$navData.total;
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
            <router-view :isHomePage="isHomePage"></router-view>
            <div class="row jf-center" v-show="!showBtn">
                <router-link
                    :to="{ name: 'news', params: { id: this.pageCouter } }"
                >
                    <button class="btn news_btn" @click="goNext">
                        Загрузить ещё
                    </button>
                </router-link>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
</style>
