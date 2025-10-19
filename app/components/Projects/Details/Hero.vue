<template>
  <div class="project-hero">
    <!-- Background Image Slideshow -->
    <div class="hero-background">
      <Transition name="fade" mode="out-in">
        <img
          :key="currentImageIndex"
          :src="currentImage"
          :alt="project.name"
          class="background-image"
        />
      </Transition>
      <div class="hero-overlay"></div>
    </div>

    <!-- Content -->
    <div class="hero-content">
      <div class="content-container">
        <div class="hero-text">
          <h1 class="project-title">{{ project.name }}</h1>
          <div class="project-description">
            <p
              v-for="(paragraph, index) in descriptionParagraphs"
              :key="index"
              class="description-paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Slideshow Indicators -->
    <div class="slideshow-indicators">
      <button
        v-for="(image, index) in project.images"
        :key="index"
        :class="['indicator', { active: currentImageIndex === index }]"
        @click="selectImage(index)"
      >
        <span class="indicator-dot"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  area: string;
  floors: string;
  location: string;
  status: string;
}

const props = defineProps<{
  project: Project;
}>();

const currentImageIndex = ref(0);
let slideshowTimer: ReturnType<typeof setInterval>;

const currentImage = computed(() => {
  return props.project.images[currentImageIndex.value];
});

const descriptionParagraphs = computed(() => {
  return props.project.description
    .split("\n")
    .filter((paragraph) => paragraph.trim());
});

const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % props.project.images.length;
};

const selectImage = (index: number) => {
  currentImageIndex.value = index;
  resetSlideshow();
};

const resetSlideshow = () => {
  clearInterval(slideshowTimer);
  startSlideshow();
};

const startSlideshow = () => {
  slideshowTimer = setInterval(nextImage, 10000); // 10 seconds
};

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  clearInterval(slideshowTimer);
});
</script>

<style scoped>
.project-hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(13, 59, 102, 0.8) 0%,
    rgba(13, 59, 102, 0.6) 50%,
    rgba(13, 59, 102, 0.4) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content-container {
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 300;
  color: white;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.project-description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
}

.description-paragraph {
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.slideshow-indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 0.75rem;
}

.indicator {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.indicator:hover {
  border-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.indicator.active {
  border-color: white;
  background-color: white;
}

.indicator-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.indicator.active .indicator-dot {
  background-color: var(--color-blue-primary);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .project-title {
    font-size: 3.5rem;
  }

  .description-paragraph {
    font-size: 1.125rem;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 2.5rem;
  }

  .description-paragraph {
    font-size: 1rem;
  }

  .slideshow-indicators {
    bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 2rem;
  }

  .description-paragraph {
    font-size: 0.9rem;
  }

  .slideshow-indicators {
    bottom: 1rem;
    gap: 0.5rem;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }
}
</style>
