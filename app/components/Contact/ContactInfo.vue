<template>
  <section class="contact-info-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          We're here to help with your construction needs. Reach out to us
          through any of these channels.
        </p>
      </div>

      <div class="info-grid">
        <!-- Phone Contact -->
        <div class="info-card">
          <div class="card-icon">
            <UIcon name="i-heroicons-phone" class="w-8 h-8" />
          </div>
          <h3 class="card-title">Call Us</h3>
          <p class="card-description">
            Speak directly with our team for immediate assistance
          </p>
          <div class="contact-details">
            <a href="tel:+919876543210" class="contact-link">
              +91 98765 43210
            </a>
            <a href="tel:+919876543211" class="contact-link">
              +91 98765 43211
            </a>
          </div>
          <p class="timing">Available 24/7 for emergencies</p>
        </div>

        <!-- Email Contact -->
        <div class="info-card">
          <div class="card-icon">
            <UIcon name="i-heroicons-envelope" class="w-8 h-8" />
          </div>
          <h3 class="card-title">Email Us</h3>
          <p class="card-description">
            Send us detailed inquiries and project requirements
          </p>
          <div class="contact-details">
            <a href="mailto:info@srideviconstructions.com" class="contact-link">
              info@srideviconstructions.com
            </a>
            <a
              href="mailto:projects@srideviconstructions.com"
              class="contact-link"
            >
              projects@srideviconstructions.com
            </a>
          </div>
          <p class="timing">Response within 2 hours</p>
        </div>

        <!-- Office Address -->
        <div class="info-card">
          <div class="card-icon">
            <UIcon name="i-heroicons-map-pin" class="w-8 h-8" />
          </div>
          <h3 class="card-title">Visit Us</h3>
          <p class="card-description">
            Come visit our office for detailed discussions
          </p>
          <div class="contact-details">
            <p class="address">
              Sri Devi Constructions<br />
              Hydernagar, Hyderabad<br />
              Telangana 500038, India
            </p>
          </div>
          <p class="timing">Mon - Sat: 9:00 AM - 6:00 PM</p>
        </div>

        <!-- WhatsApp Contact -->
        <div class="info-card">
          <div class="card-icon">
            <UIcon name="i-simple-icons-whatsapp" class="w-8 h-8" />
          </div>
          <h3 class="card-title">WhatsApp</h3>
          <p class="card-description">Quick queries and instant responses</p>
          <div class="contact-details">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link whatsapp-link"
            >
              +91 98765 43210
            </a>
          </div>
          <p class="timing">Available 9:00 AM - 8:00 PM</p>
        </div>
      </div>

      <!-- Business Hours -->
      <div class="business-hours">
        <h3 class="hours-title">Business Hours</h3>
        <div class="hours-grid">
          <div class="hours-item">
            <span class="day">Monday - Friday</span>
            <span class="time">9:00 AM - 6:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="day">Saturday and Sunday</span>
            <span class="time">9:00 AM - 4:00 PM</span>
          </div>
          <!-- <div class="hours-item">
            <span class="day">Sunday</span>
            <span class="time">Emergency Only</span>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Component logic can be added here if needed
</script>

<style scoped>
.contact-info-section {
  background-color: white;
  padding: 5rem 0;
}

.container {
  max-width: 1400px;
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

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  justify-items: center;
}

.info-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  width: 100%;
  min-width: 0;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--color-blue-primary);
}

.card-icon {
  width: 64px;
  height: 64px;
  background: var(--color-blue-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  color: white;
}

.card-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.75rem 0;
}

.card-description {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.contact-details {
  margin-bottom: 1rem;
}

.contact-link {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-blue-primary);
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #0a2d4a;
  text-decoration: underline;
}

.whatsapp-link {
  color: #25d366;
}

.whatsapp-link:hover {
  color: #128c7e;
}

.address {
  font-family: var(--font-body);
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

.timing {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #6b7280;
  font-style: italic;
  margin: 0;
}

.business-hours {
  background: var(--color-blue-primary);
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
}

.hours-title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  margin: 0 0 2rem 0;
}

.hours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.day {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: white;
}

.time {
  font-family: var(--font-body);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    justify-items: center;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .contact-info-section {
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

  .info-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    justify-items: center;
  }

  .info-card {
    padding: 1.5rem;
  }

  .business-hours {
    padding: 2rem;
  }

  .hours-title {
    font-size: 1.5rem;
  }

  .hours-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .hours-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .info-card {
    padding: 1.25rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-description {
    font-size: 0.9rem;
  }

  .contact-link {
    font-size: 1rem;
  }

  .business-hours {
    padding: 1.5rem;
  }

  .hours-title {
    font-size: 1.25rem;
  }
}
</style>
