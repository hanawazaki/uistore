<template>
  <UForm
    :schema="schema"
    :state="state"
    class="w-full p-4 space-y-4 rounded-lg"
    @submit="onSubmit"
  >
    <UFormField label="Email" name="email">
      <UInput size="lg" v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput size="lg" v-model="state.password" type="password" />
    </UFormField>

    <UButton
      type="submit"
      color="primary"
      trailing-icon="i-lucide-arrow-right"
      size="lg"
      class="justify-center cursor-pointer"
    >
      Save
    </UButton>

    <p class="mt-4 text-sm text-gray-500">
      Don't have an account?
      <NuxtLink to="/register" class="text-white">Register here</NuxtLink>
    </p>
  </UForm>
</template>

<script lang="ts" setup>
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
