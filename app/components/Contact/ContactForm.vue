<template>
  <section class="contact-form-section">
    <div class="container">
      <div class="form-container">
        <!-- Form Header -->
        <div class="form-header">
          <h2 class="form-title">Get In Touch</h2>
          <p class="form-subtitle">
            Choose how you'd like to connect with us and we'll get back to you
            promptly.
          </p>
        </div>

        <!-- Contact Form -->
        <form class="contact-form" @submit.prevent="submitForm">
          <!-- Inquiry Type Selection -->
          <div class="form-group">
            <label for="inquiryType" class="form-label">
              How can we help you? <span class="required">*</span>
            </label>
            <select
              id="inquiryType"
              v-model="formData.inquiryType"
              class="form-select"
              @change="onInquiryTypeChange"
            >
              <option value="" disabled>Select an option</option>
              <option
                v-for="option in inquiryOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <p v-if="errors.inquiryType" class="error-message">
              {{ errors.inquiryType }}
            </p>
          </div>

          <!-- Dynamic Form Fields -->
          <div v-if="formData.inquiryType" class="dynamic-fields">
            <!-- Name Field -->
            <div class="form-group">
              <label for="name" class="form-label">
                Full Name <span class="required">*</span>
              </label>
              <UInput
                id="name"
                v-model="formData.name"
                type="text"
                placeholder="Enter your full name"
                class="form-input"
                :class="{ error: errors.name }"
              />
              <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
            </div>

            <!-- Email Field -->
            <div class="form-group">
              <label for="email" class="form-label">
                Email Address <span class="required">*</span>
              </label>
              <UInput
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="Enter your email address"
                class="form-input"
                :class="{ error: errors.email }"
              />
              <p v-if="errors.email" class="error-message">
                {{ errors.email }}
              </p>
            </div>

            <!-- Phone Field -->
            <div class="form-group">
              <label for="phone" class="form-label">
                Phone Number <span class="required">*</span>
              </label>
              <UInput
                id="phone"
                v-model="formData.phone"
                type="tel"
                placeholder="Enter your phone number"
                class="form-input"
                :class="{ error: errors.phone }"
              />
              <p v-if="errors.phone" class="error-message">
                {{ errors.phone }}
              </p>
            </div>

            <!-- Additional Fields Based on Inquiry Type -->
            <div
              v-if="formData.inquiryType === 'schedule-visit'"
              class="form-group"
            >
              <label for="preferredDate" class="form-label">
                Preferred Date <span class="required">*</span>
              </label>
              <UInput
                id="preferredDate"
                v-model="formData.preferredDate"
                type="date"
                class="form-input"
                :class="{ error: errors.preferredDate }"
              />
              <p v-if="errors.preferredDate" class="error-message">
                {{ errors.preferredDate }}
              </p>
            </div>

            <div
              v-if="formData.inquiryType === 'schedule-visit'"
              class="form-group"
            >
              <label for="preferredTime" class="form-label">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                v-model="formData.preferredTime"
                class="form-select"
              >
                <option value="" disabled>Select preferred time</option>
                <option
                  v-for="option in timeOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>

            <div
              v-if="formData.inquiryType === 'send-enquiry'"
              class="form-group"
            >
              <label for="projectType" class="form-label"> Project Type </label>
              <select
                id="projectType"
                v-model="formData.projectType"
                class="form-select"
              >
                <option value="" disabled>Select project type</option>
                <option
                  v-for="option in projectTypeOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>

            <!-- Message Field -->
            <div class="form-group">
              <label for="message" class="form-label">
                {{ getMessageLabel() }} <span class="required">*</span>
              </label>
              <UTextarea
                id="message"
                v-model="formData.message"
                :placeholder="getMessagePlaceholder()"
                rows="5"
                class="form-textarea"
                :class="{ error: errors.message }"
              />
              <p v-if="errors.message" class="error-message">
                {{ errors.message }}
              </p>
            </div>

            <!-- Submit Button -->
            <div class="form-actions">
              <UButton
                type="submit"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                size="lg"
                class="submit-button"
              >
                <UIcon
                  v-if="!isSubmitting"
                  name="i-heroicons-paper-airplane"
                  class="mr-2"
                />
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </UButton>
            </div>
          </div>
        </form>

        <!-- Success Message -->
        <div v-if="showSuccess" class="success-message">
          <UIcon name="i-heroicons-check-circle" class="success-icon" />
          <h3>Message Sent Successfully!</h3>
          <p>
            Thank you for contacting us. We'll get back to you within 2 hours
            during business hours.
          </p>
        </div>

        <!-- Error Message -->
        <div v-if="showError" class="error-message-container">
          <UIcon name="i-heroicons-exclamation-triangle" class="error-icon" />
          <h3>Oops! Something went wrong</h3>
          <p>
            We're sorry, but there was an error sending your message. Please try
            again or contact us directly.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Form data
