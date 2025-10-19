<template>
  <section class="contact-us-section">
    <div class="contact-container">
      <!-- Left Side - Black Text Section -->
      <div class="contact-text-section">
        <h2 class="contact-title">How can we help you?</h2>
        <button class="request-button" @click="navigateToContact">
          <span class="button-text">REQUEST INFORMATION</span>
          <span class="button-line"></span>
        </button>
      </div>

      <!-- Right Side - Image Section -->
      <div class="contact-image-section">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=face"
          alt="Professional woman working on laptop"
          class="contact-image"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const navigateToContact = () => {
  // Navigate to contact page
  navigateTo("/contact");
};
</script>

<style scoped>
.contact-us-section {
  background-color: white;
  padding: 4rem 0;
  min-height: 500px;
  display: flex;
  align-items: center;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: center;
  min-height: 400px;
}

.contact-text-section {
  background-color: #1a202c;
  color: white;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  position: relative;
  z-index: 2;
}

.contact-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 300;
  color: white;
  margin: 0 0 2rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.request-button {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  position: relative;
  overflow: hidden;
}

.request-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: white;
  transition: left 0.3s ease;
  z-index: -1;
}

.request-button:hover::before {
  left: 0;
}

.request-button:hover {
  color: #1a202c;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.button-text {
  position: relative;
  z-index: 1;
}

.button-line {
  width: 20px;
  height: 2px;
  background-color: white;
  transition: background-color 0.3s ease;
  position: relative;
  z-index: 1;
}

.request-button:hover .button-line {
  background-color: #1a202c;
}

.contact-image-section {
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.contact-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.contact-image-section:hover .contact-image {
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .contact-text-section {
    padding: 3rem 2rem;
    min-height: 300px;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .contact-image-section {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .contact-container {
    padding: 0 1rem;
  }

  .contact-text-section {
    padding: 2.5rem 1.5rem;
    min-height: 250px;
  }

  .contact-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .request-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.8rem;
  }

  .contact-image-section {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .contact-us-section {
    padding: 3rem 0;
  }

  .contact-text-section {
    padding: 2rem 1rem;
    min-height: 200px;
  }

  .contact-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .request-button {
    padding: 0.75rem 1.25rem;
    font-size: 0.75rem;
    gap: 0.75rem;
  }

  .button-line {
    width: 15px;
  }

  .contact-image-section {
    min-height: 200px;
  }
}
</style>
