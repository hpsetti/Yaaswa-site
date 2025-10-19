<script setup lang="ts">
const testimonials = [
  {
    user: {
      name: "Rajesh Kumar",
      description: "Project Manager, L&T Construction",
      avatar: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote:
      "Sri Devi Constructions delivered our residential project ahead of schedule with exceptional quality. Their attention to detail and commitment to safety standards is unmatched in the industry.",
  },
  {
    user: {
      name: "Priya Sharma",
      description: "CEO, Spectrum Engineering",
      avatar: {
        src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote:
      "Working with Sri Devi Constructions has been a game-changer for our infrastructure projects. Their expertise in sustainable construction practices sets them apart from competitors.",
  },
  {
    user: {
      name: "Amit Patel",
      description: "Director, Pragathi Consultants",
      avatar: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote:
      "The commercial complex they built for us exceeded all expectations. Their innovative approach and use of modern technology made the entire process seamless.",
  },
  {
    user: {
      name: "Sunita Reddy",
      description: "Founder, Legend Consultants",
      avatar: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote:
      "Sri Devi Constructions transformed our vision into reality. Their team's professionalism and dedication to quality construction is truly commendable.",
  },
  {
    user: {
      name: "Vikram Singh",
      description: "Managing Director, KSA Consultants",
      avatar: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote:
      "Their highway construction project was completed with precision and efficiency. Sri Devi Constructions is our trusted partner for all major infrastructure developments.",
  },
  {
    user: {
      name: "Anita Desai",
      description: "Principal Architect, Spatial Consultants",
      avatar: {
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
        loading: "lazy",
      },
    },
    quote:
      "The luxury villa project showcased their exceptional craftsmanship and attention to architectural details. Highly recommended for premium construction projects.",
  },
];
</script>

<template>
  <section class="testimonials-section">
    <div class="container mx-auto px-6 py-20">
      <!-- Header -->
      <div class="testimonials-header">
        <h2 class="testimonials-title">What Our Clients Say</h2>
        <p class="testimonials-subtitle">
          Hear from our satisfied clients who have experienced our commitment to
          excellence
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="testimonials-container">
        <UMarquee
          pause-on-hover
          reverse
          :overlay="false"
          :ui="{
            root: '[--gap:--spacing(6)]',
            content: 'w-auto py-2 px-6 flex flex-row',
          }"
          class="w-full"
          :speed="40"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card"
          >
            <div class="testimonial-content">
              <div class="quote-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p class="testimonial-quote">{{ testimonial.quote }}</p>
            </div>

            <div class="testimonial-author">
              <UAvatar
                :src="testimonial.user.avatar.src"
                :alt="testimonial.user.name"
                size="md"
                class="author-avatar"
              />
              <div class="author-info">
                <h4 class="author-name">{{ testimonial.user.name }}</h4>
                <p class="author-title">{{ testimonial.user.description }}</p>
              </div>
            </div>
          </div>
        </UMarquee>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 500px;
}

.container {
  max-width: 1200px;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-blue-primary);
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.testimonials-subtitle {
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.7;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-container {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background-color: white;
  padding: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.testimonial-card {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  min-width: 400px;
  max-width: 400px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  margin: 0 1rem;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.quote-icon {
  color: var(--color-yellow-primary);
  margin-bottom: 1rem;
}

.testimonial-quote {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  font-style: italic;
  margin: 0;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  flex-shrink: 0;
}

.author-info {
  flex: 1;
}

.author-name {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-blue-primary);
  margin: 0 0 0.25rem 0;
}

.author-title {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .testimonials-title {
    font-size: 2rem;
  }

  .testimonial-card {
    min-width: 350px;
    max-width: 350px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .testimonials-title {
    font-size: 1.75rem;
  }

  .testimonials-subtitle {
    font-size: 1rem;
  }

  .testimonials-header {
    margin-bottom: 2rem;
  }

  .testimonial-card {
    min-width: 300px;
    max-width: 300px;
    padding: 1.5rem;
  }

  .testimonial-quote {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .testimonials-title {
    font-size: 1.5rem;
  }

  .testimonial-card {
    min-width: 280px;
    max-width: 280px;
    padding: 1.25rem;
  }

  .testimonial-author {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
}
</style>
