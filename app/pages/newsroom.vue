<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <NewsroomHero />

    <!-- News Articles Section -->
    <NewsroomArticles />

    <!-- Awards Section -->
    <NewsroomAwardsSection />

    <!-- Contact Section -->
    <ProjectsContactUs />

    <AboutOfficeLocation />
  </div>
</template>

<script lang="ts" setup>
// SEO
useHead({
  title: "Newsroom - Sri Devi Constructions",
  meta: [
    {
      name: "description",
      content:
        "Stay updated with Sri Devi Constructions' latest news, awards, achievements, and company milestones. Discover our industry recognition and project updates.",
    },
  ],
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
