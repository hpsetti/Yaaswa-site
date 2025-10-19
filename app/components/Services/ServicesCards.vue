<template>
  <section class="services-cards-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Construction Services</h2>
        <p class="section-subtitle">
          Comprehensive solutions across all construction sectors
        </p>
      </div>

      <div class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div class="card-header">
            <div class="service-icon">
              <UIcon :name="service.icon" class="icon" />
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
          </div>

          <div class="card-content">
            <p class="service-description">{{ service.description }}</p>

            <div class="service-features">
              <h4 class="features-title">Key Features:</h4>
              <ul class="features-list">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="feature-item"
                >
                  <UIcon name="i-heroicons-check-circle" class="check-icon" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="service-stats">
              <div class="stat">
                <span class="stat-number"
                  >{{ service.projectsCompleted }}+</span
                >
                <span class="stat-label">Projects</span>
              </div>
              <div class="stat">
                <span class="stat-number">{{ service.experience }}+</span>
                <span class="stat-label">Years</span>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <UButton
              :to="service.link"
              variant="outline"
              size="sm"
              class="learn-more-btn"
            >
              Learn More
              <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Use content data composable
const { services } = useContentData();
</script>

<style scoped>
.services-cards-section {
  background-color: #f8f9fa;
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--color-blue-primary);
}

.card-header {
  padding: 2rem 2rem 1rem;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: var(--color-blue-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(13, 59, 102, 0.2);
}

.icon {
  width: 40px;
  height: 40px;
  color: white;
}

.service-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  line-height: 1.3;
}

.card-content {
  padding: 1.5rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-description {
  font-family: var(--font-body);
  font-size: 1rem;
  color: #4a5568;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}

.service-features {
  margin-bottom: 1.5rem;
  flex: 1;
}

.features-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.75rem 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #4a5568;
}

.check-icon {
  width: 16px;
  height: 16px;
  color: var(--color-yellow-primary);
  flex-shrink: 0;
}

.service-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-top: auto;
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-blue-primary);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-footer {
  padding: 1rem 2rem 2rem;
  text-align: center;
  background: #f8f9fa;
}

.learn-more-btn {
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 59, 102, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .services-cards-section {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .card-content {
    padding: 1rem 1.5rem;
  }

  .card-footer {
    padding: 1rem 1.5rem 1.5rem;
  }

  .service-stats {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .services-cards-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .service-icon {
    width: 60px;
    height: 60px;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .service-title {
    font-size: 1.25rem;
  }

  .service-description {
    font-size: 0.9rem;
  }

  .stat-number {
    font-size: 1.25rem;
  }

  .stat-label {
    font-size: 0.7rem;
  }
}
</style>
