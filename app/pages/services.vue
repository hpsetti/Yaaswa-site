<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <ServicesHero />

    <!-- Services Cards Section -->
    <ServicesCards />

    <!-- Contact Section -->
    <ProjectsContactUs />
  </div>
</template>

<script lang="ts" setup>
// SEO
useHead({
  title: "Our Services - Sri Devi Constructions",
  meta: [
    {
      name: "description",
      content:
        "Explore our comprehensive construction services including residential, commercial, infrastructure, and industrial projects. Quality construction solutions across all sectors.",
    },
  ],
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
