<script>
import moment from "moment";
import global from "@/global/constants.js";
import E404 from "@/components/E404.vue";
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
        async fetchData(url) {
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
                        this.$router.push({ name: "home", params: { id: 1 } });
                    });
            } catch (err) {
                console.error(err);
            }
        },
        getDateDay(date) {
            return moment(date).format("DD");
        },
        getDateMonth(date) {
            return moment(date).format("MMMM");
        },
        getDateYear(date) {
            return moment(date).format("YYYY");
        },
        hide() {
            this.error = false;
        },
    },
    created() {
        this.$watch(
            () => {
                this.$route.params;
            },
            async () => {
                const id = parseInt(this.$route.params.id);

                if (id <= this.$navData.total && id !== NaN) {
                    this.fetchData(
                        global.URLS.START_URL + this.$route.params.id
                    );
                } else {
                    this.error = true;
                }
            },
            { immediate: true }
        );
    },
};
</script>

<template>
    <section>
        <ul class="row" v-if="!error">
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
                                {{ getDateDay(card.date) }}
                            </p>
                            <div>
                                <p class="card_date-others">
                                    {{ getDateMonth(card.date) }}
                                </p>
                                <p class="card_date-others">
                                    {{ getDateYear(card.date) }}
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
        <E404 v-else @hide="hide"></E404>
    </section>
</template>


<style>
</style>