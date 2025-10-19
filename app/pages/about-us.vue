<template>
  <div class="min-h-screen">
    <!-- Hero Section with Company Motto -->
    <AboutHeroSection />

    <!-- Company Timeline Section -->
    <AboutCompanyTimeline />

    <!-- Board Members Section -->
    <AboutBoardMembers />

    <HomeSelectedProjects />

    <!-- Values Section -->
    <AboutCoreValues />

    <!-- Office Location Section -->
    <AboutOfficeLocation />

    <ProjectsContactUs />
  </div>
</template>

<script lang="ts" setup>
// SEO
useHead({
  title: "About Us - Sri Devi Constructions",
  meta: [
    {
      name: "description",
      content:
        "Learn about Sri Devi Constructions' mission, timeline, and leadership team. Discover our commitment to quality construction services.",
    },
  ],
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
