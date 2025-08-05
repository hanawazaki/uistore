<template>
  <HomeHero />
  <section data-aos="fade-up" class="max-w-screen-xl mx-auto px-4 my-8">
    <h2 class="text-xl font-bold mb-4 md:mb-0 md:text-lg">Top Categories</h2>
    <HomeCategories :limit="4" />
  </section>
  <section data-aos="fade-up" class="max-w-screen-xl mx-auto px-4 my-8">
    <h2 class="text-xl font-bold mb-4 md:mb-0 md:text-lg">New Items</h2>
    <HomeNewItems />
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
