<template>
  <section class="news-articles-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Latest News & Updates</h2>
        <p class="section-subtitle">
          Stay informed about our latest projects, achievements, and company
          milestones
        </p>
      </div>

      <div class="articles-grid">
        <article
          v-for="article in displayedArticles"
          :key="article.id"
          class="article-card"
        >
          <div class="article-image">
            <img :src="article.image" :alt="article.title" class="image" />
            <div class="article-category">
              <span class="category-badge">{{ article.category }}</span>
            </div>
          </div>

          <div class="article-content">
            <div class="article-meta">
              <span class="article-date">{{ formatDate(article.date) }}</span>
              <span class="article-read-time"
                >{{ article.readTime }} min read</span
              >
            </div>

            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-excerpt">{{ article.excerpt }}</p>

            <div class="article-footer">
              <UButton
                :to="article.link"
                variant="outline"
                size="sm"
                class="read-more-btn"
              >
                Read More
                <UIcon name="i-heroicons-arrow-right" class="ml-2" />
              </UButton>
            </div>
          </div>
        </article>
      </div>

      <div v-if="hasMoreArticles" class="load-more-section">
        <UButton
          variant="outline"
          size="lg"
          class="load-more-btn"
          :loading="isLoading"
          @click="loadMoreArticles"
        >
          {{ isLoading ? "Loading..." : "Load More Articles" }}
          <UIcon name="i-heroicons-arrow-down" class="ml-2" />
        </UButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Use content data composable
const { newsArticles: allNewsArticles, formatDate } = useContentData();

// Pagination state
const articlesPerPage = 6;
const currentPage = ref(1);
const isLoading = ref(false);

// Computed properties
const displayedArticles = computed(() => {
  const startIndex = 0;
  const endIndex = currentPage.value * articlesPerPage;
  return allNewsArticles.slice(startIndex, endIndex);
});

const hasMoreArticles = computed(() => {
  return displayedArticles.value.length < allNewsArticles.length;
});

// Load more articles function
const loadMoreArticles = async () => {
  if (isLoading.value || !hasMoreArticles.value) return;

  isLoading.value = true;

  // Simulate loading delay for better UX
  await new Promise((resolve) => setTimeout(resolve, 1000));

  currentPage.value += 1;
  isLoading.value = false;
};
</script>

<style scoped>
.news-articles-section {
  background-color: #f8f9fa;
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.article-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--color-blue-primary);
}

.article-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.article-card:hover .image {
  transform: scale(1.05);
}

.article-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.category-badge {
  background: var(--color-blue-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.article-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #6b7280;
}

.article-date {
  font-weight: 500;
}

.article-read-time {
  font-weight: 400;
}

.article-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  flex: 1;
}

.article-excerpt {
  font-family: var(--font-body);
  font-size: 1rem;
  color: #4a5568;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  flex: 1;
}

.article-footer {
  margin-top: auto;
}

.read-more-btn {
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 59, 102, 0.3);
}

.load-more-section {
  text-align: center;
}

.load-more-btn {
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 59, 102, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .news-articles-section {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .article-content {
    padding: 1rem;
  }

  .article-title {
    font-size: 1.125rem;
  }

  .article-excerpt {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .news-articles-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .article-image {
    height: 180px;
  }

  .article-title {
    font-size: 1rem;
  }

  .article-excerpt {
    font-size: 0.875rem;
  }

  .load-more-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}
</style>
