<template>
  <main>
    <template v-if="!pending">
      <div class="container p-2 mx-auto my-10 max-w-7xl">
        <div class="flex flex-row flex-wrap py-4">
          <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
            <h1
              class="mb-2 text-3xl font-bold leading-normal tracking-tight text-white sm:text-4xl md:text-4xl"
            >
              {{ displayedProduct.name }}
            </h1>
            <p class="text-gray-500">{{ displayedProduct.subtitle }}</p>
            <Gallery
              :thumbs="displayedProduct.thumbnails"
              :galleries="displayedProduct.galleries"
            />
            <section class="" id="orders">
              <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
              <div
                class="text-gray-500"
                v-html="displayedProduct.description"
              ></div>
            </section>
          </main>
          <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
            <div class="sticky top-0 w-full pt-4 md:mt-24">
              <div class="p-6 border rounded-2xl">
                <div class="mb-4" v-if="displayedProduct.is_figma === 1">
                  <div class="flex mb-2">
                    <div>
                      <img
                        src="/assets/img/icon-figma.png"
                        alt=""
                        class="w-16"
                      />
                    </div>
                    <div class="block mt-1 ml-4">
                      <h3 class="font-semibold text-md">Figma</h3>
                      <p class="text-gray-400 text-md">Project Included</p>
                    </div>
                  </div>
                </div>
                <div class="mb-4" v-if="displayedProduct.is_sketch === 1">
                  <div class="flex mb-2">
                    <div>
                      <img
                        src="/assets/img/icon-sketch.png"
                        alt=""
                        class="w-16"
                      />
                    </div>
                    <div class="block mt-1 ml-4">
                      <h3 class="font-semibold text-md">Sketch</h3>
                      <p class="text-gray-400 text-md">Project Included</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 class="mt-5 mb-3 font-semibold text-md">
                    Great Features
                  </h1>
                  <ul class="mb-6 text-gray-500">
                    <li class="mb-2" v-for="feature in features" :key="feature">
                      {{ feature }}
                      <img
                        src="/assets/images/icon-check.png"
                        class="float-right w-5 mt-1"
                        alt="check-icon"
                      />
                    </li>
                  </ul>
                </div>
                <!-- <template
                  v-if="
                    isSubscriptionReady && user.data.subscription.length > 0
                  "
                >
                  <a
                    :href="dataDetail.file"
                    class="inline-flex cursor-pointer items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
                  >
                    Download Now
                  </a>
                </template>
                <template v-else>
                  <RouterLink
                    to="/pricing"
                    class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
                  >
                    Subscribe
                  </RouterLink>
                </template> -->
              </div>
            </div>
          </aside>
        </div>
      </div>
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const dataDetail = ref({});
// const category = ref({});
const features = ref([]);

// const user = computed(() => userStore.user);
const isSubscriptionReady = ref(true);

const {
  data: detail,
  pending,
  error,
} = await useFetch(`http://zullkit-backend-main.test/api/products`, {
  params: {
    id: route.params.id,
  },
});

const hasError = computed(() => {
  return error.value !== null;
});

const displayedProduct = computed(() => {
  if (!detail.value?.data) return [];
  features.value = detail.value?.data?.features
    ? detail.value.data.features.split(",")
    : [];

  return detail.value.data;
});

// if(data.value){
//   dataDetail.value = data.value
// }
</script>

<style></style>
