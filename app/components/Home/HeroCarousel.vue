<script setup lang="ts">
const sections = ref([
  {
    id: 1,
    title: "Section 1",
    heading:
      "Infrastructure development, mineral processing and contract solutions for mining markets",
    description:
      "Sri Devi Constructions specializes in mine management, production, infrastructure construction, maintenance and contract mining ventures, offering some of the most highly-skilled and experienced professionals in the industry.",
  },
  {
    id: 2,
    title: "Section 2",
    heading: "Heading 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Section 3",
    heading: "Heading 3",
    description: "Description 3",
  },
  {
    id: 4,
    title: "Section 4",
    heading: "Heading 4",
    description: "Description 4",
  },
  {
    id: 5,
    title: "Section 5",
    heading: "Heading 5",
    description: "Description 5",
  },
]);

const currentSection = ref(0);
let timer: NodeJS.Timeout;

onMounted(() => {
  timer = setInterval(() => {
    currentSection.value = (currentSection.value + 1) % sections.value.length;
  }, 5000);

  onUnmounted(() => {
    clearInterval(timer);
  });
});

const activeSection = computed(() => {
  return sections.value[currentSection.value];
});

const selectSection = (e) => {
  console.log(e.target.textContent);
  const selectedItem = sections.value.filter((item) => {
    return item.title === e.target.textContent;
  });
  console.log(selectedItem);
  currentSection.value = selectedItem[0].id - 1;
  clearInterval(timer);

  // Restart timer after 5 seconds
  setTimeout(() => {
    timer = setInterval(() => {
      currentSection.value = (currentSection.value + 1) % sections.value.length;
    }, 5000);
  }, 5000);
};
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <!-- <div v-for="section in sections" :key="section.id">
      <span>{{ sections[] }}</span>
      <span>{{ section.title }}</span>
    </div> -->
    <div
      class="backdrop-blur-[2px] min-h-[300px] min-w-[1200px] flex flex-col justify-between"
    >
      <h1 class="heading text-white md:max-w-[600px] lg:max-w-[1200px]">
        {{ activeSection?.heading }}
      </h1>
      <div class="text-white">
        <p class="mb-3 md:max-w-[600px] lg:max-w-[1200px]">
          {{ activeSection?.description }}
        </p>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="xl"
          variant="outline"
          >Button</UButton
        >
      </div>
      <div class="flex justify-around options">
        <div v-for="section in sections" :key="section.id">
          <span
            class="text-white"
            :class="activeSection?.title === section?.title ? 'bg-black' : ''"
            @click="selectSection"
            >{{ section.title }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.options {
  border-top: 2px solid var(--color-yellow-primary);
}
</style>
