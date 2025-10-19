<template>
  <section class="selected-projects-section">
    <div class="container mx-auto px-6 py-20">
      <!-- Header Section -->
      <div class="projects-header">
        <h2 class="projects-title">Some Selected Projects</h2>
        <button class="see-all-button">See All</button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <div class="project-image-container">
            <img
              :src="project.image"
              :alt="project.title"
              class="project-image"
              @error="handleImageError"
            />
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-details">
              <span class="project-location">{{ project.location }}</span>
              <span class="project-year">{{ project.year }}</span>
              <span class="project-type">{{ project.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const projects = ref([
  {
    title: "Modern Residential Complex",
    location: "Hyderabad",
    year: "2023",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Commercial Office Tower",
    location: "Bangalore",
    year: "2022",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Highway Infrastructure",
    location: "Chennai",
    year: "2021",
    type: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Luxury Villa Project",
    location: "Mumbai",
    year: "2023",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Shopping Mall Complex",
    location: "Delhi",
    year: "2022",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Bridge Construction",
    location: "Kolkata",
    year: "2021",
    type: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&crop=center",
  },
]);

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src =
    "https://via.placeholder.com/400x300/f8f9fa/6c757d?text=Construction+Project";
};
</script>

<style scoped>
.selected-projects-section {
  background-color: #f8f9fa;
  min-height: 600px;
}

.container {
  max-width: 1200px;
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
}

.projects-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  color: #2d3748;
  margin: 0;
  line-height: 1.2;
}

.see-all-button {
  background-color: #2d3748;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.see-all-button:hover {
  background-color: var(--color-blue-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(45, 55, 72, 0.3);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.project-image-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: #e2e8f0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.project-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.project-location,
.project-year,
.project-type {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.project-type {
  color: var(--color-blue-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .projects-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .projects-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .projects-title {
    font-size: 1.75rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-image-container {
    height: 200px;
  }

  .project-content {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .projects-title {
    font-size: 1.5rem;
  }

  .see-all-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
  }

  .project-image-container {
    height: 180px;
  }

  .project-content {
    padding: 1rem;
  }

  .project-title {
    font-size: 1.125rem;
  }
}
</style>
