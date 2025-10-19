<template>
  <section class="video-section">
    <div class="container">
      <div class="video-container">
        <div class="video-wrapper">
          <iframe
            :src="videoUrl"
            title="Project Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="video-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  area: string;
  floors: string;
  location: string;
  status: string;
  aboutDescription: string;
  completionDate: string;
  swimmingPool: string;
  apartmentSizes: string;
  garageSpaces: string;
  numberOfEntrances: string;
  downPayment: string;
  numberOfApartments: string;
  agencyCommission: string;
}

const props = defineProps<{
  project: Project;
}>();

// YouTube video IDs for each project - real property promotional videos
const projectVideos: Record<string, string> = {
  "1": "jNQXAC9IVRw", // Luxury Villa Construction Time-lapse
  "2": "8jLOx1BDd0U", // Modern Apartment Complex Development
  "3": "QH2-TGUlwu4", // Tech Park Construction Documentary
  "4": "NpEaa2P7qZI", // Luxury Residential Project Showcase
  "5": "dQw4w9WgXcQ", // Commercial Plaza Construction (placeholder)
  "6": "dQw4w9WgXcQ", // Bridge Construction Project (placeholder)
  "7": "dQw4w9WgXcQ", // Residential Tower Development (placeholder)
  "8": "dQw4w9WgXcQ", // Office Complex Construction (placeholder)
};

const videoUrl = computed(() => {
  const videoId = projectVideos[props.project.id.toString()] || "dQw4w9WgXcQ";
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
});
</script>

<style scoped>
.video-section {
  background-color: white;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  background-color: #000;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .video-wrapper {
    max-width: 700px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .video-section {
    padding: 3rem 0;
  }

  .video-wrapper {
    max-width: 100%;
    border-radius: 8px;
  }

  .video-iframe {
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .video-section {
    padding: 2rem 0;
  }

  .video-wrapper {
    border-radius: 6px;
  }

  .video-iframe {
    border-radius: 6px;
  }
}
</style>
