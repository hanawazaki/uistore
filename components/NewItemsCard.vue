<template>
  <div class="w-full px-1 my-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden bg-white rounded-xl">
      <div>
        <ULink
          :to="`product/${props.id}`"
          class="transition duration-300 ease-in-out transform hover:scale-105"
        >
          <img
            class="object-cover w-full h-48"
            :src="`${props.thumbnails}`"
            alt="product 1"
          />
        </ULink>
        <header>
          <ULink :to="`product/${props.id}`" class="block p-4">
            <h2 class="text-lg font-semibold text-gray-800">
              {{ props.name }}
            </h2>
          </ULink>
          <div class="flex items-center justify-between p-4">
            <ULink
              :to="`product/${props.id}`"
              class="text-sm text-blue-500 hover:underline"
            >
              View More
            </ULink>
          </div>
        </header>
      </div>
    </div>
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
});
</script>

<style></style>
