<template>
  <div class="about-hero">
    <!-- Background Image -->
    <div class="hero-background">
      <img
        src="/images/HeroImages/hero-image-1.jpg"
        alt="About Sri Devi Constructions"
        class="background-image"
      />
      <div class="hero-overlay" />
    </div>

    <!-- Content -->
    <div class="hero-content">
      <div class="content-container">
        <div class="hero-text">
          <h1 class="hero-title">About Sri Devi Constructions</h1>
          <div class="hero-description">
            <p class="motto">"Building Dreams, Constructing Futures"</p>
            <p class="description">
              We are committed to delivering quality construction services with
              integrity, innovation, and excellence that exceed our clients'
              expectations.
            </p>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Years of Excellence</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">25+</span>
              <span class="stat-label">Cities Served</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-arrow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14L12 19L17 14"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 5L12 10L17 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <span class="scroll-text">Scroll to explore</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Component props can be added here if needed for customization
</script>

<style scoped>
.about-hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(13, 59, 102, 0.8) 0%,
    rgba(13, 59, 102, 0.6) 50%,
    rgba(13, 59, 102, 0.4) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content-container {
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 300;
  color: white;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.hero-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 800px;
}

.motto {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-yellow-primary);
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-style: italic;
}

.description {
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-stats {
  display: flex;
  gap: 3rem;
  margin-top: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-yellow-primary);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.scroll-arrow:hover {
  opacity: 1;
}

.scroll-text {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .motto {
    font-size: 1.25rem;
  }

  .description {
    font-size: 1.125rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .motto {
    font-size: 1.125rem;
  }

  .description {
    font-size: 1rem;
    max-width: 500px;
  }

  .hero-stats {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .motto {
    font-size: 1rem;
  }

  .description {
    font-size: 0.9rem;
  }

  .hero-stats {
    gap: 1rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .scroll-indicator {
    bottom: 1rem;
  }
}
</style>
