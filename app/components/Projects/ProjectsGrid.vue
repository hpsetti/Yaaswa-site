<template>
  <section class="projects-grid-section">
    <div class="container">
      <!-- Header -->
      <div class="projects-header">
        <h2 class="projects-title">Our Projects</h2>
        <div class="filter-tabs">
          <button
            v-for="status in statusFilters"
            :key="status.value"
            :class="['filter-tab', { active: activeFilter === status.value }]"
            @click="setActiveFilter(status.value)"
          >
            {{ status.label }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <!-- Project Image with Status Badge -->
          <div class="project-image-container">
            <img
              :src="project.image"
              :alt="project.name"
              class="project-image"
              @error="handleImageError"
            />
            <div
              :class="[
                'status-badge',
                project.status.toLowerCase().replace(' ', '-'),
              ]"
            >
              {{ project.status }}
            </div>
          </div>

          <!-- Project Details -->
          <div class="project-details">
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="project-info">
              <div class="info-item">
                <span class="info-label">Area:</span>
                <span class="info-value">{{ project.area }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Floors:</span>
                <span class="info-value">{{ project.floors }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Location:</span>
                <span class="info-value">{{ project.location }}</span>
              </div>
            </div>
            <button class="view-button" @click="navigateToProject(project.id)">
              VIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const activeFilter = ref("all");

const statusFilters = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "In Progress", value: "in progress" },
  { label: "Proposed", value: "proposed" },
];

const projects = ref([
  {
    id: 1,
    name: "Villa Klisura",
    area: "2740m²",
    floors: "B + G + 2 Floors",
    location: "Hyderabad",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Solin 4",
    area: "2808m²",
    floors: "B + G + 2 Floors",
    location: "Bangalore",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Tech Park Complex",
    area: "4500m²",
    floors: "B + G + 4 Floors",
    location: "Chennai",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Luxury Residences",
    area: "3200m²",
    floors: "B + G + 3 Floors",
    location: "Mumbai",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Commercial Plaza",
    area: "5200m²",
    floors: "B + G + 5 Floors",
    location: "Delhi",
    status: "Proposed",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "Bridge Infrastructure",
    area: "1800m²",
    floors: "Single Level",
    location: "Kolkata",
    status: "Proposed",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 7,
    name: "Residential Tower",
    area: "3800m²",
    floors: "B + G + 6 Floors",
    location: "Pune",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 8,
    name: "Office Complex",
    area: "2900m²",
    floors: "B + G + 3 Floors",
    location: "Ahmedabad",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=center",
  },
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projects.value;
  }
  return projects.value.filter(
    (project) => project.status.toLowerCase() === activeFilter.value
  );
});

const setActiveFilter = (filter: string) => {
  activeFilter.value = filter;
};

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src =
    "https://via.placeholder.com/400x300/f8f9fa/6c757d?text=Construction+Project";
};

const navigateToProject = (projectId: number) => {
  navigateTo(`/projects/${projectId}`);
};
</script>

<style scoped>
.projects-grid-section {
  background-color: #f8f9fa;
  padding: 4rem 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.projects-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  color: #2d3748;
  margin: 0;
  line-height: 1.2;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  background-color: white;
  padding: 0.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-tab {
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  color: #6b7280;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.filter-tab:hover {
  color: #2d3748;
  background-color: #f3f4f6;
}

.filter-tab.active {
  background-color: var(--color-blue-primary);
  color: white;
  box-shadow: 0 2px 4px rgba(13, 59, 102, 0.3);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.project-image-container {
  position: relative;
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

.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  backdrop-filter: blur(10px);
}

.status-badge.completed {
  background-color: rgba(34, 197, 94, 0.9);
  color: white;
}

.status-badge.in-progress {
  background-color: rgba(245, 158, 11, 0.9);
  color: white;
}

.status-badge.proposed {
  background-color: rgba(239, 68, 68, 0.9);
  color: white;
}

.project-details {
  background-color: #1a202c;
  color: white;
  padding: 1.5rem;
  position: relative;
}

.project-name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.info-value {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: white;
  font-weight: 600;
}

.view-button {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.view-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .projects-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .projects-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .projects-title {
    font-size: 1.75rem;
  }

  .filter-tabs {
    width: 100%;
    justify-content: center;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-image-container {
    height: 200px;
  }

  .project-details {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .projects-title {
    font-size: 1.5rem;
  }

  .filter-tab {
    padding: 0.625rem 1rem;
    font-size: 0.8rem;
  }

  .project-image-container {
    height: 180px;
  }

  .project-details {
    padding: 1rem;
  }

  .project-name {
    font-size: 1.125rem;
  }

  .view-button {
    bottom: 1rem;
    right: 1rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
}
</style>
