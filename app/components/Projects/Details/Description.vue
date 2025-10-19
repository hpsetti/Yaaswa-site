<template>
  <section class="project-details-section">
    <div class="container">
      <div class="details-layout">
        <!-- About the Project Section -->
        <div class="about-section">
          <h2 class="section-title">About the Project</h2>
          <p class="about-description">
            {{ projectDetails?.aboutDescription || project.aboutDescription }}
          </p>
        </div>

        <!-- General Information Section -->
        <div class="general-info-section">
          <h2 class="section-title">General Information</h2>
          <div class="info-grid">
            <div
              v-for="(info, index) in projectDetails?.generalInfo || []"
              :key="index"
              class="info-item"
            >
              <span class="info-label">{{ info.label }}</span>
              <span class="info-value">{{ info.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface ProjectDetails {
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
  project: ProjectDetails;
}>();

// Load project details from composable
const { getProjectDetails } = useProjectDetails();
const projectDetails = computed(() => {
  return getProjectDetails(props.project.id);
});
</script>

<style scoped>
.project-details-section {
  background-color: white;
  padding: 4rem 0;
  min-height: 600px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.details-layout {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.about-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  line-height: 1.2;
}

.about-description {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 400;
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

.general-info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-grid {
  background-color: #1a202c;
  padding: 2rem;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 400;
  color: white;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .details-layout {
    gap: 3rem;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .project-details-section {
    padding: 3rem 0;
  }

  .details-layout {
    gap: 2rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .about-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .project-details-section {
    padding: 2rem 0;
  }

  .info-grid {
    padding: 1rem;
  }

  .info-item {
    gap: 0.25rem;
  }

  .info-label {
    font-size: 0.8rem;
  }

  .info-value {
    font-size: 0.9rem;
  }
}
</style>
