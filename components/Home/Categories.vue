<template>
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    <!-- Loading -->
    <div v-if="pending" class="text-center py-12">
      <p>Loading categories...</p>
    </div>

    <!-- Error -->
    <div v-else-if="hasError" class="text-red-500 text-center py-12">
      <p>Failed to load categories.</p>
    </div>

    <CategoriesCard
      v-for="category in displayedCategories"
      :key="category.id"
      :id="category.id"
      :slug="slugify(category.name)"
      :title="category.name"
      :count="category.products_count"
      :image="category.thumbnails"
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

interface Category {
  id: number;
  name: string;
  slug: string;
  thumbnails: string;
  products_count: number;
}

interface CategoryResponse {
  data: {
    data: Category[];
  };
}

const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const {
  data: categories,
  error,
  pending,
} = useFetch<CategoryResponse>(
  "http://zullkit-backend-main.test/api/categories",
  {
    params: {
      limit: props.limit,
    },
    key: computed(() => `categories-limit-${props.limit}`),
  }
);

const hasError = computed(() => error.value !== null);

const displayedCategories = computed(() => {
  if (!categories.value?.data?.data) return [];
  return categories.value.data.data;
});
</script>

<style></style>
