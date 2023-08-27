<template>
    <div>
        <h1 class="h1">Page not foud</h1>
        <p class="mb-red">{{ $route.href }}</p>
        <slot></slot>
        <router-link @click="hide" :to="{ name: 'home', params: { id: 1 } }"
            ><button class="btn">На главную</button></router-link
        >
    </div>
</template>

<script>
export default {
    methods: {
        hide() {
            this.$emit("hide");
        },
    },
};
</script>

<style>
</style>