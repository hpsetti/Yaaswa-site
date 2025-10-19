<template>
  <section class="our-story-section">
    <div class="container mx-auto px-6 py-20">
      <!-- Header Section -->
      <div class="story-header">
        <h2 class="story-title">OUR STORY</h2>
        <p class="story-description">
          Sri Devi Constructions' roots can be traced back to 1995 when our
          founders started their small, local construction company. We have
          since grown to be one of the leading construction and engineering
          firms across India.
        </p>
      </div>

      <!-- Carousel Section -->
      <div class="carousel-container">
        <div ref="carouselWrapper" class="carousel-wrapper">
          <div
            ref="carouselTrack"
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
          >
            <div
              v-for="(milestone, index) in milestones"
              :key="index"
              class="milestone-card"
              :class="{ active: index === currentIndex }"
            >
              <div class="card-content">
                <div class="year">{{ milestone.year }}</div>
                <div class="image-container">
                  <img
                    :src="milestone.image"
                    :alt="milestone.description"
                    class="milestone-image"
                    @error="handleImageError"
                  />
                </div>
                <div class="description">{{ milestone.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <button
          class="nav-button prev"
          :disabled="currentIndex === 0"
          @click="previousSlide"
        >
          <span>‹</span>
        </button>
        <button
          class="nav-button next"
          :disabled="currentIndex >= milestones.length - 1"
          @click="nextSlide"
        >
          <span>›</span>
        </button>
      </div>

      <!-- Dots Indicator - Moved to bottom -->
      <div class="dots-container">
        <button
          v-for="(milestone, index) in milestones"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";

const carouselWrapper = ref<HTMLElement | null>(null);
const carouselTrack = ref<HTMLElement | null>(null);
const currentIndex = ref(0);
const cardWidth = ref(0);

const milestones = ref([
  {
    year: "1995",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
    description:
      "Sri Devi Constructions is founded with a vision to build quality homes and infrastructure across India.",
  },
  {
    year: "2000",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center",
    description:
      "The company completes its first major residential project, establishing our reputation for excellence.",
  },
  {
    year: "2005",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
    description:
      "Expansion into commercial construction with our first office complex project in Hyderabad.",
  },
  {
    year: "2010",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
    description:
      "Venturing into infrastructure development with highway and bridge construction projects.",
  },
  {
    year: "2015",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
    description:
      "Pioneering sustainable construction practices and green building certifications.",
  },
  {
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center",
    description:
      "Digital transformation with BIM technology and modern construction management systems.",
  },
  {
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&crop=center",
    description:
      "Celebrating 28 years of excellence with over 250 completed projects across India.",
  },
]);

const updateCardWidth = async () => {
  await nextTick();
  if (carouselWrapper.value) {
    const containerWidth = carouselWrapper.value.offsetWidth;
    // Calculate card width including gap
    cardWidth.value = 350 + 16; // 350px card width + 16px gap (1rem)
  }
};

const nextSlide = () => {
  if (currentIndex.value < milestones.value.length - 1) {
    currentIndex.value++;
  }
  // Restart auto-play after manual navigation
  stopAutoPlay();
  setTimeout(() => startAutoPlay(), 3000); // Resume after 3 seconds
};

const previousSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
  // Restart auto-play after manual navigation
  stopAutoPlay();
  setTimeout(() => startAutoPlay(), 3000); // Resume after 3 seconds
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
  // Restart auto-play after manual navigation
  stopAutoPlay();
  setTimeout(() => startAutoPlay(), 3000); // Resume after 3 seconds
};

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  // Fallback to a placeholder image if the original fails to load
  img.src =
    "https://via.placeholder.com/400x300/4a5568/ffffff?text=Construction+Image";
};

// Auto-play functionality
let autoPlayInterval: NodeJS.Timeout | null = null;

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    if (currentIndex.value < milestones.value.length - 1) {
      nextSlide();
    } else {
      currentIndex.value = 0;
    }
  }, 5000); // Change slide every 5 seconds
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

// Watch for currentIndex changes to ensure smooth transitions
watch(currentIndex, (newIndex) => {
  console.log("Current index changed to:", newIndex);
});

onMounted(async () => {
  await nextTick();
  updateCardWidth();
  window.addEventListener("resize", updateCardWidth);

  // Ensure initial positioning
  setTimeout(() => {
    updateCardWidth();
  }, 100);

  // Start auto-play
  startAutoPlay();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateCardWidth);
  stopAutoPlay();
});
</script>

<style scoped>
.our-story-section {
  background-color: #2d3748;
  color: white;
  min-height: 600px;
  position: relative;
}

.container {
  max-width: 1200px;
  position: relative;
}

.story-header {
  text-align: center;
  margin-bottom: 4rem;
}

.story-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1.5rem 0;
  color: white;
}

.story-description {
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.7;
  color: #e2e8f0;
  max-width: 800px;
  margin: 0 auto;
}

.carousel-container {
  position: relative;
  overflow: visible;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 40px;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
  max-width: 1200px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 1rem;
  padding: 1rem;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
}

.milestone-card {
  flex: 0 0 auto;
  background-color: #4a5568;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0.7;
  transform: scale(0.95);
  width: 350px;
  height: 400px;
}

.milestone-card.active {
  opacity: 1;
  transform: scale(1);
  background-color: #2d3748;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.card-content {
  padding: 2rem;
  text-align: center;
}

.year {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-yellow-primary);
  margin-bottom: 1rem;
}

.image-container {
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1a202c;
}

.milestone-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.2);
  transition: filter 0.3s ease;
}

.milestone-card.active .milestone-image {
  filter: grayscale(0%) contrast(1);
}

.description {
  font-family: var(--font-body);
  font-size: 0.875rem;
  line-height: 1.6;
  color: #e2e8f0;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-blue-primary);
  border: 2px solid var(--color-yellow-primary);
  color: var(--color-yellow-primary);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 20;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.nav-button:hover:not(:disabled) {
  background-color: var(--color-yellow-primary);
  color: var(--color-blue-primary);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(244, 211, 94, 0.4);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  background-color: rgba(13, 59, 102, 0.5);
  border-color: rgba(244, 211, 94, 0.3);
  color: rgba(244, 211, 94, 0.3);
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

.dots-container {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 3rem;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background-color: var(--color-yellow-primary);
  border-color: var(--color-yellow-primary);
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(244, 211, 94, 0.5);
}

.dot:hover:not(.active) {
  background-color: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.6);
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .story-title {
    font-size: 2.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .year {
    font-size: 1.75rem;
  }

  .image-container {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .carousel-container {
    padding: 0 30px;
  }

  .story-title {
    font-size: 2rem;
  }

  .story-description {
    font-size: 1rem;
  }

  .carousel-track {
    padding: 0.5rem;
  }

  .card-content {
    padding: 1rem;
  }

  .year {
    font-size: 1.5rem;
  }

  .image-container {
    height: 120px;
  }

  .nav-button {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }

  .nav-button.prev {
    left: 5px;
  }

  .nav-button.next {
    right: 5px;
  }

  .dots-container {
    margin-top: 2.5rem;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    padding: 0 20px;
  }

  .story-title {
    font-size: 1.75rem;
  }

  .milestone-card {
    min-width: 280px;
  }

  .description {
    font-size: 0.8rem;
  }

  .nav-button {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }

  .nav-button.prev {
    left: 2px;
  }

  .nav-button.next {
    right: 2px;
  }

  .dots-container {
    margin-top: 2rem;
    gap: 0.5rem;
  }

  .dot {
    width: 12px;
    height: 12px;
  }
}
</style>