const formData = ref({
  inquiryType: "",
  name: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  projectType: "",
  message: "",
});

// Form state
const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

// Form errors
const errors = ref<Record<string, string>>({});

// Inquiry type options
const inquiryOptions = [
  { label: "Schedule a Site Visit", value: "schedule-visit" },
  { label: "Send an Enquiry", value: "send-enquiry" },
  { label: "General Information", value: "general-info" },
];

// Time options for site visits
const timeOptions = [
  { label: "Morning (9:00 AM - 12:00 PM)", value: "morning" },
  { label: "Afternoon (12:00 PM - 3:00 PM)", value: "afternoon" },
  { label: "Evening (3:00 PM - 6:00 PM)", value: "evening" },
];

// Project type options
const projectTypeOptions = [
  { label: "Residential Construction", value: "residential" },
  { label: "Commercial Construction", value: "commercial" },
  { label: "Infrastructure Development", value: "infrastructure" },
  { label: "Industrial Construction", value: "industrial" },
  { label: "Renovation & Restoration", value: "renovation" },
  { label: "Project Management", value: "project-management" },
];

// Get message label based on inquiry type
const getMessageLabel = () => {
  switch (formData.value.inquiryType) {
    case "schedule-visit":
      return "Additional Requirements or Questions";
    case "send-enquiry":
      return "Project Details & Requirements";
    default:
      return "Message";
  }
};

// Get message placeholder based on inquiry type
const getMessagePlaceholder = () => {
  switch (formData.value.inquiryType) {
    case "schedule-visit":
      return "Please let us know about any specific areas you'd like to see, accessibility requirements, or any questions you have...";
    case "send-enquiry":
      return "Please describe your project requirements, budget range, timeline, and any specific needs...";
    default:
      return "How can we help you? Please provide any additional details...";
  }
};

// Handle inquiry type change
const onInquiryTypeChange = () => {
  // Clear previous errors
  errors.value = {};
  // Reset form data except inquiry type
  formData.value = {
    ...formData.value,
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    projectType: "",
    message: "",
  };
};

