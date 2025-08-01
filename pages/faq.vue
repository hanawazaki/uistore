<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const items = ref<AccordionItem[]>([
  {
    label: "Apa itu UI Store?",
    icon: "i-lucide-sparkles",
    content:
      "UI Store adalah layanan langganan yang memberikan Anda akses ke ribuan UI kit, template, dan aset desain premium untuk Figma, Sketch, Adobe XD, dan lainnya. Cukup berlangganan dan unduh sepuasnya!",
  },
  {
    label: "Bagaimana cara kerja langganan?",
    icon: "i-lucide-repeat",
    content:
      "Langganan kami berbasis bulanan atau tahunan. Setelah berlangganan, Anda akan mendapatkan akses tak terbatas untuk mengunduh semua item di pustaka kami selama periode langganan Anda aktif.",
  },
  {
    label: "Format file apa saja yang tersedia?",
    icon: "i-lucide-file-stack",
    content:
      "Kami menyediakan format file desain yang paling populer, termasuk file .fig (Figma), .sketch (Sketch), dan .xd (Adobe XD). Beberapa item juga menyertakan format pendukung seperti SVG atau PNG.",
  },
  {
    label: "Bisakah saya menggunakan aset untuk proyek komersial?",
    icon: "i-lucide-briefcase",
    content:
      "Tentu! Semua aset yang Anda unduh dapat digunakan untuk proyek pribadi maupun komersial tanpa batas. Anda tidak perlu memberikan atribusi. Untuk detail lengkap, silakan baca halaman lisensi kami.",
  },
  {
    label: "Bagaimana cara membatalkan langganan saya?",
    icon: "i-lucide-user-x",
    content:
      "Anda dapat dengan mudah membatalkan langganan Anda kapan saja melalui halaman 'Pengaturan Akun'. Setelah dibatalkan, Anda masih dapat mengakses unduhan hingga akhir periode penagihan Anda.",
  },
  {
    label: "Apa yang terjadi jika saya berhenti berlangganan?",
    icon: "i-lucide-file-check-2",
    content:
      "Anda tetap dapat menggunakan semua aset yang telah Anda unduh untuk proyek Anda selamanya sesuai dengan lisensi kami. Namun, Anda akan kehilangan akses untuk mengunduh item baru atau pembaruan dari item yang sudah ada.",
  },
  {
    label: "Seberapa sering aset baru ditambahkan?",
    icon: "i-lucide-calendar-plus",
    content:
      "Kami menambahkan UI kit, template, dan aset desain baru setiap minggu! Pastikan untuk memeriksa halaman 'Terbaru' secara berkala agar tidak ketinggalan.",
  },
  {
    label:
      "Apakah saya akan mendapatkan pembaruan untuk item yang sudah saya unduh?",
    icon: "i-lucide-wand-2",
    content:
      "Ya, selama langganan Anda aktif, Anda akan mendapatkan akses ke semua pembaruan untuk item yang telah Anda unduh. Kami terus menyempurnakan dan memperbarui produk kami.",
  },
]);
</script>

<template>
  <div class="max-w-screen-lg mx-auto px-8 my-16">
    <h1 class="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
    <p class="mb-8">Here are some common questions and answers to help you.</p>
    <UAccordion :collapsible="false" :items="items" />
  </div>
</template>
