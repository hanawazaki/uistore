<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    to: "/",
    active: true,
  },
  {
    label: "Categories",
    to: "/category",
    active: false,
  },
  {
    label: "Pricing",
    to: "/pricing",
    active: false,
  },
]);
</script>

<template>
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <Logo />

    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <div
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <ULink as="button" to="/">Home</ULink>
        <ULink as="button" to="/category">Categories</ULink>
        <ULink as="button" to="/pricing">Pricing</ULink>
        <ULink as="button" to="/faq">FAQ</ULink>
      </div>
    </div>

    <div class="flex flex-row items-center space-x-3">
      <UButton
        to="/loginPage"
        size="lg"
        color="primary"
        variant="outline"
        class="whitespace-nowrap hover:cursor-pointer"
        >Sign In</UButton
      >

      <UButton
        to="/registerPage"
        size="lg"
        class="whitespace-nowrap hover:cursor-pointer"
        >Sign Up</UButton
      >
    </div>
  </div>
</template>
