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
      Login
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
import axios from "axios";

const router = useRouter();

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const userStore = useMyUserStore();
const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const response = await axios.post(
      "http://zullkit-backend-main.test/api/login",
      {
        email: event.data.email,
        password: event.data.password,
      }
    );

    localStorage.setItem("access_token", response.data.data.access_token);
    localStorage.setItem("token_type", response.data.data.token_type);

    userStore.fetchUser();
    router.push("/");

    toast.add({
      title: "Success",
      description: "The form has been submitted.",
      color: "success",
    });
  } catch (error) {}
  console.log(event.data);
}
</script>

<style></style>
