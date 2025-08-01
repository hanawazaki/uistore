<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <p class="mb-6 text-gray-600">Please enter your credentials to continue</p>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 rounded-lg border p-4 shadow-md"
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
        class="w-full justify-center"
      >
        Submit
      </UButton>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Login",
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
