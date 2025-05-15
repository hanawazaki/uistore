<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <div class="overflow-hidden bg-white rounded-xl">
      <div>
        <ULink :to="`categories/${props.id}`">
          <img
            class="object-cover w-full h-48"
            src="/assets/images/cat1.png"
            alt="category 1"
          />
        </ULink>
        <header>
          <ULink :to="`categories/${props.id}`" class="block p-4">
            <h2 class="text-lg font-semibold text-gray-800">{{props.title}}</h2>
          </ULink>
          <div class="flex items-center justify-between p-4">
            <ULink :to="`categories/${props.id}`" class="text-sm text-blue-500 hover:underline">
              View More
            </ULink>
            <span class="text-sm text-gray-500">{{props.count}} items</span>
        </header>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id:{
    type:Number,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  count:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:true
  },
})
</script>

<style></style>
