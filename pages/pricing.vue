<template>
  <section class="max-w-screen-lg mx-auto px-8 my-16">
    <h2 class="text-xl font-bold mb-4">Subscription Plans</h2>
    <p class="mb-4">Choose the plan that suits you best:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
      <UCard class="ring-2 ring-primary" variant="solid">
        <template #header>
          <h3 class="text-lg font-semibold">Monthly Plan</h3>
          <p class="text-gray-600 mb-4">$20/month</p>
        </template>

        <ul class="space-y-2 mb-6 text-sm">
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Akses <strong>penuh</strong> ke semua komponen UI.</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Template untuk halaman Landing, Dashboard, dll.</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Pembaruan ditambahkan setiap minggu.</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Lisensi untuk 1 proyek aktif.</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Fleksibilitas pembayaran per bulan.</span>
          </li>
        </ul>

        <template #footer>
          <UButton
            trailing-icon="i-lucide-arrow-right"
            size="lg"
            color="primary"
            class="w-full cursor-pointer"
            >Subscribe Now</UButton
          >
        </template>
      </UCard>

      <UCard class="ring-2 ring-primary" variant="subtle">
        <template #header>
          <h3 class="text-lg font-semibold">Yearly Plan</h3>
          <p class="text-gray-600">$99.99/year</p>
        </template>

        <ul class="space-y-2 mb-6 text-sm">
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span><strong>Semua</strong> fitur dari paket bulanan.</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span><strong>Hemat 20%</strong> (setara 2 bulan gratis).</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Akses awal ke <strong>fitur beta</strong>.</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Akses ke file desain Figma.</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Dukungan prioritas (respons di bawah 24 jam).</span>
          </li>
          <li class="flex items-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="text-green-500 mr-2"
            />
            <span>Harga terbaik untuk komitmen jangka panjang.</span>
          </li>
        </ul>

        <template #footer>
          <UButton
            trailing-icon="i-lucide-arrow-right"
            size="lg"
            color="primary"
            class="w-full cursor-pointer"
            >Subscribe Now</UButton
          >
        </template>
      </UCard>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
