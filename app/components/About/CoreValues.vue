<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-10 text-gray-800">Our Core Values</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="value in coreValues"
            :key="value.title"
            class="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-300"
          >
            <div class="text-4xl mb-4">{{ value.icon }}</div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">
              {{ value.title }}
            </h3>
            <p class="text-gray-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Use content data composable
const { coreValues } = useContentData();
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
