<template>
  <div>{{ categoryId }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const categoryId = route.params.id;
</script>

<style></style>
