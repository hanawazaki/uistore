<template>
  <section class="max-w-screen-xl mx-auto px-4 my-16">
    <h2 class="text-xl font-bold mb-4 md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap gap-4 mt-4">
      <!-- Loading state -->
      <div v-if="pending" class="text-center py-12">
        <p>Loading categories...</p>
      </div>

      <!-- Error state -->
      <div v-else-if="hasError" class="text-red-500 text-center py-12">
        <p>Failed to load categories.</p>
      </div>

      <CategoriesCard
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :title="category.name"
        :count="category.products_count"
        :image="category.thumbnails"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Category {
  id: number;
  name: string;
  slug: string;
  thumbnails: string;
  products_count: number;
}

const {
  data: categories,
  error,
  pending,
} = useFetch<Category[]>("http://zullkit-backend-main.test/api/categories", {
  params: {
    show_product: 1,
    limit: 4,
  },
  key: "featured-categories",
});
const hasError = computed(() => error.value !== null);
</script>

<style></style>
