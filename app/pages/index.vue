<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

definePageMeta({
  layout: "home",
});

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Docs",
    to: "/docs/getting-started",
    icon: "i-lucide-book-open",
    active: route.path.startsWith("/docs/getting-started"),
  },
  {
    label: "Components",
    to: "/docs/components",
    icon: "i-lucide-box",
    active: route.path.startsWith("/docs/components"),
  },
  {
    label: "Figma",
    icon: "i-simple-icons-figma",
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: "Releases",
    icon: "i-lucide-rocket",
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
]);

// onMounted(async () => {
//   await nextTick();

// });

// const target = ref<HTMLElement | null>(null);
// // const io = null;

// onMounted(async () => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           console.log("User is at the correct window view!");
//           // You can trigger animations, tracking, etc.
//         }
//       });
//     },
//     { threshold: 0.5 }
//   ); // 0.5 means 50% of element should be visible

//   observer.observe(target.value);
// });
</script>

<template>
  <div class="">
    <div class="home-hero">
      <UHeader
        :toggle="{
          color: 'neutral',
          variant: 'subtle',
          class: 'rounded-full',
        }"
        class="bg-transparent z-10"
      >
        <template #title> Sri Devi Constructions </template>

        <UNavigationMenu :items="items" />

        <template #right>
          <!-- <UColorModeButton /> -->

          <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
            <UButton
              color="neutral"
              variant="ghost"
              to="https://github.com/nuxt/ui"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="GitHub"
            />
          </UTooltip>
        </template>

        <template #body>
          <UNavigationMenu
            :items="items"
            orientation="vertical"
            class="-mx-2.5"
          />
        </template>
      </UHeader>
      <div class="h-full">
        <HomeHeroCarousel />
      </div>
    </div>
    <div class="home-content">
      <div class="home-content-inner">
        <div class="home-content-inner-left">
          <!-- <h1 id="my-section" ref="target" class="odometer" data-target="5000">
            Welcome to the home page
          </h1> -->
          <UICounter
            :end="12345"
            :duration="1800"
            :format="true"
            :decimals="0"
          />
        </div>
        <div class="home-content-inner-right">
          <h1>Welcome to the home page</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home-hero {
  background-image: url("~/assets/images/HeroImages/hero-image-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}
</style>
