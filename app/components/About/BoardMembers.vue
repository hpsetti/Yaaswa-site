<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Leadership Team
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in boardMembers"
            :key="member.id"
            class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <UAvatar
              :src="member.image"
              :alt="member.name"
              size="3xl"
              class="mx-auto mb-6"
            />
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              {{ member.name }}
            </h3>
            <p class="text-blue-600 font-semibold mb-3">
              {{ member.position }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ member.bio }}
            </p>
            <div class="mt-4 flex justify-center space-x-4">
              <UButton
                v-if="member.linkedin"
                :to="member.linkedin"
                target="_blank"
                variant="ghost"
                size="sm"
                icon="i-simple-icons-linkedin"
              />
              <UButton
                v-if="member.twitter"
                :to="member.twitter"
                target="_blank"
                variant="ghost"
                size="sm"
                icon="i-simple-icons-twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Custom board members data (keeping personal names)
const boardMembers = [
  {
    id: 1,
    name: "Yaaswa Mani",
    position: "Managing Director",
    bio: "With over 20 years of experience in construction and real estate, Yaaswa leads our strategic vision and drives excellence across all projects.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/yaaswamanigiri",
    twitter: "https://twitter.com/yaaswamanigiri",
  },
  {
    id: 2,
    name: "Yaaswa's Dad",
    position: "Chief Operating Officer",
    bio: "Yaaswa's Dad oversees our construction operations, ensuring seamless project delivery and maintaining our high standards of quality and safety.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/yaaswamanigiri",
    twitter: "https://twitter.com/yaaswamanigiri",
  },
  {
    id: 3,
    name: "Yaaswa's Mom",
    position: "Head of Projects",
    bio: "Yaaswa's Mom manages our project portfolio, ensuring timely completion and quality delivery of all construction projects.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/vikramsingh",
    twitter: null,
  },
];
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
