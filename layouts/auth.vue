<template>
  <div class="flex items-center justify-center p-8 min-h-screen">
    <div
      class="flex flex-col md:flex-row bg-white rounded-4xl shadow-lg w-full max-w-4xl"
    >
      <div
        class="flex flex-col items-center justify-center w-full p-8 md:w-1/2"
      >
        <div class="mb-8 flex justify-start w-full">
          <Logo class="mb-6" variant="light" />
        </div>
        <h1 class="mb-4 text-2xl font-bold">Register</h1>
        <p class="mb-6 text-gray-600">
          Please enter your details to create an account
        </p>
        <UForm
          :schema="schema"
          :state="state"
          class="w-full max-w-sm p-4 space-y-4 border rounded-lg shadow-md"
          @submit="onSubmit"
        >
          <UFormField label="Email" name="email">
            <UInput v-model="state.email" />
          </UFormField>

          <UFormField label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormField>

          <UButton
            type="submit"
            color="primary"
            trailing-icon="i-lucide-arrow-right"
            size="md"
            class="justify-center w-full"
          >
            Submit
          </UButton>
        </UForm>
      </div>

      <div class="relative w-full h-full md:w-1/2">
        <img
          src="/assets/images/bglogin.jpg"
          alt="Login Image"
          class="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Register",
  layout: "auth",
});

import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>

<style></style>
