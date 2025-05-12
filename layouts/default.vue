<template>
  <div class="bg-base-dark text-primary px-6 md:px-10 font-manrope">
    <Navbar />
    <main class="">
      <slot />
      <!-- Ini tempat pages seperti index.vue akan muncul -->
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>
