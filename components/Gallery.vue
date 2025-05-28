<template>
  <section id="gallery">
    <img :src="defaultImage" alt="" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <template v-for="gallery in props.galleries" :key="gallery.id">
        <div
          class="overflow-hidden cursor-pointer rounded-2xl"
          :class="{ 'ring-2 ring-indigo-500': defaultImage === gallery.url }"
          @click="handleChangeImage(gallery.url)"
        >
          <img :src="gallery.url" class="w-full" alt="" />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  thumbs: String,
  galleries: Array,
});

const defaultImage = ref(props.thumbs);

const handleChangeImage = (url) => {
  defaultImage.value = url;
};
</script>

<style></style>
