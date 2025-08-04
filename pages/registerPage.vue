<template>
  <div class="flex items-center justify-center p-8 min-h-screen">
    <div
      class="flex flex-col md:flex-row border rounded-4xl shadow-lg w-full max-w-4xl"
    >
      <div
        class="flex flex-col items-center justify-center w-full p-8 md:w-1/2"
      >
        <div class="mb-8 flex justify-start w-full">
          <Logo class="mb-6" variant="dark" />
        </div>
        <h1 class="mb-4 text-2xl font-bold">Register</h1>
        <p class="mb-6 text-gray-600">
          Please enter your details to create an account
        </p>
        <RegisterForm />
      </div>

      <div
        class="relative w-full md:w-1/2 flex flex-col justify-center items-center h-auto"
      >
        <img
          src="/assets/images/bglogin.jpg"
          alt="Login Image"
          class="object-cover w-full h-full rounded-r-4xl rounded-br-4xl shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RegisterForm from "~/components/registerForm.vue";

definePageMeta({
  layout: "auth",
});
</script>

<style></style>
