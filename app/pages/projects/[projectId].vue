<template>
  <div>
    <ProjectsDetailsHero v-if="project" :project="project" />
    <ProjectsDetailsDescription v-if="project" :project="project" />
    <ProjectsDetailsVideoSection v-if="project" :project="project" />
    <ProjectsDetailsImageGallery v-if="project" :project="project" />
    <ProjectsDetailsLocationMap v-if="project" :project="project" />
    <ProjectsContactUs v-if="project" :project="project" />
    <div v-else class="error-container">
      <h1>Project Not Found</h1>
      <p>The project you're looking for doesn't exist.</p>
      <NuxtLink to="/projects" class="back-button">Back to Projects</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

const route = useRoute();
const { getProjectById } = useProjects();

const projectId = parseInt(route.params.projectId as string);
const project = getProjectById(projectId);

// Set page title
if (project) {
  useHead({
    title: `${project.name} - Sri Devi Constructions`,
    meta: [
      {
        name: "description",
        content: project.description.split("\n")[0],
      },
    ],
  });
}
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
}

.error-container h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: var(--color-blue-primary);
  margin-bottom: 1rem;
}

.error-container p {
  font-family: var(--font-body);
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.back-button {
  background-color: var(--color-blue-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: #0a2d4a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 59, 102, 0.3);
}
</style>
