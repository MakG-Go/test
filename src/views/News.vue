<script>
import moment from "moment";
import global from "@/global/constants.js";
import E404 from "../components/E404.vue";
export default {
    components: {
        E404,
    },
    data() {
        return {
            data: [],
            error: false,
        };
    },
    methods: {
        fetchData(url) {
            try {
                fetch(url)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        this.data = data;
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                        global.URLS.ERROR = error;
                        this.error = true;
                    });
            } catch (err) {
                console.error(err);
            }
        },
        getDeteDay(date) {
            return moment(date).format("DD");
        },
        getDeteMonth(date) {
            return moment(date).format("MMMM");
        },
        getDeteYear(date) {
            return moment(date).format("YYYY");
        },
        hide() {
            this.error = false;
        },
    },
    mounted() {
        if (this.$route.params.id !== undefined) {
            this.fetchData(global.URLS.START_URL + this.$route.params.id);
        } else {
            this.fetchData(global.URLS.START_URL);
        }
        this.error = false;
    },
    watch: {
        "$route.params.id"() {
            if (this.$route.params.id !== undefined) {
                this.fetchData(global.URLS.START_URL + this.$route.params.id);
            } else {
                this.fetchData(global.URLS.START_URL);
            }
        },
    },
};
</script>

<template>
    <div>
        <ul class="row">
            <li
                class="col-8 col-xs-12"
                v-for="card in data.items"
                :key="card.date"
            >
                <article class="card">
                    <img v-if="card.image" :src="card.image" alt="" />
                    <div class="card_body">
                        <div class="card_date">
                            <p class="card_date-day">
                                {{ getDeteDay(card.date) }}
                            </p>
                            <div>
                                <p class="card_date-others">
                                    {{ getDeteMonth(card.date) }}
                                </p>
                                <p class="card_date-others">
                                    {{ getDeteYear(card.date) }}
                                </p>
                            </div>
                        </div>
                        <p
                            class="card_title text-l text-blue"
                            v-html="card.name"
                        ></p>
                        <p
                            class="card_text text-m"
                            v-html="card.previewText"
                        ></p>
                        <p class="card_footnote text-s">
                            {{ card.type.value }}
                        </p>
                    </div>
                </article>
            </li>
        </ul>
        <E404 v-if="error" @hide="hide"></E404>
    </div>
</template>


<style>
</style>