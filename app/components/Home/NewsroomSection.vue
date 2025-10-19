<template>
  <section class="newsroom-section">
    <div class="container mx-auto px-6 py-16">
      <!-- Header -->
      <div class="newsroom-header">
        <h2 class="newsroom-title">FROM THE NEWSROOM</h2>
      </div>

      <!-- News Cards -->
      <div class="news-cards-container">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="news-card"
        >
          <!-- Article Image -->
          <div class="article-image-container">
            <img
              :src="article.image"
              :alt="article.title"
              class="article-image"
              @error="handleImageError"
            />
          </div>

          <!-- Article Content -->
          <div class="article-content">
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-description">{{ article.description }}</p>
          </div>
        </div>
      </div>

      <!-- Call to Action Button -->
      <div class="cta-container">
        <button class="cta-button">See more from our Newsroom</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const articles = ref([
  {
    title: "BUILDING THE FUTURE OF HYDERABAD",
    description:
      "Sri Devi Constructions is leading the transformation of Hyderabad's skyline with innovative construction techniques and sustainable building practices. Our latest projects showcase cutting-edge technology...",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
  },
  {
    title: "SUSTAINABLE CONSTRUCTION PRACTICES",
    description:
      "As environmental consciousness grows, Sri Devi Constructions is pioneering green building initiatives across Hyderabad. Our commitment to sustainable construction methods is reshaping the industry...",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
  },
  {
    title: "INNOVATION IN CONSTRUCTION TECHNOLOGY",
    description:
      "From advanced project management systems to state-of-the-art construction equipment, Sri Devi Constructions continues to invest in technology that enhances efficiency and quality in every project we undertake...",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
  },
]);

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  console.log("Image failed to load:", img.src);
  img.src =
    "https://via.placeholder.com/400x300/2d3748/ffffff?text=Construction+News";
};
</script>

<style scoped>
.newsroom-section {
  background-color: white;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
}

.newsroom-header {
  text-align: center;
  margin-bottom: 3rem;
}

.newsroom-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  line-height: 1.2;
  letter-spacing: 0.05em;
}

.news-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.news-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.article-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #f8f9fa;
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .article-image {
  transform: scale(1.05);
}

.article-content {
  padding: 1.5rem;
}

.article-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  letter-spacing: 0.025em;
}

.article-description {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.cta-container {
  text-align: center;
}

.cta-button {
  background-color: var(--color-yellow-primary);
  color: #2d3748;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.025em;
}

.cta-button:hover {
  background-color: var(--color-blue-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .newsroom-title {
    font-size: 2rem;
  }

  .news-cards-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .newsroom-title {
    font-size: 1.75rem;
  }

  .newsroom-header {
    margin-bottom: 2rem;
  }

  .news-cards-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .article-content {
    padding: 1.25rem;
  }

  .article-title {
    font-size: 1rem;
  }

  .article-description {
    font-size: 0.9rem;
  }

  .cta-button {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .newsroom-title {
    font-size: 1.5rem;
  }

  .article-image-container {
    height: 180px;
  }

  .article-content {
    padding: 1rem;
  }

  .cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
