<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <ContactHero />

    <!-- Contact Form Section -->
    <ContactForm />

    <!-- Contact Information Section -->
    <ContactInfo />

    <!-- Map Section -->
    <ContactMap />
  </div>
</template>

<script lang="ts" setup>
// SEO
useHead({
  title: "Contact Us - Sri Devi Constructions",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Sri Devi Constructions. Schedule a site visit, send an enquiry, or learn more about our construction services. We're here to help with your project needs.",
    },
  ],
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
