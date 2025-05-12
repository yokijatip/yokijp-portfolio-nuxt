<template>
  <!-- Container -->
  <div class="min-h-screen py-4 md:py-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col md:flex-row gap-10 items-center">
      <!-- Left Content -->
      <div class="flex flex-col w-full space-y-10">
        <h1
          class="text-4xl md:text-6xl font-semibold leading-tight md:text-nowrap"
        >
          Software Engineer &<br />
          Fullstack Developer
        </h1>
        <p class="text-lg text-primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, illum
          animi rerum aut nihil repellendus dele
        </p>

        <!-- CTA & Social -->
        <div class="flex items-center gap-6 flex-wrap">
          <!-- View Projects Button -->
          <button
            class="w-28 h-28 rounded-full text-black bg-white font-semibold text-sm"
          >
            DOWNLOAD<br />RESUME
          </button>

          <!-- Icons -->
          <div class="flex gap-4 text-white text-2xl">
            <i class="lab la-dribbble"></i>
            <i class="lab la-linkedin-in"></i>
            <i class="lab la-facebook-f"></i>
            <i class="lab la-instagram"></i>
            <i class="lab la-twitter"></i>
          </div>
        </div>
      </div>

      <!-- ---------------------------- -->

      <!-- Right Content -->
      <div class="flex w-full md:w-1/2 md:max-w-1/2">
        <img
          src="~/assets/images/hero-yokijp.jpg"
          alt="Profile"
          class="rounded-2xl w-full object-cover shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Border Class
const borderPrimary = "border border-primary";
const borderBlue = "border border-blue";
const borderGreen = "border border-green";
const borderRed = "border border-red";
const borderYellow = "border border-yellow";
</script>

<style>
/* Border Class */
.bp {
  border: 1px solid #f7f5ed;
}
.bb {
  border: 1px solid #3b82f6;
}
.bg {
  border: 1px solid #16a34a;
}
.br {
  border: 1px solid #ef4444;
}
.by {
  border: 1px solid #facc15;
}
</style>
