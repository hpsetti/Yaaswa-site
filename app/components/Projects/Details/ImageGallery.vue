<template>
  <section class="image-gallery-section">
    <div class="container">
      <div class="gallery-container">
        <!-- Navigation Arrow Left -->
        <button
          class="nav-arrow nav-arrow-left"
          :disabled="currentImageIndex === 0"
          @click="previousImage"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Image Slideshow -->
        <div class="slideshow-container">
          <div class="image-grid">
            <div
              v-for="(image, index) in currentImageSet"
              :key="index"
              class="image-panel"
              :class="{ 'main-panel': index === 1 }"
              @click="openImagePopup(image, index)"
            >
              <img
                :src="image"
                :alt="`Project image ${index + 1}`"
                class="gallery-image"
                @error="handleImageError"
              />
            </div>
          </div>

          <!-- Disclaimer Text -->
          <div class="disclaimer-overlay">
            <p class="disclaimer-text">
              The photographs are only an approximate representation of the
              project and may not fully correspond to the actual construction.
            </p>
          </div>
        </div>

        <!-- Navigation Arrow Right -->
        <button
          class="nav-arrow nav-arrow-right"
          :disabled="currentImageIndex >= totalImageSets - 1"
          @click="nextImage"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- Dots Indicator -->
      <div class="dots-indicator">
        <button
          v-for="(set, index) in imageSets"
          :key="index"
          :class="['dot', { active: currentImageIndex === index }]"
          @click="goToImageSet(index)"
        />
      </div>
    </div>

    <!-- Image Popup Modal -->
    <div v-if="showPopup" class="image-popup" @click="closeImagePopup">
      <div class="popup-content" @click.stop>
        <button class="popup-close" @click="closeImagePopup">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <img :src="popupImage" :alt="popupImageAlt" class="popup-image" />
        <div class="popup-navigation">
          <button
            class="popup-nav popup-prev"
            :disabled="popupImageIndex === 0"
            @click="previousPopupImage"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            class="popup-nav popup-next"
            :disabled="popupImageIndex >= allImages.length - 1"
            @click="nextPopupImage"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
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
  aboutDescription: string;
  completionDate: string;
  swimmingPool: string;
  apartmentSizes: string;
  garageSpaces: string;
  numberOfEntrances: string;
  downPayment: string;
  numberOfApartments: string;
  agencyCommission: string;
}

const props = defineProps<{
  project: Project;
}>();

// Load project details from composable
const { getProjectDetails } = useProjectDetails();
const projectDetails = computed(() => {
  return getProjectDetails(props.project.id);
});

const currentImageIndex = ref(0);
const showPopup = ref(false);
const popupImage = ref("");
const popupImageAlt = ref("");
const popupImageIndex = ref(0);

// Get all images from composable, fallback to project images
const allImages = computed(() => {
  return projectDetails.value?.galleryImages || props.project.images;
});

// Create image sets of 3 images each for the slideshow
const imageSets = computed(() => {
  const sets = [];
  const images = allImages.value;

  for (let i = 0; i < images.length; i += 3) {
    const set = images.slice(i, i + 3);
    // Pad with additional images if needed to always have 3 images
    while (set.length < 3) {
      const imageToAdd = images[set.length % images.length];
      if (imageToAdd) {
        set.push(imageToAdd);
      }
    }
    sets.push(set);
  }

  return sets;
});

const currentImageSet = computed(() => {
  return imageSets.value[currentImageIndex.value] || [];
});

const totalImageSets = computed(() => {
  return imageSets.value.length;
});

const nextImage = () => {
  if (currentImageIndex.value < totalImageSets.value - 1) {
    currentImageIndex.value++;
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const goToImageSet = (index: number) => {
  currentImageIndex.value = index;
};

const openImagePopup = (image: string | undefined, index: number) => {
  if (!image) return;
  popupImage.value = image;
  popupImageAlt.value = `Project image ${index + 1}`;
  popupImageIndex.value = currentImageIndex.value * 3 + index;
  showPopup.value = true;
};

const closeImagePopup = () => {
  showPopup.value = false;
};

const nextPopupImage = () => {
  if (popupImageIndex.value < allImages.value.length - 1) {
    popupImageIndex.value++;
    const nextImage = allImages.value[popupImageIndex.value];
    if (nextImage) {
      popupImage.value = nextImage;
      popupImageAlt.value = `Project image ${popupImageIndex.value + 1}`;
    }
  }
};

const previousPopupImage = () => {
  if (popupImageIndex.value > 0) {
    popupImageIndex.value--;
    const prevImage = allImages.value[popupImageIndex.value];
    if (prevImage) {
      popupImage.value = prevImage;
      popupImageAlt.value = `Project image ${popupImageIndex.value + 1}`;
    }
  }
};

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src =
    "https://via.placeholder.com/400x300/f8f9fa/6c757d?text=Project+Image";
};

// Keyboard navigation for popup
onMounted(() => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (!showPopup.value) return;

    if (event.key === "Escape") {
      closeImagePopup();
    } else if (event.key === "ArrowLeft") {
      previousPopupImage();
    } else if (event.key === "ArrowRight") {
      nextPopupImage();
    }
  };

  document.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
  });
});
</script>

<style scoped>
.image-gallery-section {
  background-color: white;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.gallery-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-arrow {
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  flex-shrink: 0;
}

.nav-arrow:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slideshow-container {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 0;
  height: 400px;
}

.image-panel {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* Main panel is larger - handled by grid-template-columns */

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.image-panel:hover .gallery-image {
  transform: scale(1.05);
}

.disclaimer-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1rem;
  z-index: 5;
}

.disclaimer-text {
  color: white;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  text-align: center;
  opacity: 0.9;
}

.dots-indicator {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--color-blue-primary);
  transform: scale(1.2);
}

.dot:hover {
  background: #cbd5e0;
}

.dot.active:hover {
  background: var(--color-blue-primary);
}

/* Image Popup Styles */
.image-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.popup-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
}

.popup-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.popup-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.popup-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

.popup-nav {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
}

.popup-nav:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.popup-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .image-grid {
    height: 350px;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .image-gallery-section {
    padding: 3rem 0;
  }

  .gallery-container {
    gap: 0.5rem;
  }

  .image-grid {
    height: 300px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .nav-arrow {
    width: 36px;
    height: 36px;
  }

  .disclaimer-overlay {
    padding: 1.5rem 1rem 0.75rem;
  }

  .disclaimer-text {
    font-size: 0.8rem;
  }

  .image-popup {
    padding: 1rem;
  }

  .popup-image {
    max-height: 70vh;
  }
}

@media (max-width: 480px) {
  .image-grid {
    height: 250px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .nav-arrow {
    width: 32px;
    height: 32px;
  }

  .disclaimer-overlay {
    padding: 1rem 0.75rem 0.5rem;
  }

  .disclaimer-text {
    font-size: 0.75rem;
  }

  .popup-nav {
    width: 40px;
    height: 40px;
  }

  .popup-close {
    width: 36px;
    height: 36px;
    top: -36px;
  }
}
</style>
