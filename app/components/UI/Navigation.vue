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
</script>

<template>
  <UContainer class="navigation-header">
    <div class="flex justify-between items-center w-full py-4">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <h2
          class="text-white text-2xl font-semibold font-inter tracking-tight m-0"
        >
          {{ logoText }}
        </h2>
      </div>

      <!-- Navigation Menu -->
      <nav class="hidden md:flex gap-8 items-center">
        <UButton
          v-for="item in navItems"
          :key="item.label"
          :to="item.href"
          variant="ghost"
          color="neutral"
          size="sm"
          class="text-white hover:text-gray-300 hover:bg-transparent transition-opacity duration-300"
        >
          {{ item.label }}
        </UButton>
      </nav>

      <!-- Contact Button -->
      <div class="flex-shrink-0">
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="sm"
          variant="solid"
          color="neutral"
          class="bg-white text-gray-800 hover:bg-gray-100"
          to="/contact-us"
        >
          Contact Us
        </UButton>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <UButton
          icon="i-lucide-menu"
          variant="ghost"
          color="neutral"
          size="sm"
          class="text-white"
        />
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div class="md:hidden mt-4 pb-4">
      <div class="flex flex-col gap-2">
        <UButton
          v-for="item in navItems"
          :key="item.label"
          :to="item.href"
          variant="ghost"
          color="neutral"
          size="sm"
          class="text-white hover:opacity-80 transition-opacity duration-300 justify-start"
        >
          {{ item.label }}
        </UButton>
      </div>
    </div>
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
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .navigation-header :deep(.container) {
    padding: 0 1rem;
  }
}
</style>
