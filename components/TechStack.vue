<template>
  <div>
    <div
      class="flex w-fit gap-3 py-1 px-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
    >
      <!-- Icon Slot -->
      <div class="flex-shrink-0">
        <slot name="icon">
          <!-- Default icon jika tidak ada slot icon -->
          <div
            class="w-6 h-6 bg-gray-300 rounded flex items-center justify-center"
          >
            <span class="text-xs text-gray-600">?</span>
          </div>
        </slot>
      </div>

      <!-- Text Content -->
      <div class="flex flex-col justify-center">
        <p :class="textClasses">{{ text || "Technology" }}</p>
        <!-- Optional description slot -->
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props definition
const props = defineProps({
  text: {
    type: String,
    default: "Technology",
  },
  textSize: {
    type: String,
    default: "sm",
    validator: (value) => ["xs", "sm", "base", "lg", "xl"].includes(value),
  },
  textColor: {
    type: String,
    default: "base-dark",
  },
  variant: {
    type: String,
    default: "default",
    validator: (value) =>
      ["default", "primary", "secondary", "accent"].includes(value),
  },
});

// Computed classes
const textClasses = computed(() => {
  const sizeClass = `text-${props.textSize}`;
  const colorClass = `text-${props.textColor}`;
  return `${sizeClass} ${colorClass} font-semibold`;
});

// Container classes based on variant
const containerClasses = computed(() => {
  const baseClasses = "flex gap-3 p-3 rounded-lg transition-all duration-200";

  switch (props.variant) {
    case "primary":
      return `${baseClasses} bg-blue-50 border border-blue-200 hover:bg-blue-100`;
    case "secondary":
      return `${baseClasses} bg-gray-50 border border-gray-200 hover:bg-gray-100`;
    case "accent":
      return `${baseClasses} bg-green-50 border border-green-200 hover:bg-green-100`;
    default:
      return `${baseClasses} bg-white border border-gray-100 hover:shadow-md shadow-sm`;
  }
});
</script>

<style scoped>
/* Optional: Custom styles untuk animasi hover */
.tech-stack-item {
  transition: transform 0.2s ease-in-out;
}

.tech-stack-item:hover {
  transform: translateY(-2px);
}
</style>
