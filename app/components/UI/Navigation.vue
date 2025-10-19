<script setup lang="ts">
// Define props for customization
interface Props {
  logoText?: string;
  navItems?: Array<{
    label: string;
    href: string;
  }>;
}

const _props = withDefaults(defineProps<Props>(), {
  logoText: "Sri Devi Constructions",
  navItems: () => [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    // { label: "", href: "/team" },
    { label: "Newsroom", href: "/newsroom" },
  ],
});

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};

// Close mobile menu when clicking outside
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu when route changes
watch(
  () => useRoute().path,
  () => {
    isMobileMenuOpen.value = false;
  }
);

// Click outside handler
const navigationRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const handleClickOutside = (event: Event) => {
    if (
      navigationRef.value &&
      !navigationRef.value.contains(event.target as Node)
    ) {
      isMobileMenuOpen.value = false;
    }
  };

  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleKeydown);
  });
});
</script>

<template>
  <UContainer
    ref="navigationRef"
    class="navigation-header"
    :class="{ 'mobile-menu-open': isMobileMenuOpen }"
  >
    <div class="flex justify-between items-center w-full py-3 lg:py-4">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <NuxtLink to="/" class="block">
          <h2
            class="text-white text-xl sm:text-2xl font-semibold font-inter tracking-tight m-0 transition-colors duration-300 hover:text-gray-200"
          >
            {{ logoText }}
          </h2>
        </NuxtLink>
      </div>

      <!-- Desktop Navigation Menu -->
      <nav class="hidden lg:flex gap-6 xl:gap-8 items-center">
        <UButton
          v-for="item in navItems"
          :key="item.label"
          :to="item.href"
          variant="ghost"
          color="neutral"
          size="sm"
          class="text-white hover:text-gray-300 hover:bg-transparent transition-all duration-300 px-3 py-2"
        >
          {{ item.label }}
        </UButton>
      </nav>

      <!-- Desktop Contact Button -->
      <div class="hidden lg:flex flex-shrink-0">
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="sm"
          variant="solid"
          color="neutral"
          class="bg-white text-gray-800 hover:bg-gray-100 transition-all duration-300"
          to="/contact-us"
        >
          Contact Us
        </UButton>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <UButton
          :icon="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          variant="ghost"
          color="neutral"
          size="sm"
          class="text-white hover:bg-white/10 transition-all duration-300"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          @click="toggleMobileMenu"
        />
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="lg:hidden mt-2 pb-4"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div
          class="flex flex-col gap-1 bg-white/5 backdrop-blur-sm rounded-lg p-4"
        >
          <!-- Mobile Navigation Links -->
          <UButton
            v-for="item in navItems"
            :key="item.label"
            :to="item.href"
            variant="ghost"
            color="neutral"
            size="sm"
            class="text-white hover:bg-white/10 transition-all duration-300 justify-start px-4 py-3 rounded-lg"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </UButton>

          <!-- Mobile Contact Button -->
          <div class="pt-2 mt-2 border-t border-white/20">
            <UButton
              trailing-icon="i-lucide-arrow-right"
              size="sm"
              variant="solid"
              color="neutral"
              class="w-full bg-white text-gray-800 hover:bg-gray-100 transition-all duration-300 justify-center"
              to="/contact-us"
              @click="closeMobileMenu"
            >
              Contact Us
            </UButton>
          </div>
        </div>
      </div>
    </Transition>
  </UContainer>
</template>

<style scoped>
.navigation-header {
  position: relative;
  z-index: 20;
}

/* Ensure proper spacing and positioning */
.navigation-header :deep(.container) {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Responsive breakpoints */
@media (min-width: 640px) {
  .navigation-header :deep(.container) {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .navigation-header :deep(.container) {
    padding: 0 2rem;
  }
}

/* Mobile menu overlay for better UX */
@media (max-width: 1023px) {
  .navigation-header {
    position: relative;
  }

  /* Add backdrop blur effect for mobile menu */
  .navigation-header::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: -1;
  }

  .navigation-header.mobile-menu-open::after {
    opacity: 1;
  }
}

/* Smooth transitions for all interactive elements */
.navigation-header * {
  transition: all 0.3s ease;
}

/* Focus states for accessibility */
.navigation-header button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

/* Hover effects for desktop */
@media (min-width: 1024px) {
  .navigation-header button:hover {
    transform: translateY(-1px);
  }
}

/* Mobile menu animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
