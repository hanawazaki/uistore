<template>
  <div class="overflow-hidden bg-white rounded-xl w-full px-1 my-1">
    <ULink
      :to="`/product/${props.id}`"
      class="transition duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        class="object-cover w-full h-48"
        :src="`${props.thumbnails}`"
        alt="product 1"
      />
    </ULink>
    <header class="p-4 mb-4 leading-tight">
      <h2 class="text-lg">
        <ULink
          :to="`/product/${props.id}`"
          class="font-semibold text-black no-underline hover:text-black hover:underline"
        >
          {{ props.name }}
        </ULink>
      </h2>
      <span class="block text-sm font-light text-gray-500 no-underline">
        {{ props.description }}
      </span>
    </header>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  thumbnails: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
