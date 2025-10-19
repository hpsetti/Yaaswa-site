<template>
  <section class="awards-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Awards & Recognition</h2>
        <p class="section-subtitle">
          Celebrating our achievements and industry recognition
        </p>
      </div>

      <div class="awards-grid">
        <div v-for="award in awards" :key="award.id" class="award-card">
          <div class="award-header">
            <div class="award-icon">
              <UIcon :name="award.icon" class="icon" />
            </div>
            <div class="award-year">{{ award.year }}</div>
          </div>

          <div class="award-content">
            <h3 class="award-title">{{ award.title }}</h3>
            <p class="award-organization">{{ award.organization }}</p>
            <p class="award-description">{{ award.description }}</p>

            <div class="award-category">
              <span class="category-tag">{{ award.category }}</span>
            </div>
          </div>

          <div class="award-footer">
            <UButton
              :to="award.link"
              variant="ghost"
              size="sm"
              class="view-details-btn"
            >
              View Details
              <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </UButton>
          </div>
        </div>
      </div>

      <div class="awards-summary">
        <div class="summary-stats">
          <div class="stat-item">
            <div class="stat-number">25+</div>
            <div class="stat-label">Awards Won</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Years of Excellence</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">Industry Recognition</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Use content data composable
const { awards } = useContentData();
</script>

<style scoped>
.awards-section {
  background-color: white;
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

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.award-card {
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.award-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--color-blue-primary);
}

.award-header {
  padding: 2rem 2rem 1rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--color-blue-primary) 0%,
    #0a2d4a 100%
  );
  color: white;
  position: relative;
}

.award-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.icon {
  width: 40px;
  height: 40px;
  color: white;
}

.award-year {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.award-content {
  padding: 1.5rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.award-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.award-organization {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-blue-primary);
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.award-description {
  font-family: var(--font-body);
  font-size: 1rem;
  color: #4a5568;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  flex: 1;
}

.award-category {
  margin-bottom: 1rem;
}

.category-tag {
  background: var(--color-yellow-primary);
  color: #1a202c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.award-footer {
  padding: 0 2rem 2rem;
  text-align: center;
}

.view-details-btn {
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.view-details-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 59, 102, 0.3);
}

.awards-summary {
  background: linear-gradient(
    135deg,
    var(--color-blue-primary) 0%,
    #0a2d4a 100%
  );
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
}

.summary-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-yellow-primary);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .awards-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .summary-stats {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .awards-section {
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

  .awards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .award-content {
    padding: 1rem 1.5rem;
  }

  .award-footer {
    padding: 0 1.5rem 1.5rem;
  }

  .awards-summary {
    padding: 2rem 1rem;
  }

  .summary-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .awards-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .award-icon {
    width: 60px;
    height: 60px;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .award-title {
    font-size: 1.125rem;
  }

  .award-description {
    font-size: 0.9rem;
  }

  .summary-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }
}
</style>