// Validation functions
const validateForm = () => {
  errors.value = {};

  if (!formData.value.inquiryType) {
    errors.value.inquiryType = "Please select an inquiry type";
  }

  if (!formData.value.name?.trim()) {
    errors.value.name = "Name is required";
  }

  if (!formData.value.email?.trim()) {
    errors.value.email = "Email is required";
  } else if (!isValidEmail(formData.value.email)) {
    errors.value.email = "Please enter a valid email address";
  }

  if (!formData.value.phone?.trim()) {
    errors.value.phone = "Phone number is required";
  }

  if (
    formData.value.inquiryType === "schedule-visit" &&
    !formData.value.preferredDate
  ) {
    errors.value.preferredDate = "Preferred date is required for site visits";
  }

  if (!formData.value.message?.trim()) {
    errors.value.message = "Message is required";
  }

  return Object.keys(errors.value).length === 0;
};

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Submit form
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;

  try {
    // Prepare email data
    const emailData = {
      to: "hpsetti2009@gmail.com",
      subject: `New ${formData.value.inquiryType.replace(
        "-",
        " "
      )} Inquiry - Sri Devi Constructions`,
      html: generateEmailHTML(),
      text: generateEmailText(),
    };

    // Send email using a simple fetch request to a contact endpoint
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      showSuccess.value = true;
      // Reset form
      formData.value = {
        inquiryType: "",
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        projectType: "",
        message: "",
      };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    showError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Generate HTML email content
const generateEmailHTML = () => {
  const inquiryTypeLabel =
    inquiryOptions.find((opt) => opt.value === formData.value.inquiryType)
      ?.label || formData.value.inquiryType;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #0d3b66; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
        New Contact Form Submission - Sri Devi Constructions
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0d3b66; margin-top: 0;">Inquiry Details</h3>
        <p><strong>Inquiry Type:</strong> ${inquiryTypeLabel}</p>
        <p><strong>Name:</strong> ${formData.value.name}</p>
        <p><strong>Email:</strong> ${formData.value.email}</p>
        <p><strong>Phone:</strong> ${formData.value.phone}</p>
        ${
          formData.value.preferredDate
            ? `<p><strong>Preferred Date:</strong> ${formData.value.preferredDate}</p>`
            : ""
        }
        ${
          formData.value.preferredTime
            ? `<p><strong>Preferred Time:</strong> ${formData.value.preferredTime}</p>`
            : ""
        }
        ${
          formData.value.projectType
            ? `<p><strong>Project Type:</strong> ${formData.value.projectType}</p>`
            : ""
        }
      </div>
      
      <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3 style="color: #0d3b66; margin-top: 0;">Message</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${
          formData.value.message
        }</p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #0d3b66; border-radius: 4px;">
        <p style="margin: 0; color: #0d3b66; font-weight: 600;">
          Please respond to this inquiry within 2 hours during business hours.
        </p>
      </div>
    </div>
  `;
};

// Generate plain text email content
const generateEmailText = () => {
  const inquiryTypeLabel =
    inquiryOptions.find((opt) => opt.value === formData.value.inquiryType)
      ?.label || formData.value.inquiryType;

  return `
New Contact Form Submission - Sri Devi Constructions

Inquiry Details:
- Inquiry Type: ${inquiryTypeLabel}
- Name: ${formData.value.name}
- Email: ${formData.value.email}
- Phone: ${formData.value.phone}
${
  formData.value.preferredDate
    ? `- Preferred Date: ${formData.value.preferredDate}`
    : ""
}
${
  formData.value.preferredTime
    ? `- Preferred Time: ${formData.value.preferredTime}`
    : ""
}
${
  formData.value.projectType
    ? `- Project Type: ${formData.value.projectType}`
    : ""
}

Message:
${formData.value.message}

Please respond to this inquiry within 2 hours during business hours.
  `;
};
</script>

<style scoped>
.contact-form-section {
  background-color: #f8f9fa;
  padding: 5rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.form-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 3rem;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.form-subtitle {
  font-family: var(--font-body);
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
}

.required {
  color: #ef4444;
}

.form-input,
.form-textarea {
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: white;
}

.form-select {
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: white;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  padding-right: 3rem;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-blue-primary);
  box-shadow: 0 0 0 3px rgba(13, 59, 102, 0.1);
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: #ef4444;
}

.error-message {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: #ef4444;
  margin: 0;
}

.dynamic-fields {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-actions {
  margin-top: 2rem;
  text-align: center;
}

.submit-button {
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: 0.025em;
  padding: 1rem 2rem;
  min-width: 200px;
}

.success-message,
.error-message-container {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.success-message {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
}

.error-message-container {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
}

.success-icon,
.error-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem auto;
  display: block;
}

.success-message h3,
.error-message-container h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.success-message p,
.error-message-container p {
  font-family: var(--font-body);
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .form-container {
    padding: 2rem;
  }

  .form-title {
    font-size: 2rem;
  }

  .form-subtitle {
    font-size: 1rem;
  }

  .contact-form {
    gap: 1.25rem;
  }

  .dynamic-fields {
    gap: 1.25rem;
  }

  .submit-button {
    width: 100%;
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.75rem;
  }

  .form-subtitle {
    font-size: 0.9rem;
  }

  .form-input,
  .form-select,
  .form-textarea {
    padding: 0.625rem 0.875rem;
    font-size: 0.9rem;
  }
}
</style>
