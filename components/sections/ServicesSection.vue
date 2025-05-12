<template>
  <!-- Container -->
  <div class="min-h-screen py-4 md:py-0 md:pt-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col md:flex-col gap-10">
      <h1 class="text-5xl font-medium">Services</h1>
      <!-- Grid Container Services -->
      <div class="flex flex-col md:grid md:grid-cols-3 gap-5 h-full">
        <ServiceCard>
          <template #number>01</template>
          <template #title>Branding</template>
          <template #description
            >Unveil your brand's essence through a meticulous blend of imagery,
            messaging, and strategy. Crafting identities that resonate and
            endure.</template
          >
        </ServiceCard>
        <ServiceCard>
          <template #number>02</template>
          <template #title>UI Design</template>
          <template #description
            >Designing experiences that captivate users from the first click.
            Intuitive interfaces that lead to seamless interactions.</template
          >
        </ServiceCard>
        <ServiceCard>
          <template #number>03</template>
          <template #title>Development</template>
          <template #description>
            Translating visions into dynamic digital solutions. From responsive
            websites to interactive applications, driving innovation..
          </template>
        </ServiceCard>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
