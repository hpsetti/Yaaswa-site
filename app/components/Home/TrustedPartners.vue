<template>
  <section class="trusted-partners-section">
    <div class="container mx-auto px-6 py-16">
      <!-- Header -->
      <div class="partners-header">
        <h2 class="partners-title">Our Trusted Partners</h2>
      </div>

      <!-- Partners Carousel -->
      <div class="partners-carousel-container">
        <div ref="partnersTrack" class="partners-track">
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="partner-logo"
          >
            <UAvatar
              :src="partner.logo"
              :alt="partner.name"
              size="lg"
              class="logo-image"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const partnersTrack = ref<HTMLElement | null>(null);
let scrollInterval: NodeJS.Timeout | null = null;

const partners = ref([
  {
    name: "Prestige Group",
    logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=80&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "DLF Limited",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Godrej Properties",
    logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=80&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Brigade Group",
    logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=80&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Sobha Limited",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Phoenix Mills",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Lodha Group",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=80&fit=crop&crop=center&auto=format&q=80",
  },
  {
    name: "Mahindra Lifespaces",
    logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=80&fit=crop&crop=center&auto=format&q=80",
  },
]);

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  console.log("Image failed to load:", img.src);
  img.src = "https://via.placeholder.com/200x80/2d3748/ffffff?text=Partner";
};

const startAutoScroll = () => {
  scrollInterval = setInterval(() => {
    if (partnersTrack.value) {
      partnersTrack.value.scrollLeft += 1;

      // Reset scroll position when reaching the end
      if (
        partnersTrack.value.scrollLeft >=
        partnersTrack.value.scrollWidth - partnersTrack.value.clientWidth
      ) {
        setTimeout(() => {
          if (partnersTrack.value) {
            partnersTrack.value.scrollLeft = 0;
          }
        }, 2000);
      }
    }
  }, 20);
};

const stopAutoScroll = () => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
};

onMounted(() => {
  // Start auto-scroll after a short delay
  setTimeout(() => {
    startAutoScroll();
  }, 1000);
});

onBeforeUnmount(() => {
  stopAutoScroll();
});
</script>

<style scoped>
.trusted-partners-section {
  background-color: white;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
}

.partners-header {
  text-align: center;
  margin-bottom: 3rem;
}

.partners-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  line-height: 1.2;
}

.partners-carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  padding: 2rem 0;
}

.partners-track {
  display: flex;
  gap: 3rem;
  padding: 0 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.partners-track::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.partner-logo {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  min-width: 200px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding: 1rem;
  overflow: hidden;
}

.partner-logo:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.logo-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  filter: grayscale(100%) opacity(0.7);
  transition: filter 0.3s ease;
  display: block;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.partner-logo:hover .logo-image {
  filter: grayscale(0%) opacity(1);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .partners-title {
    font-size: 2rem;
  }

  .partners-track {
    gap: 2rem;
    padding: 0 1.5rem;
  }

  .partner-logo {
    min-width: 180px;
    height: 70px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .partners-title {
    font-size: 1.75rem;
  }

  .partners-header {
    margin-bottom: 2rem;
  }

  .partners-carousel-container {
    padding: 1.5rem 0;
  }

  .partners-track {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .partner-logo {
    min-width: 150px;
    height: 60px;
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .partners-title {
    font-size: 1.5rem;
  }

  .partners-track {
    gap: 1rem;
  }

  .partner-logo {
    min-width: 120px;
    height: 50px;
    padding: 0.5rem;
  }
}
</style>
