<template>
  <div
    :data-aos-delay="aosDelay"
    class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
  >
    <div class="overflow-hidden bg-white rounded-xl">
      <ULink
        :to="`category/${props.id}`"
        class="transition duration-300 ease-in-out transform hover:scale-105"
      >
        <img
          class="object-cover w-full h-48"
          :src="`${props.image}`"
          alt="category 1"
        />
      </ULink>
      <header class="px-4 mb-4 leading-tight py-4">
        <ULink :to="`category/${props.id}`" class="font-semibold text-black">
          <h2 class="text-lg font-semibold text-gray-800">
            {{ props.title }}
          </h2>
        </ULink>
        <span class="block text-sm font-light text-gray-500 no-underline"
          >{{ props.count }} items</span
        >
      </header>
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
  aosDelay: {
    type: Number,
    default: 0,
  },
});
</script>

<style></style>
