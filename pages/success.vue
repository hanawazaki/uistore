<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
  >
    <UCard>
      <template #header>
        <div class="flex flex-col items-center">
          <UIcon
            name="i-heroicons-check-circle-20-solid"
            class="w-20 h-20 text-green-500 dark:text-green-400 mb-4"
          />
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            Berhasil!
          </h1>
        </div>
      </template>

      <p class="text-gray-600 dark:text-gray-300">
        Terima kasih! Proses Anda telah berhasil diselesaikan. Kami telah
        mengirimkan detail konfirmasi ke email Anda.
      </p>

      <template #footer>
        <UButton
          to="/"
          label="Kembali ke Beranda"
          icon="i-heroicons-arrow-left-16-solid"
          size="xl"
          color="primary"
          variant="solid"
        />
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Sukses",
  meta: [{ name: "description", content: "Halaman konfirmasi keberhasilan." }],
});
</script>
