<template>
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    <!-- Loading -->
    <div v-if="pending" class="text-center py-12">
      <p>Loading...</p>
    </div>

    <!-- Error -->
    <div v-else-if="hasError" class="text-red-500 text-center py-12">
      <p>Failed to load new items</p>
    </div>

    <NewItemsCard v-for="newItem in displayedNewItems" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  limit: {
    type: Number,
    default: 0,
  },
});

interface NewItem {
  id: Number;
  name: String;
  subtitle: String;
  description: String;
  thumbnails: String;
  is_figma: 1;
  is_sketch: 1;
  features: String;
  users_id: Number;
  categories_id: Number;
  file: String;
  category: {
    id: Number;
    name: String;
    thumbnails: String;
  };
  galleries: {
    id: Number;
    products_id: Number;
    url: String;
  };
}

interface NewItemResponse {
  data: {
    data: NewItem[];
  };
}

const {
  data: newItems,
  pending,
  error,
} = useFetch<NewItemResponse>("http://zullkit-backend-main.test/api/products", {
  params: {
    limit: props.limit,
  },
  key: computed(() => `new-items-${props.limit}`),
});

const hasError = computed(() => error.value !== null);

const displayedNewItems = computed(() => {
  if (!newItems.value) return [];
  return newItems.value.data.data;
});

console.log(displayedNewItems.value);
</script>

<style></style>
