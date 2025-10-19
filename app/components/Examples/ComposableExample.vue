<template>
  <div class="composable-example">
    <h2 class="text-2xl font-bold mb-6">Composable Usage Examples</h2>

    <!-- News Articles Example -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        Latest News ({{ recentNews.length }} articles)
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="article in recentNews"
          :key="article.id"
          class="p-4 border rounded"
        >
          <h4 class="font-medium">{{ article.title }}</h4>
          <p class="text-sm text-gray-600">
            {{ article.category }} • {{ formatDate(article.date) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Awards Example -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        Recent Awards ({{ recentAwards.length }} awards)
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="award in recentAwards"
          :key="award.id"
          class="p-4 border rounded"
        >
          <h4 class="font-medium">{{ award.title }}</h4>
          <p class="text-sm text-gray-600">
            {{ award.organization }} • {{ award.year }}
          </p>
        </div>
      </div>
    </div>

    <!-- Services Example -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        Our Services ({{ services.length }} services)
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="service in services"
          :key="service.id"
          class="p-4 border rounded"
        >
          <h4 class="font-medium">{{ service.title }}</h4>
          <p class="text-sm text-gray-600">
            {{ service.projectsCompleted }}+ projects completed
          </p>
        </div>
      </div>
    </div>

    <!-- Utility Functions Example -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Utility Functions</h3>
      <div class="space-y-2">
        <p>
          <strong>Articles by 'Awards' category:</strong>
          {{ getArticlesByCategory("Awards").length }} articles
        </p>
        <p>
          <strong>Awards from 2024:</strong>
          {{ getAwardsByYear("2024").length }} awards
        </p>
        <p>
          <strong>Certifications by 'Quality' category:</strong>
          {{ getCertificationsByCategory("Quality").length }} certifications
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Use content data composable
const {
  newsArticles,
  awards,
  services,
  formatDate,
  getArticlesByCategory,
  getAwardsByYear,
  getCertificationsByCategory,
} = useContentData();

// Get recent articles (first 4)
const recentNews = computed(() => newsArticles.slice(0, 4));

// Get recent awards (first 4)
const recentAwards = computed(() => awards.slice(0, 4));
</script>

<style scoped>
.composable-example {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
