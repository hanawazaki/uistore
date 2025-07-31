<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
  >
    <UCard
      :ui="{
        base: 'w-full max-w-md text-center',
        ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
        divide: 'divide-y-0',
        header: { padding: 'py-8' },
        body: { padding: 'py-8' },
        footer: { padding: 'py-8' },
      }"
    >
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
          :ui="{ rounded: 'rounded-full' }"
        />
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
// Mengatur judul halaman di tab browser
useHead({
  title: "Sukses",
  meta: [{ name: "description", content: "Halaman konfirmasi keberhasilan." }],
});
</script>
