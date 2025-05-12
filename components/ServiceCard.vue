<template>
  <div
    class="bg-primary rounded-2xl px-6 py-12 shadow-lg hover:shadow-xl transition-shadow duration-300 justify-between flex flex-col"
  >
    <!-- Icon Slot -->
    <div class="flex justify-end">
      <div
        class="w-16 h-16 bg-black text-pimary rounded-full flex items-center justify-center"
      >
        <slot name="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </slot>
      </div>
    </div>

    <div>
      <!-- Content Slot -->
      <p class="text-lg text-base-dark">
        <slot name="number"></slot>
      </p>

      <!-- Title Slot -->
      <h3 class="text-4xl font-medium mb-4 text-base-dark">
        <slot name="title">Default Title</slot>
      </h3>

      <!-- Content Slot -->
      <p class="text-lg text-base-dark">
        <slot name="description">Default content description goes here.</slot>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  // Example prop for additional customization
  customClass: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  number: {
    type: String,
    default: "",
  },
});
definePageMeta({
  layout: false,
});
</script>

<style></style>
