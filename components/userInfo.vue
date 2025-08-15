<script setup lang="ts">
interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    profile_photo_url?: string;
  };
}

const props = defineProps<Props>();
const userStore = useMyUserStore();

const show = ref(false);

const toggleDropdown = () => {
  show.value = !show.value;
};

const logout = async () => {
  show.value = false;
  await userStore.logout();
};

// Close dropdown when clicking outside
onMounted(() => {
  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement;
    if (!target.closest("#user-dropdown")) {
      show.value = false;
    }
  };

  if (process.client) {
    document.addEventListener("click", handleClick);

    onUnmounted(() => {
      document.removeEventListener("click", handleClick);
    });
  }
});
</script>

<template>
  <div class="relative" id="user-dropdown">
    <div class="flex items-center">
      <div class="mr-2 text-sm font-medium hidden sm:block">
        Halo, {{ userStore.user?.name }}
      </div>

      <button
        @click="toggleDropdown"
        type="button"
        class="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
      >
        <span class="sr-only">Open user menu</span>
        <img
          v-if="user.profile_photo_url"
          class="w-8 h-8 rounded-full"
          :src="user.profile_photo_url"
          :alt="user.name"
        />
        <div
          v-else
          class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium"
        >
          {{ user.name }}
        </div>
      </button>
    </div>

    <!-- Dropdown menu -->
    <div
      v-show="show"
      class="absolute right-0 top-full mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow z-50"
    >
      <div class="px-4 py-3 text-sm text-gray-900">
        <div class="font-medium">{{ user.name }}</div>
        <div class="truncate">{{ user.email }}</div>
      </div>

      <ul class="py-2 text-sm text-gray-700">
        <li>
          <NuxtLink
            to="#"
            class="block px-4 py-2 hover:bg-gray-100"
            @click="show = false"
          >
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#"
            class="block px-4 py-2 hover:bg-gray-100"
            @click="show = false"
          >
            Settings
          </NuxtLink>
        </li>
      </ul>

      <div class="py-1">
        <button
          @click="logout"
          class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign out
        </button>
      </div>
    </div>
  </div>
</template>
