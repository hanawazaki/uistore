<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
      {{ categoryName }} Items
    </h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <NewItemsCard
        v-for="item in newItems"
        :name="item.name"
        :description="item.subtitle"
        :thumbnails="item.thumbnails"
        :key="item.id"
        :id="item.id"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const { data, pending, error } = await useAsyncData(
  `category-${id}`,
  async () => {
    return await $fetch(
      `http://zullkit-backend-main.test/api/categories?id=${id}&show_product=1`
    );
  }
);

const categoryName = ref("");
const newItems = ref([]);

// Watch for data changes
watch(
  data,
  (newData) => {
    if (newData?.data) {
      categoryName.value = newData.data.name || "";
      newItems.value = newData.data.products || [];

      console.log("Category Name:", categoryName.value);
      console.log("Products:", newItems.value);

      if (newItems.value.length === 0) {
        console.log("No products found for this category.");
      }
    }
  },
  { immediate: true }
);

// Handle loading state
watch(pending, (isPending) => {
  if (isPending) {
    console.log("Loading data...");
  }
});

// Handle errors
watch(error, (errorValue) => {
  if (errorValue) {
    console.error("Error fetching category data:", errorValue);
  }
});
</script>

<style></style>
