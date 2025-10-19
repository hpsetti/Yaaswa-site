<script setup lang="ts">
// Define emits
const emit = defineEmits<{
  backgroundChange: [backgroundImage: string];
}>();

const sections = ref([
  {
    id: 1,
    title: "Mining",
    heading:
      "Infrastructure development, mineral processing and contract solutions for mining markets",
    description:
      "Sri Devi Constructions specializes in mine management, production, infrastructure construction, maintenance and contract mining ventures, offering some of the most highly-skilled and experienced professionals in the industry.",
    backgroundImage: "/images/HeroImages/hero-image-1.jpg",
  },
  {
    id: 2,
    title: "Power",
    heading:
      "Power generation, transmission and distribution, renewable energy and energy storage",
    description:
      "Sri Devi Constructions specializes in power generation, transmission and distribution, renewable energy and energy storage, offering some of the most highly-skilled and experienced professionals in the industry.",
    backgroundImage: "/images/HeroImages/hero-image-2.jpg",
  },
  {
    id: 3,
    title: "Petroleum",
    heading: "Oil and gas exploration, production and refining",
    description:
      "Sri Devi Constructions specializes in oil and gas exploration, production and refining, offering some of the most highly-skilled and experienced professionals in the industry.",
    backgroundImage: "/images/HeroImages/hero-image-3.jpg",
  },
  {
    id: 4,
    title: "Telecom",
    heading: "Telecom infrastructure, network and services",
    description:
      "Sri Devi Constructions specializes in telecom infrastructure, network and services, offering some of the most highly-skilled and experienced professionals in the industry.",
    backgroundImage: "/images/HeroImages/hero-image-4.jpg",
  },
  {
    id: 5,
    title: "Irrigation",
    heading: "Irrigation infrastructure, network and services",
    description:
      "Sri Devi Constructions specializes in irrigation infrastructure, network and services, offering some of the most highly-skilled and experienced professionals in the industry.",
    backgroundImage: "/images/HeroImages/hero-image-5.jpg",
  },
]);

const currentSection = ref(0);
const isTransitioning = ref(false);
let timer: ReturnType<typeof setInterval>;

onMounted(() => {
  timer = setInterval(() => {
    nextSection();
  }, 5000);

  onUnmounted(() => {
    clearInterval(timer);
  });
});

const activeSection = computed(() => {
  return sections.value[currentSection.value];
});

// Watch for section changes and emit background change
watch(
  currentSection,
  (newIndex) => {
    const section = sections.value[newIndex];
    if (section?.backgroundImage) {
      emit("backgroundChange", section.backgroundImage);
    }
  },
  { immediate: true }
);

const nextSection = () => {
  if (isTransitioning.value) return;

  isTransitioning.value = true;
  currentSection.value = (currentSection.value + 1) % sections.value.length;

  setTimeout(() => {
    isTransitioning.value = false;
  }, 800); // Match transition duration
};

const selectSection = (e: Event) => {
  if (isTransitioning.value) return;

  const target = e.target as HTMLElement;
  console.log(target.textContent);
  const selectedItem = sections.value.filter((item) => {
    return item.title === target.textContent;
  });
  console.log(selectedItem);

  if (selectedItem.length > 0 && selectedItem[0]) {
    isTransitioning.value = true;
    currentSection.value = selectedItem[0].id - 1;

    setTimeout(() => {
      isTransitioning.value = false;
    }, 800);

    clearInterval(timer);

    // Restart timer after 5 seconds
    setTimeout(() => {
      timer = setInterval(() => {
        nextSection();
      }, 5000);
    }, 5000);
  }
};
</script>

<template>
  <div class="hero-container">
    <!-- Header Section with Logo, Navigation, and Contact -->
    <!-- <div class="hero-header">
      <UINavigation />
    </div> -->

    <!-- Main Content Section -->
    <div class="hero-content">
      <div class="content-container">
        <Transition name="slide-fade" mode="out-in">
          <div :key="currentSection" class="content-wrapper">
            <h1 class="main-heading">
              {{ activeSection?.heading }}
            </h1>
            <p class="main-description">
              {{ activeSection?.description }}
            </p>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Navigation Options -->
    <div class="hero-navigation">
      <div class="nav-options">
        <div v-for="section in sections" :key="section.id">
          <button
            class="nav-button"
            :class="
              activeSection?.title === section?.title
                ? 'nav-button-active'
                : 'nav-button-inactive'
            "
            @click="selectSection"
          >
            {{ section.title }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Main Container */
.hero-container {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
}

/* Header Section */
.hero-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
}

/* Main Content Section */
.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.content-container {
  position: relative;
  overflow: hidden;
  text-align: center;
  max-width: 1200px;
  width: 100%;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.main-heading {
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin: 0;
  max-width: 800px;
}

.main-description {
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
  opacity: 0.95;
}

/* Navigation Options */
.hero-navigation {
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
}

.nav-options {
  display: flex;
  gap: 1.5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  padding-top: 1.5rem;
}

/* Slide and Fade Transition */
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Navigation Button Styles */
.nav-button {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  font-family: "Inter", sans-serif;
}

.nav-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.nav-button:hover::before {
  left: 100%;
}

.nav-button-inactive {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-button-inactive:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.nav-button-active {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.nav-button-active:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Focus states for accessibility */
.nav-button:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container {
    padding: 1rem;
  }

  .main-heading {
    font-size: 2.5rem;
  }

  .main-description {
    font-size: 1rem;
  }

  .nav-options {
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-button {
    padding: 8px 16px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .main-heading {
    font-size: 2rem;
  }
}
</style>
