<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <div class="overflow-hidden bg-white rounded-xl">
      <div>
        <ULink
          :to="`category/${props.slug}`"
          class="transition duration-300 ease-in-out transform hover:scale-105"
        >
          <img
            class="object-cover w-full h-48"
            :src="`${props.image}`"
            alt="category 1"
          />
        </ULink>
        <header>
          <ULink :to="`category/${props.slug}`" class="block p-4">
            <h2 class="text-lg font-semibold text-gray-800">
              {{ props.title }}
            </h2>
          </ULink>
          <div class="flex items-center justify-between p-4">
            <ULink
              :to="`category/${props.slug}`"
              class="text-sm text-blue-500 hover:underline"
            >
              View More
            </ULink>
            <span class="text-sm text-gray-500">{{ props.count }} items</span>
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
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
