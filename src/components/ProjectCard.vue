<template>
  <div class="project-card">
    <img :src="projectImage" alt="Cover Image" />

    <h2>Titolo: {{ project.title }}</h2>

    <p>Descrizione: {{ project.description }}</p>

    <div class="technologies">
      <strong>Tecnologie usate:</strong>
      <ul>
        <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    projectImage() {
      return `http://127.0.0.1:8000/storage/cover_images/${this.project.cover_image.replace(
        "cover_images/",
        ""
      )}`;
    },
  },
};
</script>

<style scoped>
@import "../styles/generals.scss";
</style>
