<template>
  <div>kategori {{ categorySlug }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();

const categorySlug = route.params.id;
</script>

<style></style>
