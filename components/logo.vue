<template>
  <ULink
    to="/"
    class="flex items-center text-2xl font-semibold whitespace-nowrap dark:text-white"
  >
    <span class="self-center text-primary">UI</span>
    <span class="" :class="spanClass">Store</span>
  </ULink>
</template>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    default: "dark",
  },
});

const spanClass = computed(() => {
  if (props.variant === "light") {
    return "text-white dark:text-gray-800";
  }
  return "text-gray-800 dark:text-white";
});
</script>

<style></style>
