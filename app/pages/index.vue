<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

// Background image state
const currentBackgroundImage = ref("/images/HeroImages/hero-image-1.jpg");
const nextBackgroundImage = ref("");
const isTransitioning = ref(false);

// Handle background change from carousel
const handleBackgroundChange = (backgroundImage: string) => {
  console.log("Background changing to:", backgroundImage);

  if (backgroundImage === currentBackgroundImage.value) return;

  isTransitioning.value = true;
  nextBackgroundImage.value = backgroundImage;

  // Start the transition
  setTimeout(() => {
    currentBackgroundImage.value = backgroundImage;
    nextBackgroundImage.value = "";
    isTransitioning.value = false;
  }, 500); // Half of the transition duration
};

// Computed styles for dual background layers
const currentBackgroundStyle = computed(() => ({
  backgroundImage: `url(${currentBackgroundImage.value})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

const nextBackgroundStyle = computed(() => ({
  backgroundImage: nextBackgroundImage.value
    ? `url(${nextBackgroundImage.value})`
    : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));
</script>

<template>
  <div class="">
    <div class="home-hero">
      <!-- Current background layer -->
      <div
        class="background-layer current-background"
        :style="currentBackgroundStyle"
      />

      <!-- Next background layer for transition -->
      <div
        class="background-layer next-background"
        :style="nextBackgroundStyle"
        :class="{ transitioning: isTransitioning }"
      />

      <!-- Content layer -->
      <div class="content-layer">
        <div class="h-full">
          <HomeHeroCarousel @background-change="handleBackgroundChange" />
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <HomeStatsSection />

    <!-- Trusted Partners -->
    <HomeTrustedPartners />
    <!-- Selected Projects -->
    <HomeSelectedProjects />

    <!-- Our Story Carousel -->
    <HomeOurStoryCarousel />

    <!-- Testimonials -->
    <HomeTestimonials />

    <!-- News and Updates -->
    <HomeNewsroomSection />
  </div>
</template>

<style>
.home-hero {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.hero-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
}

/* Background layers */
.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.current-background {
  z-index: 1;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.next-background {
  z-index: 2;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.next-background.transitioning {
  opacity: 1;
}

/* Content layer */
.content-layer {
  position: relative;
  z-index: 10;
  height: 100%;
  width: 100%;
}

/* Dark overlay for better text readability */
.content-layer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
}
</style>
