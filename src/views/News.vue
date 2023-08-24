<template>
  <div>
    <ul class="row">
      <li class="col-8 col-xs-12" v-for="card in data.items" :key="card.code">
        <article class="card">
          <img v-if="card.image" :src="card.image" alt="" />
          <div class="card_body">
            <div class="card_date">
              <p class="card_date-day">28</p>
              <div>
                <p class="card_date-others">February</p>
                <p class="card_date-others">2022</p>
              </div>
            </div>
            <p class="card_title">
              {{ card.name }}
            </p>
            <p class="card_text">
              {{ card.previewText }}
            </p>
            <p class="card_footnote">{{ card.type.value }}</p>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    fetchData() {
      fetch("https://flems.github.io/test/api/news/")
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  mounted() {
    this.fetchData();
    console.log(this.$route);
  },
};
</script>

<style>
</style>