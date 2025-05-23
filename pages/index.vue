<template>
  <Hero />
  <section class="max-w-screen-xl mx-auto px-4 my-16">
    <h2 class="text-xl font-bold mb-4 md:mb-0 md:text-lg">Top Categories</h2>
    <Categories :limit="4" />
  </section>
  <section class="max-w-screen-xl mx-auto px-4 my-16">
    <h2 class="text-xl font-bold mb-4 md:mb-0 md:text-lg">New Items</h2>
    <NewItems />
  </section>
</template>

<script lang="ts" setup>
import Hero from "~/components/Home/Hero.vue";
import Categories from "~/components/Home/Categories.vue";
import NewItems from "~/components/Home/NewItems.vue";
</script>

<style></style>
