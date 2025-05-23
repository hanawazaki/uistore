<template>
  <div>product {{ id }}</div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params;
</script>

<style></style>
