<template>
  <div>
    <h1 class="mb-1">Page not foud</h1>
    <hr />
    <slot></slot>
    <router-link class="" :to="{ name: 'home' }">To catalog</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>