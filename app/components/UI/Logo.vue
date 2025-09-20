<script setup lang="ts">
defineProps<{
  size: "sm" | "md" | "lg";
}>();
</script>

<template>
  <div>
    <img src="/logo.svg" class="h-6 w-auto" :class="size" />
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
