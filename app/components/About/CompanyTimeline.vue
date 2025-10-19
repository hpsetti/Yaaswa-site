<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Journey
        </h2>

        <UTimeline :items="timelineData" class="max-w-4xl mx-auto" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Use content data composable
const { timelineData } = useContentData();
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
