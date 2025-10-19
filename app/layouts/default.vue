<script setup lang="ts"></script>

<template>
  <div class="bg-white min-h-screen flex flex-col">
    <div class="hero-header">
      <UINavigation />
    </div>
    <div class="flex-1">
      <slot />
    </div>
    <UIFooter />
  </div>
</template>

<style scoped>
.hero-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
}
</style>
