<script setup lang="ts"></script>

<template>
  <div class="bg-white min-h-screen">
    <div>
      <div class="hero-header">
        <UINavigation />
      </div>
      <slot />
    </div>
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
