<template>
  <section class="stats-section">
    <div class="container mx-auto px-6 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Column - Company Info -->
        <div class="company-info">
          <div class="company-header">
            <h2 class="company-title">Building Excellence Since 1995</h2>
            <div class="title-accent" />
          </div>

          <div class="text-content">
            <p class="company-description">
              Sri Devi Constructions is a premier construction and engineering
              firm dedicated to delivering exceptional projects across
              residential, commercial, and infrastructure sectors. Our
              commitment to innovation, safety, and sustainable practices has
              made us a trusted partner in building India's future.
            </p>
            <p class="learn-more">
              Discover our portfolio of successful projects.
            </p>
          </div>

          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🏗️</div>
              <h3 class="service-title">Residential</h3>
              <p class="service-desc">Modern homes & apartments</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🏢</div>
              <h3 class="service-title">Commercial</h3>
              <p class="service-desc">Office spaces & retail</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🌉</div>
              <h3 class="service-title">Infrastructure</h3>
              <p class="service-desc">Bridges & highways</p>
            </div>
          </div>
        </div>

        <!-- Right Column - Statistics -->
        <div class="statistics">
          <div class="stats-header">
            <h3 class="stats-title">Our Impact</h3>
            <p class="stats-subtitle">Numbers that speak for themselves</p>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">₹</div>
              <div class="stat-content">
                <div class="stat-number">
                  <UICounter :end="250" :format="true" />
                  <span class="stat-unit">Cr</span>
                </div>
                <div class="stat-label">Projects Completed</div>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon">👥</div>
              <div class="stat-content">
                <div class="stat-number">
                  <UICounter :end="500" :format="true" />
                  <span class="stat-unit">+</span>
                </div>
                <div class="stat-label">Happy Families</div>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon">⭐</div>
              <div class="stat-content">
                <div class="stat-number">
                  <UICounter :end="28" :format="false" />
                  <span class="stat-unit">Years</span>
                </div>
                <div class="stat-label">Of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Component logic can be added here if needed
</script>

<style scoped>
.stats-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 600px;
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    var(--color-yellow-primary) 0%,
    transparent 70%
  );
  opacity: 0.1;
  border-radius: 50%;
  transform: translate(50%, -50%);
}

.container {
  max-width: 1200px;
  position: relative;
  z-index: 1;
}

.company-info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.company-header {
  margin-bottom: 1rem;
}

.company-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-blue-primary);
  margin: 0;
  line-height: 1.2;
  position: relative;
}

.title-accent {
  width: 60px;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--color-yellow-primary),
    var(--color-orange-primary)
  );
  margin-top: 1rem;
  border-radius: 2px;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.company-description {
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
}

.learn-more {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-blue-primary);
  margin: 0;
  font-weight: 600;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.service-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.service-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-blue-primary);
  margin: 0 0 0.5rem 0;
}

.service-desc {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.statistics {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-header {
  text-align: center;
  margin-bottom: 2rem;
}

.stats-title {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 300;
  color: var(--color-blue-primary);
  margin: 0 0 0.5rem 0;
}

.stats-subtitle {
  font-family: var(--font-body);
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  border-left: 4px solid var(--color-yellow-primary);
}

.stat-card:hover {
  transform: translateX(8px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--color-yellow-primary),
    var(--color-orange-primary)
  );
  border-radius: 12px;
  color: white;
  font-weight: bold;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-blue-primary);
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.stat-unit {
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--color-orange-primary);
}

.stat-label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid {
    gap: 3rem;
  }

  .company-title {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-unit {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .stats-section {
    padding: 3rem 0;
  }

  .company-title {
    font-size: 1.75rem;
  }

  .stat-card {
    padding: 1.5rem;
    gap: 1rem;
  }

  .stat-icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-unit {
    font-size: 0.875rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-card {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .stat-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .stat-card:hover {
    transform: translateY(-4px);
  }
}
</style>
