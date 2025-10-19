<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <div class="footer-grid">
          <!-- Company Info Section -->
          <div class="footer-section company-info">
            <div class="footer-logo">
              <h3 class="company-name">Sri Devi Constructions</h3>
              <div class="logo-accent" />
            </div>
            <p class="company-description">
              Building excellence since 1995. We are committed to delivering
              exceptional construction projects across residential, commercial,
              and infrastructure sectors.
            </p>
            <div class="social-links">
              <h4 class="social-title">Follow Us</h4>
              <div class="social-icons">
                <a href="#" class="social-link" aria-label="Facebook">
                  <UIcon name="i-lucide-facebook" class="social-icon" />
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <UIcon name="i-lucide-twitter" class="social-icon" />
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <UIcon name="i-lucide-linkedin" class="social-icon" />
                </a>
                <a href="#" class="social-link" aria-label="Instagram">
                  <UIcon name="i-lucide-instagram" class="social-icon" />
                </a>
                <a href="#" class="social-link" aria-label="YouTube">
                  <UIcon name="i-lucide-youtube" class="social-icon" />
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Links Section -->
          <div class="footer-section">
            <h4 class="section-title">Quick Links</h4>
            <ul class="footer-links">
              <li>
                <UButton
                  to="/"
                  variant="ghost"
                  color="white"
                  class="footer-link"
                  >Home</UButton
                >
              </li>
              <li>
                <UButton
                  to="/projects"
                  variant="ghost"
                  color="white"
                  class="footer-link"
                  >Our Projects</UButton
                >
              </li>
              <li>
                <UButton
                  to="/about-us"
                  variant="ghost"
                  color="white"
                  class="footer-link"
                  >About Us</UButton
                >
              </li>
              <li>
                <UButton
                  to="/services"
                  variant="ghost"
                  color="white"
                  class="footer-link"
                  >Services</UButton
                >
              </li>
              <li>
                <UButton
                  to="/newsroom"
                  variant="ghost"
                  color="white"
                  class="footer-link"
                  >Newsroom</UButton
                >
              </li>
            </ul>
          </div>

          <!-- Services Section -->
          <div class="footer-section">
            <h4 class="section-title">Our Services</h4>
            <ul class="footer-links">
              <li>
                <span class="footer-link-text" to="/services"
                  >Residential Construction</span
                >
              </li>
              <li>
                <span class="footer-link-text" to="/services"
                  >Commercial Projects</span
                >
              </li>
              <li>
                <span class="footer-link-text" to="/services"
                  >Infrastructure Development</span
                >
              </li>
              <li>
                <span class="footer-link-text" to="/services"
                  >Renovation & Remodeling</span
                >
              </li>
              <li>
                <span class="footer-link-text" to="/services"
                  >Project Management</span
                >
              </li>
            </ul>
          </div>

          <!-- Contact Info Section -->
          <div class="footer-section contact-info">
            <h4 class="section-title">Contact Information</h4>
            <div class="contact-details">
              <div class="contact-item">
                <UIcon name="i-lucide-map-pin" class="contact-icon" />
                <div class="contact-text">
                  <p class="contact-label">Head Office</p>
                  <p class="contact-value">
                    123 Construction Avenue<br />Hyderabad, Telangana 500001
                  </p>
                </div>
              </div>
              <div class="contact-item">
                <UIcon name="i-lucide-phone" class="contact-icon" />
                <div class="contact-text">
                  <p class="contact-label">Phone</p>
                  <p class="contact-value">+91 22 1234 5678</p>
                </div>
              </div>
              <div class="contact-item">
                <UIcon name="i-lucide-mail" class="contact-icon" />
                <div class="contact-text">
                  <p class="contact-label">Email</p>
                  <p class="contact-value">info@srideviconstructions.com</p>
                </div>
              </div>
              <div class="contact-item">
                <UIcon name="i-lucide-clock" class="contact-icon" />
                <div class="contact-text">
                  <p class="contact-label">Working Hours</p>
                  <p class="contact-value">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>
              &copy; {{ currentYear }} Sri Devi Constructions. All rights
              reserved.
            </p>
          </div>
          <div class="legal-links">
            <UButton
              to="/privacy-policy"
              variant="ghost"
              color="white"
              size="xs"
              class="legal-link"
            >
              Privacy Policy
            </UButton>
            <UButton
              to="/terms-of-service"
              variant="ghost"
              color="white"
              size="xs"
              class="legal-link"
            >
              Terms of Service
            </UButton>
            <UButton
              to="/sitemap"
              variant="ghost"
              color="white"
              size="xs"
              class="legal-link"
            >
              Sitemap
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Get current year for copyright
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: linear-gradient(
    135deg,
    var(--color-blue-primary) 0%,
    #1a365d 100%
  );
  color: white;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color-yellow-primary) 50%,
    transparent 100%
  );
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-main {
  padding: 4rem 0 2rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  align-items: start;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.company-info {
  gap: 2rem;
}

.footer-logo {
  margin-bottom: 0.5rem;
}

.company-name {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 300;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.logo-accent {
  width: 50px;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--color-yellow-primary),
    var(--color-orange-primary)
  );
  margin-top: 0.75rem;
  border-radius: 2px;
}

.company-description {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: #cbd5e0;
  margin: 0;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #cbd5e0;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: var(--color-yellow-primary);
  color: var(--color-blue-primary);
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-yellow-primary);
  border-radius: 1px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links li {
  margin: 0;
}

.footer-link {
  color: #e2e8f0 !important;
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 0.25rem 0 !important;
  text-align: left !important;
  justify-content: flex-start !important;
  transition: all 0.3s ease;
  opacity: 1 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.footer-link :deep(.ui-button-content) {
  color: #e2e8f0 !important;
  opacity: 1 !important;
}

.footer-link:hover {
  color: var(--color-yellow-primary) !important;
  background: transparent !important;
  transform: translateX(4px);
}

.footer-link:hover :deep(.ui-button-content) {
  color: var(--color-yellow-primary) !important;
}

.footer-link-text {
  color: #e2e8f0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-link-text:hover {
  color: var(--color-yellow-primary);
}

.contact-info {
  gap: 1.5rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  width: 20px;
  height: 20px;
  color: var(--color-yellow-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-yellow-primary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-value {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: #cbd5e0;
  margin: 0;
  line-height: 1.4;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #a0aec0;
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.legal-link {
  color: #e2e8f0 !important;
  font-family: var(--font-body);
  font-size: 0.875rem !important;
  padding: 0.25rem 0 !important;
  transition: all 0.3s ease;
}

.legal-link:hover {
  color: var(--color-yellow-primary) !important;
  background: transparent !important;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .company-info {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 1rem;
  }

  .footer-main {
    padding: 3rem 0 1.5rem 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .company-name {
    font-size: 1.5rem;
  }

  .social-icons {
    gap: 0.75rem;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .social-icon {
    width: 18px;
    height: 18px;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .legal-links {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .footer-main {
    padding: 2rem 0 1rem 0;
  }

  .company-name {
    font-size: 1.25rem;
  }

  .section-title {
    font-size: 1.125rem;
  }

  .contact-item {
    gap: 0.75rem;
  }

  .contact-icon {
    width: 18px;
    height: 18px;
  }

  .legal-links {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
