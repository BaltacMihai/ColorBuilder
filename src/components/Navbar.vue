<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo">
      <img src="./../assets/imgaes/logo.svg" alt="Logo "
    /></RouterLink>

    <h1>{{ title }}</h1>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      title: "",
    };
  },

  watch: {
    $route(to, from) {
      this.title = `${this.$route.name
        .charAt(0)
        .toUpperCase()}${this.$route.name.slice(1)}`;
    },
  },
};
</script>
