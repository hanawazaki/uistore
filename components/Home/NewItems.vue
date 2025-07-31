<template>
  <div class="grid grid-cols-3 gap-10">
    <!-- Loading -->
    <div v-if="pending" class="text-center py-12">
      <p>Loading...</p>
    </div>

    <!-- Error -->
    <div v-else-if="hasError" class="text-red-500 text-center py-12">
      <p>Failed to load new items</p>
    </div>

    <NewItemsCard
      v-for="newItem in displayedNewItems"
      :key="newItem.id"
      :id="newItem.id"
      :thumbnails="newItem.thumbnails"
      :name="newItem.name"
    />
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
  id: number;
  name: string;
  subtitle: string;
  description: string;
  thumbnails: string;
  is_figma: number;
  is_sketch: number;
  features: string;
  users_id: number;
  categories_id: number;
  file: string;
  category: {
    id: number;
    name: string;
    thumbnails: string;
  };
  galleries: {
    id: number;
    products_id: number;
    url: string;
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
</script>

<style></style>
